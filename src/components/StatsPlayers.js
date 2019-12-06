import React, { Component } from "react";
import { Alert, Badge } from "react-bootstrap";
import PlayerStats from './PlayerStats';

class StatsPlayers extends Component {
  render() {
    return (
      <div>
        <Alert variant="light">
          <h1 align="center">
            <Badge variant="warning">Players statistics</Badge>
          </h1>
        </Alert>
        <div class='container'>
          <PlayerStats />
        </div>
      </div>
    );
  }
}

export default StatsPlayers;
