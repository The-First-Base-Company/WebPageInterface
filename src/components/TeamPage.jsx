import React, { Component } from "react";
import {
  Row,
  Col,
  Image,
  Alert,
  Badge,
  Table,
  Card,
  Tabs,
  Tab
} from "react-bootstrap";
import CardGame from "./cardGame";

document.body.style.background =
  "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcHBw0IBwcHBw0HBwcHCA8ICQcNFREWFiARFRUYHSggGBolJxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOmlIEkQRBBFEAUQSRBJEAigSKAAoAigZRQMooGUQABQAEAkkASQFJAiiCIIIogikCKIAogEUCWIgyigCIABoAA0AZRAANAACACSBAoEkQRSAkECkQRRBJEEUgSKAIoAigAaAAFAyiAAIACtAGUQABAJIASCBIIEggiiCKIIggiiAKQJFAEQARAANAACAAIAAgACKARABJAjEYCIaBGAgSCBIIEggikBSIApAEQARAAEAA0KDKIAUGgACAAIAJICYIYChghAkECQQJBAkECQQRBBJIEkgAIAKpABSAFFNAAGgACAAIAJIDFEoBMBAkQgSCBIIEggUCBIQFBAQkCCQCggEKhQQIAAgACAAIAJIEQQJBAkECWSDRZIEggSyQJZIFBAQkCFSAJAEEgAIAAgBQQCCQBJAjAgJBAkECQgaQIEhA0ggaQQFBAUECSAJIAgkABAIIAgkABAIFAkkBLJAkECQgaQIFAgSyQKCAoICggISBBIEEAQSBBAEEgCSBAoAQQRCAkIGkCBIQEhASyQKCAlkgkEBQQJBAgkCCAJIAgQCSQBJAkkBSQIpAikBRQJFAkkCRQBFAEUASQBJAgkASQBBAkEBCQJJA//2Q==)";

class TeamPage extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <br />
          <div>
            <Row>
              <Col md={6}>
                <Alert variant="light">
                  <h1 align="center">
                    <Badge variant="primary">Boston Red Sox</Badge>
                    <br />
                    <br />
                    <Image src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg" />
                  </h1>
                </Alert>
                <br />
                <Card>
                  <Card.Header>
                    <Tabs id="uncontrolled-tab-example">
                      <Tab eventKey="Bateo" title="Bateo">
                        <Card.Body>
                          <Table striped bordered hover>
                            <tr>
                              <th width="10">Photo</th>
                              <th width="10">Type Leader</th>
                              <th width="10">Name</th>
                              <th width="10">Position</th>
                              <th width="10">Number</th>
                            </tr>
                            <tr>
                              <th>
                                {" "}
                                <Image
                                  src="https://content.mlb.com/images/headshots/current/60x60/646240@3x.png"
                                  height="100"
                                  rounded
                                />{" "}
                              </th>
                              <th>Batting Average</th>
                              <th>Rafael Devers</th>
                              <th>3B</th>
                              <th>.311 AVG</th>
                            </tr>
                            <tr></tr>
                          </Table>
                        </Card.Body>
                      </Tab>
                      <Tab eventKey="pitcheo" title="Pitcheo">
                        <Card.Body>
                          <Table striped bordered hover>
                            <tr>
                              <th width="10">Photo</th>
                              <th width="10">Type Leader</th>
                              <th width="10">Name</th>
                              <th width="10">Position</th>
                              <th width="10">Number</th>
                            </tr>
                            <tr>
                              <th>
                                {" "}
                                <Image
                                  src="https://securea.mlb.com/mlb/images/players/head_shot/593958.jpg"
                                  height="100"
                                  rounded
                                />{" "}
                              </th>
                              <th>Wins</th>
                              <th>Eduardo Rodriguez</th>
                              <th>P</th>
                              <th>19 W</th>
                            </tr>
                            <tr></tr>
                          </Table>
                        </Card.Body>
                      </Tab>
                    </Tabs>
                  </Card.Header>
                </Card>
              </Col>

              <Col md={6}>
                <Alert variant="light">
                  <CardGame
                    time="15:00"
                    linkLocalTeam="https://www.mlb.com/redsox"
                    localTeamLogo="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    localTeam="Red Sox"
                    localPct="60.72%"
                    linkVisitTeam="https://www.mlb.com/rays"
                    visitTeamLogo="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
                    visitTeam="Rays"
                    visitPct="54.64%"
                  />
                  <CardGame
                    time="18:00"
                    linkLocalTeam="https://www.mlb.com/redsox"
                    localTeamLogo="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    localTeam="Red Sox"
                    localPct="60.72%"
                    linkVisitTeam="https://www.mlb.com/whitesox"
                    visitTeamLogo="https://securea.mlb.com/assets/images/2/9/0/267952290/cuts/320x180/cut.jpg"
                    visitTeam="White Sox"
                    visitPct="43.69%"
                  />

                  <CardGame
                    time="20:00"
                    linkLocalTeam="https://www.mlb.com/redsox"
                    localTeamLogo="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    localTeam="Red Sox"
                    localPct="60.72%"
                    linkVisitTeam="https://www.mlb.com/indians"
                    visitTeamLogo="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                    visitTeam="Indians"
                    visitPct="60.39%"
                  />
                </Alert>
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
                <Table striped bordered variant="light">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th># of games</th>
                      <th>Avg Hits</th>
                      <th># at bat</th>
                      <th>Runs</th>
                      <th>Hits</th>
                      <th>Home Runs</th>
                      <th>Wins</th>
                      <th>Losses</th>
                      <th>Opportunities</th>
                      <th>Put Out</th>
                      <th>Assistance</th>
                      <th>Errors</th>
                      <th>Avg Errors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default TeamPage;
