import React from "react";

import {BrowserRouter as Router, Route, Switch, Link, browserHistory} from "react-router-dom";

import Game from "../pages/Game/Game.js";
import Ranking from "../pages/Ranking/Ranking.js";
import "../style.css";


const getRouter = () => (
  <Router history={browserHistory}>
    <div className="bodyDiv">
      <ul className="tab-list">
        <li><Link to="/">Game</Link></li>
        <li><Link to="/ranking">Ranking</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Game}/>
        <Route path="/ranking" component={Ranking}/>
      </Switch>
    </div>
  </Router>
);

export default getRouter;