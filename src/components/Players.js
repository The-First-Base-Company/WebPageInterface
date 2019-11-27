import React, { Component } from "react";
import { Alert, Badge, Row, Col, Card, Table } from "react-bootstrap";

class Players extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="dark">
          <h1 align="center">
            <Badge variant="dark">Players</Badge>
          </h1>
        </Alert>
        <Row className="show-grid text-center">
          <Col xs={12} sm={6} className="person">
            <Card>
              <Card.Header as="h5">Michael Nelson Trout</Card.Header>
              <p>
                <img
                  src="https://securea.mlb.com/mlb/images/players/head_shot/545361.jpg"
                  width="120"
                  height="180"
                  alt="playerPhoto"
                />
              </p>
              <p align="center">
                <h6>
                  <p>
                    <b>Nickname:</b> Mike Trout
                  </p>
                  <p>
                    <b>Born:</b> August 7, 1991 Vineland, New Jersey
                  </p>
                  <p>
                    <b>Draft:</b> 1st round of the 2009 draft by the Angels
                  </p>
                  <p>
                    <b>College:</b> University of Delaware
                  </p>
                  <p>
                    <b>Debut:</b> July 8, 2011 for the Los Angeles Angels
                  </p>
                </h6>
              </p>
            </Card>
            <br />
          </Col>
          <Col xs={12} sm={6} className="person">
            <Table striped bordered size="md">
              <thead>
                <tr>
                  <th>W</th>
                  <th>L</th>
                  <th>ERA</th>
                  <th>G</th>
                  <th>GS</th>
                  <th>SV</th>
                  <th>IP</th>
                  <th>SO</th>
                  <th>WHIP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>8</td>
                  <td>3.96</td>
                  <td>31</td>
                  <td>31</td>
                  <td>0</td>
                  <td>195.1</td>
                  <td>195</td>
                  <td>1.26</td>
                </tr>
                <td>44</td>
                <td>38</td>
                <td>3.77</td>
                <td>126</td>
                <td>126</td>
                <td>0</td>
                <td>749.1</td>
                <td>726</td>
                <td>1.29</td>
                <tr></tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Players;
