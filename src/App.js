import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotesPage from "./pages/Notes";
import NotePage from "./pages/Note";

export const NotesContext = createContext();

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    if (note.length > 0) {
      setNotes([note, ...notes]);
    }
    setNote("");
  };
  const editNoteById = (text, id) => {
    notes[id] = text;
    setNotes(notes.filter((item, index) => (index == id ? text : item)));
  };
  const removeNote = (id) => setNotes(notes.filter((_, index) => index !== id));

  return (
    <NotesContext.Provider
      value={{
        note,
        setNote,
        notes,
        setNotes,
        addNote,
        editNoteById,
        removeNote,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={NotesPage} />
          <Route path="/notes/:id" component={NotePage} />
        </Switch>
      </Router>
    </NotesContext.Provider>
  );
};

export default App;
