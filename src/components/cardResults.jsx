import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Card } from "react-bootstrap";

class cardResults extends Component {
  render() {
    return (
      <div>
        <Card>
          <Table responsive="md">
            <thead>
              <tr>
                <th>Team</th>
                <th>
                  <h6>1</h6>
                </th>
                <th>
                  <h6>2</h6>
                </th>
                <th>
                  <h6>3</h6>
                </th>
                <th>
                  <h6>4</h6>
                </th>
                <th>
                  <h6>5</h6>
                </th>
                <th>
                  <h6>6</h6>
                </th>
                <th>
                  <h6>7</h6>
                </th>
                <th>
                  <h6>8</h6>
                </th>
                <th>
                  <h6>9</h6>
                </th>
                <th>R</th>
                <th>H</th>
                <th>E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
                <td>5</td>
                <td>8</td>
                <td>2</td>
              </tr>
              <tr>
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
                <td>3</td>
                <td>6</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default cardResults;
