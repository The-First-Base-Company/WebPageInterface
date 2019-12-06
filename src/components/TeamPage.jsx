import React, { Component } from "react";
import { useState, useEffect } from 'react';
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


function TeamPage() {

  useEffect(() => {
    fetchItems();
  }, []);

  var teamID = window.location.pathname.split('/');
  teamID = teamID[2].replace(/%20/gi, ' ');
  //console.log(playerID);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {

    var html = "";

    const data = await fetch(
      `http://localhost/php/teamPage.php`
    );

    const items = await data.json();
    items.forEach(element => {
      if (element.ID === teamID) {
        console.log("DISPLAY " + element.Nombre + "'S TEAM PAGE");

        console.log(element.Nombre);
        console.log(element.Logo);
        console.log(element.Web);
        console.log(element.Estadio);
        console.log(element.Liga);
        console.log(element.RankH);
        console.log(element.RankP);
        console.log(element.RankF);
        console.log(element.Juegos);

        html += element.Nombre;
        document.getElementById('name').innerHTML = html;
        html = "";

        html += '<Image src="' + element.Logo + '"/>';
        document.getElementById('logo').innerHTML = html;
        html = "";

        html += '</br><img src="' + element.Logo + '" alt="logo" height="70" className="d-inline-block align-left"/></br>' + element.Nombre;
        document.getElementById('localTeam').innerHTML = html;
        html = "";

        html += '<h6 class="text-center">' + element.WinPCT + '%</h6>';
        document.getElementById('winpct').innerHTML = html;
        html = "";

        html += element.Juegos;
        document.getElementById('numjuegos').innerHTML = html;
        html = "";

        html += element.AvgHits;
        document.getElementById('avghits').innerHTML = html;
        html = "";

        html += element.AtBat;
        document.getElementById('atbat').innerHTML = html;
        html = "";

        html += element.Runs;
        document.getElementById('runs').innerHTML = html;
        html = "";

        html += element.Hits;
        document.getElementById('hits').innerHTML = html;
        html = "";

        html += element.HomeRuns;
        document.getElementById('homeruns').innerHTML = html;
        html = "";

        html += element.Wins;
        document.getElementById('wins').innerHTML = html;
        html = "";

        html += element.Losses;
        document.getElementById('losses').innerHTML = html;
        html = "";

        html += element.Opor;
        document.getElementById('oport').innerHTML = html;
        html = "";

        html += element.Putout;
        document.getElementById('putout').innerHTML = html;
        html = "";

        html += element.Asist;
        document.getElementById('asist').innerHTML = html;
        html = "";

        html += element.Errores;
        document.getElementById('errores').innerHTML = html;
        html = "";

        html += element.AvgErrores;
        document.getElementById('avgerrores').innerHTML = html;
        html = "";
      }
    });
    setItems(items);
  };
  return (
    <React.Fragment>
      <main className="container">
        <br />
        <div>
          <Row>
            <Col md={6}>
              <Alert variant="light">
                <h1 align="center">
                  <Badge variant="primary" id='name'>Boston Red Sox</Badge>
                  <br />
                  <br />
                  <div id='logo'></div>
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
                <div>
                  <Card body>
                    <Table responsive="md">
                      <thead>
                        <tr>
                          <h5>15:00</h5>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a target="popup" id='localTeam'></a>
                          </td>
                          <td id='winpct'></td>
                          <td>
                            <a target="popup">
                              <br></br>
                              <img
                                src='https://securea.mlb.com/assets/images/8/7/6/267951876/cuts/320x180/cut.jpg'
                                alt="logo"
                                height="70"
                                className="d-inline-block align-left"
                              />
                              <br></br>
                              Washington Nationals
                            </a>
                          </td>
                          <td>
                            <h6>55.53%</h6>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                </div>
              </Alert>
            </Col>
          </Row>

          <Row>
            <Col>
              <br />
              <Table striped bordered variant="light">
                <thead>
                  <tr>
                    <th class='align-middle'>No. of Games</th>
                    <th class='align-middle'>Avg. Hits</th>
                    <th class='align-middle'>At Bat</th>
                    <th class='align-middle'>Runs</th>
                    <th class='align-middle'>Hits</th>
                    <th class='align-middle'>Home Runs</th>
                    <th class='align-middle'>Wins</th>
                    <th class='align-middle'>Losses</th>
                    <th class='align-middle'>Opportunities</th>
                    <th class='align-middle'>Put Out</th>
                    <th class='align-middle'>Assistance</th>
                    <th class='align-middle'>Errors</th>
                    <th class='align-middle'>Avg. Errors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id='numjuegos'></td>
                    <td id='avghits'></td>
                    <td id='atbat'></td>
                    <td id='runs'></td>
                    <td id='hits'></td>
                    <td id='homeruns'></td>
                    <td id='wins'></td>
                    <td id='losses'></td>
                    <td id='oport'></td>
                    <td id='putout'></td>
                    <td id='asist'></td>
                    <td id='errores'></td>
                    <td id='avgerrores'></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </main>
    </React.Fragment >
  );
}

export default TeamPage;