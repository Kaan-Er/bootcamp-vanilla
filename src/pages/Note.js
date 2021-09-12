import React from "react";
import { Link } from "react-router-dom";

const NotePage = (props) => {
  const text = props.location.state;
  return (
    <div>
      <p>{text}</p>
      <Link to="/">Back </Link>
    </div>
  );
};

export default NotePage;
