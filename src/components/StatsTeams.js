import React, { Component } from "react";
import { Alert, Badge } from "react-bootstrap";
import TableTeams from "./tableTeamsStats";

class StatsTeams extends Component {
  render() {
    return (
      <div>
        <Alert variant="info">
          <h1 align="center">
            <Badge variant="info">Teams statistics</Badge>
          </h1>
        </Alert>
        <TableTeams />
      </div>
    );
  }
}

export default StatsTeams;
