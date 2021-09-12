import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotesPage from "./pages/Notes";
import NotePage from "./pages/Note";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={NotesPage} />
          <Route path="/notes/:id" component={NotePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
