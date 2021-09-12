import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { NotesContext } from "../App";

const NoteCard = ({ id }) => {
  const history = useHistory();
  const [isEdit, setIsEdit] = useState(false);
  const [editNote, setEditNote] = useState("");
  const { notes, editNoteById, removeNote } = useContext(NotesContext);

  return (
    <div className="noteSection">
      <p className="noteText">{notes[id]}</p>
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
      <button onClick={() => history.push(`/notes/${id}`)}>Details</button>
      <button onClick={() => removeNote(id)}>Remove</button>
    </div>
  );
};

export default NoteCard;
