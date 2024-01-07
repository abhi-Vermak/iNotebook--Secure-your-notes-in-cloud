import React, { useContext, useState } from "react";
import Notes from "./Notes";
import noteContext from "../context/note/NoteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, SetNote] = useState({ title: "", description: "", tag: "default"});

  const handleClick = (e) => {
    e.preventDefault();
    console.log(addNote);
    addNote(note.title , note.description , note.tag);
  };

  const onChange = (e) => {
    SetNote({ ...note, [e.target.name]: e.target.value });
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
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
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
