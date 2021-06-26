import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Job from "./pages/Job";
import Connections from "./pages/Connections";
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Signin />
      </Route>
      <Route path="/jobs" exact>
        <Job />
      </Route>
      <Route path="/connections" exact>
        <Connections />
      </Route>
    </Router>
  );
}

export default App;
