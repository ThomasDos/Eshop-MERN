import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
