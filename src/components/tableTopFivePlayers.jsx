import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { Image } from "react-bootstrap";

class tableTopFivePlayers extends Component {
  render() {
    return (
      <div>
        <Table responsive size="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th> </th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h5>1.</h5>
              </td>
              <td>
                <a href={this.props.linkFirstPlayer} target="popup">
                  <Image
                    src={this.props.photoFirstPlayer}
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a href={this.props.linkFirstPlayer} target="popup">
                  {this.props.firstPlayer}
                </a>
              </td>
              <td>{this.props.teamFirstPlayer}</td>
            </tr>
            <tr>
              <td>
                <h5>2.</h5>
              </td>
              <td>
                <a href={this.props.linkSecondPlayer} target="popup">
                  <Image
                    src={this.props.photoSecondPlayer}
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a href={this.props.linkSecondPlayer} target="popup">
                  {this.props.secondPlayer}
                </a>
              </td>
              <td>{this.props.teamSecondPlayer}</td>
            </tr>
            <tr>
              <td>
                <h5>3.</h5>
              </td>
              <td>
                <a href={this.props.linkThirdPlayer} target="popup">
                  <Image
                    src={this.props.photoThirdPlayer}
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a href={this.props.linkThirdPlayer} target="popup">
                  {this.props.thirdPlayer}
                </a>
              </td>
              <td>{this.props.teamThirdPlayer}</td>
            </tr>
            <tr>
              <td>
                <h5>4.</h5>
              </td>
              <td>
                <a href={this.props.linkFourthPlayer} target="popup">
                  <Image
                    src={this.props.photoFourthPlayer}
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a href={this.props.linkFourthPlayer} target="popup">
                  {this.props.fourthPlayer}
                </a>
              </td>
              <td>{this.props.teamFourthPlayer}</td>
            </tr>
            <tr>
              <td>
                <h5>5.</h5>
              </td>
              <td>
                <a href={this.props.linkFifthPlayer} target="popup">
                  <Image
                    src={this.props.photoFifthPlayer}
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a href={this.props.linkFifthPlayer} target="popup">
                  {this.props.fifthPlayer}
                </a>
              </td>
              <td>{this.props.teamFifthPlayer}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default tableTopFivePlayers;
