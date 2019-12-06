import React, { Component } from "react";
import { Alert, Badge } from "react-bootstrap";
import TeamStats from './TeamStats';

class StatsTeams extends Component {
  render() {
    return (
      <div>
        <Alert variant="light">
          <h1 align="center">
            <Badge variant="warning">Teams statistics</Badge>
          </h1>
        </Alert>
        <div class='container'>
          <TeamStats />
        </div>
      </div>
    );
  }
}

export default StatsTeams;
