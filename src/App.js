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
            <Route path="/scores" component={Scores} />
            <Route path="/teams" component={Teams} />
            <Route path="/teams_stats" component={StatsTeams} />
            <Route path="/players" component={Players} />
            <Route path="/players_stats" component={StatsPlayers} />
            <Route path="/team_page" component={TeamPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
