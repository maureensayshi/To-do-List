import React from "react";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Game from "../pages/Game/Game.js";
import Ranking from "../pages/Ranking/Ranking.js";


const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Game</Link></li>
        <li><Link to="/Ranking">Ranking</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Game}/>
        <Route path="/Ranking" component={Ranking}/>
      </Switch>
    </div>
  </Router>
);

export default getRouter;