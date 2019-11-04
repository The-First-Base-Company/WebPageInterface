import React, { Component } from "react";
import TablePlayers from "./tablePlayers";

class StatsPlayers extends Component {
  render() {
    return (
      <div>
        <h1>Players statistics</h1>
        <TablePlayers />
      </div>
    );
  }
}

export default StatsPlayers;
