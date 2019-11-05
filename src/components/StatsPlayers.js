import React, { Component } from "react";
import TablePlayers from "./tablePlayersStats";
import { Alert, Badge } from "react-bootstrap";

class StatsPlayers extends Component {
  render() {
    return (
      <div>
        <Alert variant="warning">
          <h1 align="center">
            <Badge variant="warning">Players statistics</Badge>
          </h1>
        </Alert>
        <TablePlayers />
      </div>
    );
  }
}

export default StatsPlayers;
