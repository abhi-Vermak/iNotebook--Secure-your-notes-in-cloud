const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const fetchuser = require('../middleware/fetchuser')

//  bcrypt js
const bcrypt = require("bcrypt");

// Json webToken
const jwt = require("jsonwebtoken");
// Secret key
const JWT_SECRET = "Abhiisagoodbo$y";

// ROUTE 1 :create a new user :POST "/api/auth/createuser" .No login required
router.post(
  "/createuser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 3 }),
  ],
  async (req, res) => {
    //    If there are errors return bad request
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check weather user with this same email already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);
      // Create a newUser
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // res.json(user)
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
//ROUTE 2: Authenticate a user:  :POST "/api/auth/login"  .. No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // check error, if there are error in user inputs return bad request  and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    //   find email
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: "Please enter a valid email" });
      }
      // compare password
      const passwordCompare = await bcrypt.compare(password, user.password);
      // if password is wrong then return a error
      if (!passwordCompare) {
        return res.status(400).json({ error: "wrong password" });
      }

      //   if password is correct then below code will be run
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      // When try block not executes or any error occured then catch will handle that error
      console.error(error.message);
      res.status(500).send({ error: "Internal server error" });
    }
  }
);

// ROUTE 3: Get logged in user details using POST:"api/auth/getuser". Login required
router.post("/getuser",fetchuser,async (req, res) => {
    try {
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user)
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;
