import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "659533cef907426dd2b1eed5",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Abhishek verma ",
      description: "Be consistent abhi",
      tag: "personal",
      date: "2024-01-03T10:15:42.405Z",
      __v: 0,
    },
    {
      _id: "65968ac7c2ec1551e320f1da",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Abhishek Verma Abhi",
      description: "This is updated description",
      tag: "Personal Updated",
      date: "2024-01-04T10:39:03.961Z",
      __v: 0,
    },
    {
      _id: "65968ac8c2ec1551e320f1dc",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Harry Bhai",
      description: "Thanks Harry Bhai for your react tutorial",
      tag: "Tutorial",
      date: "2024-01-04T10:39:04.105Z",
      __v: 0,
    },
    {
      _id: "65968ac8c2ec1551e320f1de",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Harry Bhai",
      description: "Thanks Harry Bhai for your react tutorial",
      tag: "Tutorial",
      date: "2024-01-04T10:39:04.277Z",
      __v: 0,
    },
    {
      _id: "65968ac8c2ec1551e320f1e0",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Harry Bhai",
      description: "Thanks Harry Bhai for your react tutorial",
      tag: "Tutorial",
      date: "2024-01-04T10:39:04.473Z",
      __v: 0,
    },
    {
      _id: "65968ac8c2ec1551e320f1e2",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Harry Bhai",
      description: "Thanks Harry Bhai for your react tutorial",
      tag: "Tutorial",
      date: "2024-01-04T10:39:04.661Z",
      __v: 0,
    },
    {
      _id: "65968ac8c2ec1551e320f1e4",
      user: "6591dfe8d9e320fe637e1fcb",
      title: "Harry Bhai",
      description: "Thanks Harry Bhai for your react tutorial",
      tag: "Tutorial",
      date: "2024-01-04T10:39:04.839Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  // Add a Note
  const addNote = (title,description,tag) => {
    console.log("adding a new note");
    const note={
      _id: "65968ac7c2ec1551e320f1da",
      user: "6591dfe8d9e320fe637e1fcb",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-04T10:39:03.961Z",
      __v: 0,
    }
    setNotes(notes.concat(note));
  };

  // Add a Note
  const deleteNote = (id) => {};

  // Add a Note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
