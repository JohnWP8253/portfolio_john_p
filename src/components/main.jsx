import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './landingPage';
import { Switch } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component = {Landing}/>
    </Switch>
)

export default Main;