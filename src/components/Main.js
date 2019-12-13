import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => (
    <Switch>
        {/*Home Page*/}
        <Route exact path="/" component={Home}/>
        {/*About Page*/}
        <Route exact path="/about" component={About}/>
        {/*Projects Page*/}
        <Route exact path="/projects" component={Projects}/>
        {/*Contact Page*/}
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)

export default Main;
