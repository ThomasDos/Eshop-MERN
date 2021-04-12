import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>
      HATS PAGE {props.match.params.idParam ? ":" : null}{" "}
      {props.match.params.idParam}{" "}
    </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={HatsPage} exact path="/hats" />
        <Route component={HatsPage} path="/hats/:idParam" />
      </Switch>
    </div>
  );
}

export default App;
