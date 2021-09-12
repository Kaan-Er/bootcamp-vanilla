import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../App";

const NotePage = ({ match }) => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      <p>{notes[match.params.id]}</p>
      <Link to="/">Back </Link>
    </div>
  );
};

export default NotePage;
