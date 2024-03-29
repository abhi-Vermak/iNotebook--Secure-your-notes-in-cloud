const jwt = require('jsonwebtoken');
const JWT_SECRET = "Abhiisagoodbo$y";

const fetchuser =(req,res,next)=>{
    // Get the user from jwt token and add id to req object
    const token = req.header("auth-token");
    
    if(!token){
        res.status(401).send({error:"Please authenticate first"})
    }
    
    try {
        const  data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate first"})
    }
   
}

module.exports = fetchuser;
