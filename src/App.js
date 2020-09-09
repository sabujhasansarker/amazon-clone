import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";

const App = () => {
  return (
    <Router>
      <Switch>
        <NavBar />
      </Switch>
    </Router>
  );
};

export default App;
