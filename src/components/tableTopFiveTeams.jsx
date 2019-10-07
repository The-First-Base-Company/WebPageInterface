import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

class tableTopFiveTeams extends Component {
  render() {
    return (
      <div>
        <Table responsive size="md">
          <tbody>
            <tr>
              <td>
                <h5>1.</h5>
              </td>
              <td>
                <a href={this.props.linkFirstTeam} target="popup">
                  <img
                    src={this.props.logoFirstTeam}
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  {this.props.firstTeam}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>2.</h5>
              </td>
              <td>
                <a href={this.props.linkSecondTeam} target="popup">
                  <img
                    src={this.props.logoSecondTeam}
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  {this.props.secondTeam}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>3.</h5>
              </td>
              <td>
                <a href={this.props.linkThirdTeam} target="popup">
                  <img
                    src={this.props.logoThirdTeam}
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  {this.props.thirdTeam}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>4.</h5>
              </td>
              <td>
                <a href={this.props.linkFourthTeam} target="popup">
                  <img
                    src={this.props.logoFourthTeam}
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  {this.props.fourthTeam}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>5.</h5>
              </td>
              <td>
                <a href={this.props.linkFifthTeam} target="popup">
                  <img
                    src={this.props.logoFifthTeam}
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  {this.props.fifthTeam}
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default tableTopFiveTeams;
