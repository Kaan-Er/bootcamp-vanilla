import React, { useState } from "react";

const NoteCard = ({ text, editNoteById, removeNote, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editNote, setEditNote] = useState("");

  return (
    <div>
      <p className="noteText">{text}</p>
      {!isEdit && <button onClick={() => setIsEdit(true)}>Edit</button>}
      {isEdit && (
        <>
          <input
            onChange={(e) => {
              setEditNote(e.target.value);
            }}
          />
          <button
            onClick={() => {
              editNoteById(editNote, id);
              setIsEdit(false);
            }}
          >
            Save
          </button>
        </>
      )}
      <button onClick={() => removeNote(id)}>X</button>
    </div>
  );
};

export default NoteCard;
