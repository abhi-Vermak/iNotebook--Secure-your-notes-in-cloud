import React, { useContext, useState } from 'react';
import Notes from "./Notes";
// import noteContext from '../context/notes/NoteContext';

function AddNote() {
    // const context = useContext(noteContext);
    // const {addNote} = context;

    // const handleClick =() =>{
    //       console.log(addNote);
    // }

    // const onChange=(e) =>{
    //   // SetNote({...note ,[e.target.name] : e.target.value})
    // }
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
            name='title'
            aria-describedby="emailHelp"
            // onChange={onChange}
          />
          

        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc" name='desc'
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1" >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
      <Notes/>
    </div>
    </div>
  )
}

export default AddNote
