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
                <a href="https://www.mlb.com/angels" target="popup">
                  <img
                    src="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  Los Angels Angels
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>2.</h5>
              </td>
              <td>
                <a href="https://www.mlb.com/redsox" target="popup">
                  <img
                    src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  Boston Red Sox
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>3.</h5>
              </td>
              <td>
                <a href="https://www.mlb.com/yankees" target="popup">
                  <img
                    src="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  New York Yankees
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>4.</h5>
              </td>
              <td>
                <a href="https://www.mlb.com/indians" target="popup">
                  <img
                    src="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  Cleveland Indians
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <h5>5.</h5>
              </td>
              <td>
                <a href="https://www.mlb.com/rockies" target="popup">
                  <img
                    src="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                    alt="logo"
                    height="40"
                    className="d-inline-block align-left"
                  />
                  Colorado Rockies
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
