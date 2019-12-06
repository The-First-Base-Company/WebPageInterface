import React, { useState, useEffect } from 'react';
import { Alert, Badge, Row, Col, Card, Table } from "react-bootstrap";


function Players() {

  useEffect(() => {
    fetchItems();
  }, []);

  var playerID = window.location.pathname.split('/');
  playerID = playerID[2];
  //console.log(playerID);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {

    var html = "";

    const data = await fetch(
      `http://localhost/php/playerPage.php`
    );

    const items = await data.json();
    items.forEach(element => {
      if (element.ID === playerID) {
        console.log("DISPLAY " + element.Nombre + "'S PLAYER PAGE");
        console.log(element.Nombre);
        console.log(element.Foto);
        console.log(element.Nickname);
        console.log(element.Nacimiento);
        console.log(element.DraftRound);
        console.log(element.DraftYear);
        console.log(element.DraftTeam);
        console.log(element.Debut);

        html += '<h5> <b>' + element.Nombre + '</b></h5>';
        document.getElementById('name').innerHTML = html;
        html = "";
        html += '<img width="120" height="180" alt="playerPhoto" src="' + element.Foto + '"/>';
        document.getElementById('foto').innerHTML = html;
        html = "";
        html += '<p> <b>Nickname: </b>' + element.Nickname + '</p>';
        document.getElementById('nickname').innerHTML = html;
        html = "";
        html += '<p> <b>Born: </b>' + element.Nacimiento + '</p>';
        document.getElementById('birth').innerHTML = html;
        html = "";
        html += '<p> <b>Draft: </b> Round #' + element.DraftRound + ' of the ' + element.DraftYear + ' draft by the ' + element.DraftTeam + '</p>';
        document.getElementById('draft').innerHTML = html;
        html = "";
        html += '<p> <b>Debut: </b>' + element.Debut + '</p>';
        document.getElementById('debut').innerHTML = html;
        html = "";

        html += element.Juegos;
        document.getElementById('games').innerHTML = html;
        html = "";
        html += element.Wins;
        document.getElementById('wins').innerHTML = html;
        html = "";
        html += element.Losses;
        document.getElementById('losses').innerHTML = html;
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
        html += element.AvgHits;
        document.getElementById('avgh').innerHTML = html;
        html = "";
        html += element.AvgErrores;
        document.getElementById('avge').innerHTML = html;
        html = "";
      }
    });
    setItems(items);
  };

  return (
    <React.Fragment>
      <Alert variant="light">
        <h1 align="center">
          <Badge variant="warning">Players</Badge>
        </h1>
      </Alert>
      <main className="container">
        <Row className="show-grid text-center">
          <Col xs={12} sm={6}>
            <Card>
              <Card.Header as="h5" id='name'></Card.Header>
              <br />
              <p id='foto'></p>
              <p align="center">
                <h6>
                  <p id='nickname'></p>
                  <p id='birth'></p>
                  <p id='draft'></p>
                  <p id='debut'></p>
                </h6>
              </p>
            </Card>
            <br />
          </Col>
          <Col xs={12} sm={6}>
            <Table variant="light" striped bordered size="md">
              <thead>
                <tr>
                  <th class="align-middle">No. of Games</th>
                  <th class="align-middle">Attributed Wins</th>
                  <th class="align-middle">Attributed Losses</th>
                  <th class="align-middle">Runs</th>
                  <th class="align-middle">Hits</th>
                  <th class="align-middle">Home Runs</th>
                  <th class="align-middle">Avg. Hits</th>
                  <th class="align-middle">Avg. Errors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id='games'></td>
                  <td id='wins'></td>
                  <td id='losses'></td>
                  <td id='hits'></td>
                  <td id='runs'></td>
                  <td id='homeruns'></td>
                  <td id='avgh'></td>
                  <td id='avge'></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </main>
    </React.Fragment>
  );
}

export default Players;