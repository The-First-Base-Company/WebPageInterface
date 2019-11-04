import React, { Component } from "react";
import TableTeams from "./tableTeams";

class StatsTeams extends Component {
  render() {
    return (
      <div>
        <h1>Teams statistics</h1>
        <TableTeams />
      </div>
    );
  }
}

export default StatsTeams;
