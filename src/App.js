import React from "react";
import { Switch, Route } from "react-router-dom";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./page3/page-3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/monitor-interface/monitor/:pid/:mid"
          component={ThirdPage}
        />

        <Route
          exact
          path="/monitor-interface/monitor/:pid"
          component={SecondPage}
        />
        <Route path="/" component={FirstPage} />
      </Switch>
    </div>
  );
}

export default App;
