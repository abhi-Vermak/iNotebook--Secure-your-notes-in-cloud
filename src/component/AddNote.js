import React, { useContext, useState } from "react";
import noteContext from "../context/note/NoteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, SetNote] = useState({ title: "", description: "", tag: ""});

  const onChange = (e) => {
    SetNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title , note.description , note.tag);
    SetNote({ title: "", description: "", tag: "default"})
  };


  return (
    <div>
      <div className="container my-2">
        <h1>Add a Note</h1>
        <form className="my-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}  minLength={5} required value={note.title}  />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} minLength={5} required  value={note.description}/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label"> Tag </label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag}/>
          </div>
       
          <button
            disabled ={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
