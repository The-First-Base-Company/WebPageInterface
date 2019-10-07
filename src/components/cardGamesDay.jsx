import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CardGame from "./cardGame";

class cardGamesDay extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header as="h4">Games of the day</Card.Header>
          <CardGame />
          <CardGame />
        </Card>
      </div>
    );
  }
}

export default cardGamesDay;
