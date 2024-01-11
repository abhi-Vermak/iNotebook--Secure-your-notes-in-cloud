import React, { useContext, useEffect, useRef,useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import noteContext from "../context/note/NoteContext";

function Notes() {
  const context = useContext(noteContext);
  const { notes, editNote,getNotes } = context;

  const ref = useRef(null);
  const refClose = useRef(null);

  // Update note methdd is called
  
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  
  const [note, SetNote] = useState({ id:"" ,etitle: "", edescription: "", etag: "default"});
  
  const onChange = (e) => {
    SetNote({ ...note, [e.target.name]: e.target.value });
  };
  
  const updateNote = (currentNote) => {
    ref.current.click();
    SetNote({id:currentNote._id , etitle:currentNote.title , edescription: currentNote.description , etag: currentNote.tag})
  };
  
  const handleClick = (e) => {
    console.log("updating the note", note);

    refClose.current.click();
    editNote(note.id ,note.etitle ,note.edescription ,note.etag)
  };
  return (
    <>
      {/* AddNote Component */}
      <AddNote />

      {/* Edit Modal */}

          
          <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit Note
          </button>


          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {/* Edit Form */}
                
                <form className="my-4">
          <div className="mb-3">
            <label htmlFor="etitle" className="form-label">Title </label>
            <input type="text"  className="form-control" id="etitle" name="etitle"  value={note.etitle} aria-describedby="emailHelp"
            onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label"> Description </label>
            <input type="text" className="form-control" value={note.edescription} id="edescription" name="edescription" onChange={onChange} minLength={5}  required/>
          </div>

          <div className="mb-3">
            <label htmlFor="etag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
          </div>
            </form>
                </div>
                <div className="modal-footer">
                  <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={handleClick} disabled ={note.etitle.length < 5 || note.edescription.length<5}>Update Note</button>
                </div>
              </div>
            </div>
          </div>

      {/* NoteItem component */}
      <div className="row my-4">
        <h2>Your Notes</h2>
        <div className="container">
           {notes.length ===0 && "No Notes to Display"}
          </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
