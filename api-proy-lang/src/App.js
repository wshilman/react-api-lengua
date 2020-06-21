import React from "react";
import Login from "./components/Login.js";
import Menu from "./components/Menu.js";
import Game1 from "./components/Game1.js";
import Level2 from "./components/Level2.js";
import Level1adj from "./components/Lvl1a.js";
import Level2adj from "./components/Lvl2a.js";
import Level3adj from "./components/Lvl3a.js";
import Lvl1CL from "./components/Lvl1CL.js";
import Score from "./components/Score.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/menu" component={Menu} />
        <Route path="/game1" component={Game1} />
        <Route path="/level2" component={Level2} />
        <Route path="/score" component={Score} />
        <Route path="/level1adj" component={Level1adj} />
        <Route path="/level2adj" component={Level2adj} />
        <Route path="/level3adj" component={Level3adj} />
        <Route path="/Lvl1CL" component={Lvl1CL} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
