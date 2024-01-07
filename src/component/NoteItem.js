import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card  my-3">
        <div className="card-body">
          <div className="d-flex align-item-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="icon">
              <i className="fa-solid fa-trash mx-1"></i>
              <i className="fa-solid fa-edit mx-1"></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
