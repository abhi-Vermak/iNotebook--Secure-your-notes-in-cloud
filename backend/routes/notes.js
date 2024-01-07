const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes using Get:/api/notes/fetchallnotes .. Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error in fetch notes");
  }
});

//ROUTE 2: Add a new  notes using POST:"/api/notes/addnote" .. Login required
router.post(
  "/addnote",
  fetchuser,
  //   check that there is not a blank notes
  [
    body("title", "Enter title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //  if there are errors return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(401).json({ error: errors.array() });
      }
      // const add notes in database
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      //   Send error message if any error occured in try block
      console.error(error);
      res.status(500).send("Internal Server error in add Note");
    }
  }
);

//ROUTE 3: update a  notes using put:"/api/notes/updatenote" .. Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try{
  const {title,description,tag} = req.body;
  // create a newNote object 
  const newNote={};
  if(title){newNote.title = title}
  if(description){newNote.description = description}
  if(tag){newNote.tag = tag}

  // find note and update it
  let note = await Notes.findById(req.params.id);
  if(!note){return res.status(404).send("Not found")}

  if(note.user.toString() !== req.user.id){
     return res.status(401).send("Not Allowed")
  }

  note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote},{new:true})
  res.json(note);

} catch (error) {
  //   Send error message if any error occured in try block
  console.error(error);
  res.status(500).send("Internal Server error in Update Note");
}
});

//ROUTE 4: Delete a  note using delete:"/api/notes/deletenote" .. Login required
router.delete("/deletnote/:id", fetchuser, async (req, res) => {
try{
  // find note and delete it
  let note = await Notes.findById(req.params.id);
  // Find the note if not found then show msg not found
  if(!note){return res.status(404).send("Not found")}

  // Check that user owns this notes or not
  if(note.user.toString() !== req.user.id){
     return res.status(401).send("Not Allowed")
  }

  // Allow deletion if user owns this not
  note = await Notes.findByIdAndDelete(req.params.id,{new:true})
  res.json({"Success" : "Note has been deleted",note:note});

} catch (error) {
  //   Send error message if any error occured in try block
  console.error(error);
  res.status(500).send("Internal Server error in delete Note");
}
});

module.exports = router;
