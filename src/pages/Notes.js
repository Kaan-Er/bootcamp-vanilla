import React, { useContext } from "react";
import NoteCard from "../components/NoteCard";
import { NotesContext } from "../App";

const NotesPage = () => {
  const { note, setNote, notes, addNote } = useContext(NotesContext);

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
      {notes?.map((_, index) => (
        <NoteCard key={index} id={index} />
      ))}
    </div>
  );
};

export default NotesPage;
