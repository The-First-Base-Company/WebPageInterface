import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Card } from "react-bootstrap";

class cardResults extends Component {
  render() {
    return (
      <div>
        <Card>
          <Table responsive="sm">
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
                <th>
                  <h6>{this.props.inner10}</h6>
                </th>
                <th>R</th>
                <th>H</th>
                <th>E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href={this.props.linkLocalTeamResults} target="popup">
                    <img
                      src={this.props.localLogoResults}
                      alt="logo"
                      height="35"
                      className="d-inline-block align-left"
                    />
                    {this.props.localTeamResults}
                  </a>
                </td>
                <td>{this.props.localInner1}</td>
                <td>{this.props.localInner2}</td>
                <td>{this.props.localInner3}</td>
                <td>{this.props.localInner4}</td>
                <td>{this.props.localInner5}</td>
                <td>{this.props.localInner6}</td>
                <td>{this.props.localInner7}</td>
                <td>{this.props.localInner8}</td>
                <td>{this.props.localInner9}</td>
                <td>{this.props.localInner10}</td>
                <td>
                  <font color="blue">
                    <h6>{this.props.localRuns}</h6>
                  </font>
                </td>
                <td>
                  <font color="green">
                    <h6>{this.props.localHits}</h6>
                  </font>
                </td>
                <td>
                  <font color="red">
                    <h6>{this.props.localErrors}</h6>
                  </font>
                </td>
              </tr>
              <tr>
                <td>
                  <a href={this.props.linkVisitTeamResults} target="popup">
                    <img
                      src={this.props.visitLogoResults}
                      alt="logo"
                      height="35"
                      className="d-inline-block align-left"
                    />
                    {this.props.visitTeamResults}
                  </a>
                </td>
                <td>{this.props.visitInner1}</td>
                <td>{this.props.visitInner2}</td>
                <td>{this.props.visitInner3}</td>
                <td>{this.props.visitInner4}</td>
                <td>{this.props.visitInner5}</td>
                <td>{this.props.visitInner6}</td>
                <td>{this.props.visitInner7}</td>
                <td>{this.props.visitInner8}</td>
                <td>{this.props.visitInner9}</td>
                <td>{this.props.visitInner10}</td>
                <td>
                  <font color="blue">
                    <h6>{this.props.visitRuns}</h6>
                  </font>
                </td>
                <td>
                  <font color="green">
                    <h6>{this.props.visitHits}</h6>
                  </font>
                </td>
                <td>
                  <font color="red">
                    <h6>{this.props.visitErrors}</h6>
                  </font>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default cardResults;
