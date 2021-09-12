import React, { useState } from "react";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([text, ...notes]);
    setNote("");
  };

  const editNoteById = (text, id) => {
    notes[id] = text;
    setNotes(notes.filter((item, index) => (index == id ? text : item)));
  };

  const removeNote = (id) => setNotes(notes.filter((_, index) => index !== id));

  return (
    <div>
      <textarea
        placeholder="Please enter your note..."
        name="note"
        text={note}
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <button onClick={() => addNote(note)}>Save Note</button>
      {notes.map((item, index) => (
        <NoteCard
          key={index}
          text={item}
          id={index}
          editNoteById={editNoteById}
          removeNote={removeNote}
        />
      ))}
    </div>
  );
};

export default NotesPage;
