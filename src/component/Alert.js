import React from "react";

function Alert(props) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {props.message} This is Alert of danger
      </div>
    </div>
  );
}

export default Alert;
