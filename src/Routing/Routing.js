import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages";
import Favorites from "../pages/Favorites/Favorites";
import NavBar from "../components/NavBar";

const Routing = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
};

export default Routing;
