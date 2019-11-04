import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Scores from "./components/Scores";
import Teams from "./components/Teams";
import Players from "./components/Players";
import StatsPlayers from "./components/StatsPlayers";
import StatsTeams from "./components/StatsTeams";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/home" component={Home} />
          <Route path="/scores" component={Scores} />
          <Route path="/teams" component={Teams} />
          <Route path="/teams_stats" component={StatsTeams} />
          <Route path="/players" component={Players} />
          <Route path="/players_stats" component={StatsPlayers} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
