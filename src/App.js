import React, { useState } from "react";
import "./App.css";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, text]);
    setNote("");
  };

  const removeNote = (text) => setNotes(notes.filter((item) => item !== text));

  return (
    <div className="App">
      <textarea
        placeholder="Please enter your note..."
        name="note"
        text={note}
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <button onClick={() => addNote(note)}>Save Note</button>
      {notes.map((item) => (
        <NoteCard text={item} removeNote={removeNote} />
      ))}
    </div>
  );
};

export default App;
