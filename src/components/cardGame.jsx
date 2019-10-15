import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Table } from "react-bootstrap";

class CardGame extends Component {
  render() {
    return (
      <div>
        <Card body>
          <Table responsive="md">
            <thead>
              <tr>
                <h5>{this.props.time}</h5>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href={this.props.linkLocalTeam} target="popup">
                    <img
                      src={this.props.localTeamLogo}
                      alt="logo"
                      height="70"
                      className="d-inline-block align-left"
                    />
                    {this.props.localTeam}
                  </a>
                </td>
                <td>
                  <h6>{this.props.localPct}</h6>
                </td>
                <td>
                  <a href={this.props.linkVisitTeam} target="popup">
                    <img
                      src={this.props.visitTeamLogo}
                      alt="logo"
                      height="70"
                      className="d-inline-block align-left"
                    />
                    {this.props.visitTeam}
                  </a>
                </td>
                <td>
                  <h6>{this.props.visitPct}</h6>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default CardGame;
/*
<div>
        <Card body>
          <Table responsive="md">
            <thead>
              <tr>
                <h5>19:00</h5>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.mlb.com/redsox">
                    <img
                      src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                      alt="logo"
                      height="70"
                      className="d-inline-block align-left"
                    />
                    Boston Red Sox
                  </a>
                </td>
                <td>
                  <h6>52%</h6>
                </td>
                <td>
                  <a href="https://www.mlb.com/yankees">
                    <img
                      src="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                      alt="logo"
                      height="70"
                      className="d-inline-block align-left"
                    />
                    New York Yankees
                  </a>
                </td>
                <td>
                  <h6>48%</h6>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>*/
