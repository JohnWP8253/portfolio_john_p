import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Landing from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component = {Landing}/>
        <Route path="/aboutMe" component = {AboutMe}/>
        <Route path="/contact" component = {Contact}/>
        <Route path="/projects" component = {Projects}/>
        <Route path="/resume" component = {Resume}/>
    </Switch>
)

export default Main;