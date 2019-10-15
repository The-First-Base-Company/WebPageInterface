import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../App.css";
import TableTopFivePlayers from "./../tableTopFivePlayers";
import TableTopFiveTeams from "./../tableTopFiveTeams";
import CardGame from "./../cardGame";
import CardResults from "./../cardResults";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <br />
          <Row>
            <Col s={12} md={8}>
              <div>
                <Card>
                  <Card.Header as="h4">Games of the day</Card.Header>
                  <CardGame
                    time="19:00"
                    linkLocalTeam="https://www.mlb.com/orioles"
                    localTeamLogo="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                    localTeam="Orioles"
                    localPct="52%"
                    linkVisitTeam="https://www.mlb.com/braves"
                    visitTeamLogo="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
                    visitTeam="Braves"
                    visitPct="48%"
                  />
                  <CardGame
                    time="19:30"
                    linkLocalTeam="https://www.mlb.com/redsox"
                    localTeamLogo="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    localTeam="Red sox"
                    localPct="43%"
                    linkVisitTeam="https://www.mlb.com/yankees"
                    visitTeamLogo="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                    visitTeam="Yankees"
                    visitPct="57%"
                  />
                </Card>
                <br />
                <Card>
                  <Card.Header as="h4">Previous games results</Card.Header>
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/dbacks"
                    localLogoResults="https://securea.mlb.com/assets/images/7/1/8/267947718/cuts/320x180/cut.jpg"
                    localTeamResults="Diamondbacks"
                    localInner1="0"
                    localInner2="1"
                    localInner3="0"
                    localInner4="2"
                    localInner5="0"
                    localInner6="0"
                    localInner7="1"
                    localInner8="0"
                    localInner9="2"
                    localRuns="6"
                    localHits="10"
                    localErrors="1"
                    linkVisitTeamResults="https://www.mlb.com/phillies"
                    visitLogoResults="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
                    visitTeamResults="Phillies"
                    visitInner1="1"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="2"
                    visitInner5="1"
                    visitInner6="1"
                    visitInner7="1"
                    visitInner8="0"
                    visitInner9="3"
                    visitRuns="9"
                    visitHits="15"
                    visitErrors="3"
                  />
                </Card>
                <CardResults
                  linkLocalTeamResults="https://www.mlb.com/bluejays"
                  localLogoResults="https://securea.mlb.com/assets/images/5/3/2/267952532/cuts/320x180/cut.jpg"
                  localTeamResults="Blue Jays"
                  localInner1="2"
                  localInner2="1"
                  localInner3="0"
                  localInner4="1"
                  localInner5="0"
                  localInner6="0"
                  localInner7="2"
                  localInner8="2"
                  localInner9="1"
                  localRuns="9"
                  localHits="13"
                  localErrors="2"
                  linkVisitTeamResults="https://www.mlb.com/dodgers"
                  visitLogoResults="https://securea.mlb.com/assets/images/7/2/8/267951728/cuts/320x180/cut.jpg"
                  visitTeamResults="Dodgers"
                  visitInner1="3"
                  visitInner2="0"
                  visitInner3="2"
                  visitInner4="2"
                  visitInner5="3"
                  visitInner6="1"
                  visitInner7="2"
                  visitInner8="0"
                  visitInner9="X"
                  visitRuns="13"
                  visitHits="19"
                  visitErrors="3"
                />
              </div>
            </Col>
            <Col s={6} md={4}>
              <Card>
                <Card.Header as="h5">Top 5 teams</Card.Header>
                <TableTopFiveTeams
                  firstTeam="Los Angels Angels"
                  linkFirstTeam="https://www.mlb.com/angels"
                  logoFirstTeam="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
                  secondTeam="Boston Red Sox"
                  linkSecondTeam="https://www.mlb.com/redsox"
                  logoSecondTeam="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                  thirdTeam="New York Yankees"
                  linkThirdTeam="https://www.mlb.com/yankees"
                  logoThirdTeam="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                  fourthTeam="Cleveland Indians"
                  linkFourthTeam="https://www.mlb.com/indians"
                  logoFourthTeam="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                  fifthTeam="Colorado Rockies"
                  linkFifthTeam="https://www.mlb.com/rockies"
                  logoFifthTeam="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                />
              </Card>
              <br />
              <Card>
                <Card.Header as="h5">Top 5 players</Card.Header>
                <TableTopFivePlayers
                  firstPlayer="Mike Trout"
                  linkFirstPlayer="https://www.mlb.com/player/mike-trout-545361"
                  photoFirstPlayer="https://securea.mlb.com/mlb/images/players/head_shot/545361.jpg"
                  teamFirstPlayer="Angels"
                  secondPlayer="Mookie Betts"
                  linkSecondPlayer="https://www.mlb.com/player/mookie-betts-605141"
                  photoSecondPlayer="https://securea.mlb.com/mlb/images/players/head_shot/605141.jpg"
                  teamSecondPlayer="Red sox"
                  thirdPlayer="José Ramírez"
                  linkThirdPlayer="https://www.mlb.com/player/jose-ramirez-608070"
                  photoThirdPlayer="https://securea.mlb.com/mlb/images/players/head_shot/608070.jpg"
                  teamThirdPlayer="Indians"
                  fourthPlayer="Francisco Lindor"
                  linkFourthPlayer="https://www.mlb.com/player/francisco-lindor-596019"
                  photoFourthPlayer="https://securea.mlb.com/mlb/images/players/head_shot/596019.jpg"
                  teamFourthPlayer="Indians"
                  fifthPlayer="Nolan Arenado"
                  linkFifthPlayer="https://www.mlb.com/player/nolan-arenado-571448"
                  photoFifthPlayer="https://securea.mlb.com/mlb/images/players/head_shot/571448.jpg"
                  teamFifthPlayer="Rockies"
                />
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </main>
      </React.Fragment>
    );
  }
}

export default LandingPage;
