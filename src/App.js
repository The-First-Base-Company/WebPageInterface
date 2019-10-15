import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableTopFivePlayers from "./components/tableTopFivePlayers";
import TableTopFiveTeams from "./components/tableTopFiveTeams";
import CardGame from "./components/cardGame";
import CardResults from "./components/cardResults";
import TablePlayers from "./components/tablePlayers";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

import About from './About'; 
import NavBar from './components/Nav/navBar'
import LandingPage from './components/LandingPage/LandingPage'

import {BrowserRouter as Router, Switch, Rout} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <LandingPage path='/' exact component={LandingPage}/>!
            <About path='/about'exact component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
