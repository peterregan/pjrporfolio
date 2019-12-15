import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

/* Allows for routing/navigating between each page */
const Main = () => (
  <Switch>
    {/*Home Page*/}
    <Route exact path="/" component={Home} />
    {/*About Page*/}
    <Route exact path="/about" component={About} />
    {/*Contact Page*/}
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
