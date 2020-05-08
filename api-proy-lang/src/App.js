import React from "react";
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import Level from './components/Level.js';
import Task from './components/Task.js';
import Score from './components/Score.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/level" component={Level}/>
        <Route path="/task" component={Task}/>
        <Route path="/score" component={Score}/>
      </Switch>
      </BrowserRouter>
    );
};

export default (App);
