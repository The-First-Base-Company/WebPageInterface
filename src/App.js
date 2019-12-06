import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Scores from "./components/Scores";
import Teams from "./components/Teams";
import Players from "./components/Players";
import StatsPlayers from "./components/StatsPlayers";
import StatsTeams from "./components/StatsTeams";
import TeamPage from "./components/TeamPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/scores" exact component={Scores} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/teams_stats" exact component={StatsTeams} />
            <Route path="/players_stats" exact component={StatsPlayers} />
            <Route path="/team/:id" exact component={TeamPage} />
            <Route path="/player/:id" component={Players} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
