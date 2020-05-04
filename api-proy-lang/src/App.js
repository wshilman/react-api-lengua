import React from "react";
import { useStyles } from "./components/styles.js";
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import Level from './components/Level.js';
import Task from './components/Task.js';
import Score from './components/Score.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const classes = useStyles();

  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/level" component={Level}/>
        <Route path="/task" component={Task}/>
        <Route path="/score" component={Score}/>
      </Switch>
    </Router>
      
  );
}

export default App;
