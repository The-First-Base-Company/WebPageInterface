import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import TableTopFivePlayers from "./components/tableTopFivePlayers";
import TableTopFiveTeams from "./components/tableTopFiveTeams";
import CardGame from "./components/cardGame";
import TablePlayers from "./components/tablePlayers";
import CardResults from "./components/cardResults";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <br />
          <Row>
            <Col s={12} md={8}>
              <div>
                <Card>
                  <Card.Header as="h4">Games of the day</Card.Header>
                  <CardGame hour="19:00" />
                  <CardGame />
                </Card>
                <br />
                <Card>
                  <Card.Header as="h4">Previous game results</Card.Header>
                  <CardResults />
                </Card>
              </div>
            </Col>
            <Col s={6} md={4}>
              <Card>
                <Card.Header as="h5">Top 5 teams</Card.Header>
                <TableTopFiveTeams />
              </Card>
              <br />
              <Card>
                <Card.Header as="h5">Top 5 players</Card.Header>
                <TableTopFivePlayers />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col s={12} md={8}></Col>
            <Col s={6} md={4}></Col>
          </Row>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
