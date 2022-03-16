import React from "react"
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import WalletForm from "./views/WalletForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/wallet-form" component={WalletForm} />
      </Switch>
    </div>
  );
}

export default App;