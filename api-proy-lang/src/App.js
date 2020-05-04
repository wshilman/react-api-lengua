import React from "react";
import { useStyles } from "./components/styles.js";
import Login from './Login';
import SelectTask from './SelectTask';
import Level from './Level';
import Task from './Task';
import Score from './Score';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const classes = useStyles();

  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/SelectTask" component={SelectTask}/>
        <Route path="/Level" component={Level}/>
        <Route path="/Task" component={Task}/>
        <Route path="/Score" component={Score}/>
      </Switch>
    </Router>
      
  );
}

export default App;
