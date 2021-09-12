import React, { useState } from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ text, editNoteById, removeNote, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editNote, setEditNote] = useState("");

  return (
    <div className="noteSection">
      <p className="noteText">
        <Link
          to={{
            pathname: `/notes/${id}`,
            state: text,
          }}
        >
          {text}
        </Link>
      </p>
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
