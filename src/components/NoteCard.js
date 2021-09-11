import React from "react";

const NoteCard = ({ text, removeNote }) => {
  return (
    <div>
      <p className="noteText">{text}</p>
      <button onClick={() => removeNote(text)}>X</button>
    </div>
  );
};

export default NoteCard;
