import React from "react";
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import Game1 from './components/Game1.js';
import Level2 from './components/Level2.js';
import Level3 from './components/Level3.js';
import Score from './components/Score.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/game1" component={Game1}/>
        <Route path="/level2" component={Level2}/>
        <Route path="/level3" component={Level3}/>
        <Route path="/score" component={Score}/>
      </Switch>
      </BrowserRouter>
    );
};

export default (App);
