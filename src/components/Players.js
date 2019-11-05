import React, { Component } from "react";
import { Alert, Badge } from "react-bootstrap";

class Players extends Component {
  render() {
    return (
      <div>
        <Alert variant="danger">
          <h1 align="center">
            <Badge variant="danger">Players</Badge>
          </h1>
        </Alert>
      </div>
    );
  }
}

export default Players;
