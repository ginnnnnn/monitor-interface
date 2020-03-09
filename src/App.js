import React from "react";
import { Switch, Route } from "react-router-dom";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/monitor/:pid" component={SecondPage} />
        <Route path="/" component={FirstPage} />
      </Switch>
    </div>
  );
}

export default App;
