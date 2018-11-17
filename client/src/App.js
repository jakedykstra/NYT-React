import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Jumbotron from "./components/Jumbotron";
import Saved from "./components/Saved";
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
