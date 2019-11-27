import React, { Component } from "react";
import TableTopFivePlayers from "./tableTopFivePlayers";
import TableTopFiveTeams from "./tableTopFiveTeams";
import CardGame from "./cardGame";
import CardResults from "./cardResults";
import { Row, Col, Card, Container, Alert, Badge } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="dark">
          <h1 align="center">
            <Badge variant="dark">Home</Badge>
          </h1>
        </Alert>
        <Container>
          <Row>
            <Col s={12} md={8}>
              <div>
                <Card>
                  <Card.Header as="h4" className="text-center">
                    Games of the day
                  </Card.Header>
                  <CardGame
                    time="15:00"
                    linkLocalTeam="https://www.mlb.com/yankees"
                    localTeamLogo="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                    localTeam="Yankees"
                    localPct="60.72%"
                    linkVisitTeam="https://www.mlb.com/rays"
                    visitTeamLogo="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
                    visitTeam="Rays"
                    visitPct="54.64%"
                  />
                  <CardGame
                    time="15:30"
                    linkLocalTeam="https://www.mlb.com/phillies"
                    localTeamLogo="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
                    localTeam="Phillies"
                    localPct="46.72%"
                    linkVisitTeam="https://www.mlb.com/rockies"
                    visitTeamLogo="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                    visitTeam="Rockies"
                    visitPct="52.08%"
                  />
                  <CardGame
                    time="15:30"
                    linkLocalTeam="https://www.mlb.com/braves"
                    localTeamLogo="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
                    localTeam="Braves"
                    localPct="56.49%"
                    linkVisitTeam="https://www.mlb.com/mets"
                    visitTeamLogo="https://securea.mlb.com/assets/images/5/5/6/267951556/cuts/320x180/cut.jpg"
                    visitTeam="Mets"
                    visitPct="47.97%"
                  />
                  <CardGame
                    time="17:30"
                    linkLocalTeam="https://www.mlb.com/pirates"
                    localTeamLogo="https://securea.mlb.com/assets/images/9/6/2/267951962/cuts/320x180/cut.jpg"
                    localTeam="Pirates"
                    localPct="49.93%"
                    linkVisitTeam="https://www.mlb.com/cubs"
                    visitTeamLogo="https://securea.mlb.com/assets/images/7/1/2/267951712/cuts/320x180/cut.jpg"
                    visitTeam="Cubs"
                    visitPct="57.43%"
                  />
                  <CardGame
                    time="17:45"
                    linkLocalTeam="https://www.mlb.com/tigers"
                    localTeamLogo="https://securea.mlb.com/assets/images/1/9/8/267952198/cuts/320x180/cut.jpg"
                    localTeam="Tigers"
                    localPct="39.57%"
                    linkVisitTeam="https://www.mlb.com/twins"
                    visitTeamLogo="https://securea.mlb.com/assets/images/4/1/2/267952412/cuts/320x180/cut.jpg"
                    visitTeam="Twins"
                    visitPct="47.79%"
                  />
                  <CardGame
                    time="18:00"
                    linkLocalTeam="https://www.mlb.com/indians"
                    localTeamLogo="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                    localTeam="Indians"
                    localPct="60.39%"
                    linkVisitTeam="https://www.mlb.com/royals"
                    visitTeamLogo="https://securea.mlb.com/assets/images/3/0/8/267952308/cuts/320x180/cut.jpg"
                    visitTeam="Royals"
                    visitPct="38.16%"
                  />
                  <CardGame
                    time="19:45"
                    linkLocalTeam="https://www.mlb.com/rangers"
                    localTeamLogo="https://securea.mlb.com/assets/images/4/3/2/267952432/cuts/320x180/cut.jpg"
                    localTeam="Rangers"
                    localPct="43.69%"
                    linkVisitTeam="https://www.mlb.com/mariners"
                    visitTeamLogo="https://securea.mlb.com/assets/images/4/9/6/267952496/cuts/320x180/cut.jpg"
                    visitTeam="Mariners"
                    visitPct="47.78%"
                  />
                  <CardGame
                    time="PPD"
                    linkLocalTeam="https://www.mlb.com/astros"
                    localTeamLogo="https://securea.mlb.com/assets/images/3/0/6/267952306/cuts/320x180/cut.jpg"
                    localTeam="Astros"
                    localPct="67.37%"
                    linkVisitTeam="https://www.mlb.com/orioles"
                    visitTeamLogo="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                    visitTeam="Orioles"
                    visitPct="34.24%"
                  />
                </Card>
                <br />
                <Card>
                  <Card.Header as="h4" className="text-center">
                    Previous games results
                  </Card.Header>
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/orioles"
                    localLogoResults="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                    localTeamResults="Orioles"
                    localInner1="0"
                    localInner2="3"
                    localInner3="0"
                    localInner4="0"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="3"
                    localHits="8"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/redsox"
                    visitLogoResults="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    visitTeamResults="Red Sox"
                    visitInner1="5"
                    visitInner2="0"
                    visitInner3="3"
                    visitInner4="2"
                    visitInner5="2"
                    visitInner6="3"
                    visitInner7="3"
                    visitInner8="4"
                    visitInner9="X"
                    visitRuns="19"
                    visitHits="22"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/marlins"
                    localLogoResults="https://securea.mlb.com/assets/images/6/7/2/300788672/cuts/320x180/cut.jpg"
                    localTeamResults="Marlins"
                    localInner1="0"
                    localInner2="0"
                    localInner3="0"
                    localInner4="0"
                    localInner5="0"
                    localInner6="0"
                    localInner7="3"
                    localInner8="X"
                    localInner9="X"
                    localRuns="3"
                    localHits="5"
                    localErrors="1"
                    linkVisitTeamResults="https://www.mlb.com/nationals"
                    visitLogoResults="https://securea.mlb.com/assets/images/8/7/6/267951876/cuts/320x180/cut.jpg"
                    visitTeamResults="Nationals"
                    visitInner1="0"
                    visitInner2="5"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="4"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="X"
                    visitInner9="X"
                    visitRuns="9"
                    visitHits="12"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/astros"
                    localLogoResults="https://securea.mlb.com/assets/images/3/0/6/267952306/cuts/320x180/cut.jpg"
                    localTeamResults="Astros"
                    localInner1="0"
                    localInner2="0"
                    localInner3="0"
                    localInner4="1"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="1"
                    localHits="5"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/bluejays"
                    visitLogoResults="https://securea.mlb.com/assets/images/5/3/2/267952532/cuts/320x180/cut.jpg"
                    visitTeamResults="Blue Jays"
                    visitInner1="2"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="1"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="X"
                    visitRuns="3"
                    visitHits="3"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/royals"
                    localLogoResults="https://securea.mlb.com/assets/images/3/0/8/267952308/cuts/320x180/cut.jpg"
                    localTeamResults="Royals"
                    localInner1="1"
                    localInner2="0"
                    localInner3="1"
                    localInner4="1"
                    localInner5="1"
                    localInner6="1"
                    localInner7="1"
                    localInner8="0"
                    localInner9="0"
                    localRuns="6"
                    localHits="9"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/reds"
                    visitLogoResults="https://securea.mlb.com/assets/images/7/2/2/267951722/cuts/320x180/cut.jpg"
                    visitTeamResults="Reds"
                    visitInner1="1"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="0"
                    visitRuns="1"
                    visitHits="5"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/braves"
                    localLogoResults="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
                    localTeamResults="Braves"
                    localInner1="0"
                    localInner2="0"
                    localInner3="0"
                    localInner4="0"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="0"
                    localHits="2"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/mets"
                    visitLogoResults="https://securea.mlb.com/assets/images/5/5/6/267951556/cuts/320x180/cut.jpg"
                    visitTeamResults="Mets"
                    visitInner1="0"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="0"
                    visitInner6="1"
                    visitInner7="0"
                    visitInner8="2"
                    visitInner9="X"
                    visitRuns="3"
                    visitHits="6"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/orioles"
                    localLogoResults="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                    localTeamResults="Orioles"
                    localInner1="2"
                    localInner2="0"
                    localInner3="0"
                    localInner4="0"
                    localInner5="1"
                    localInner6="0"
                    localInner7="3"
                    localInner8="0"
                    localInner9="4"
                    localRuns="10"
                    localHits="10"
                    localErrors="1"
                    linkVisitTeamResults="https://www.mlb.com/redsox"
                    visitLogoResults="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                    visitTeamResults="Red Sox"
                    visitInner1="1"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="1"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="0"
                    visitRuns="3"
                    visitHits="6"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/brewers"
                    localLogoResults="https://securea.mlb.com/assets/images/8/4/0/267951840/cuts/320x180/cut.jpg"
                    localTeamResults="Brewers"
                    localInner1="0"
                    localInner2="0"
                    localInner3="1"
                    localInner4="0"
                    localInner5="1"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="2"
                    localHits="5"
                    localErrors="2"
                    linkVisitTeamResults="https://www.mlb.com/cardinals"
                    visitLogoResults="https://securea.mlb.com/assets/images/8/7/2/267951872/cuts/320x180/cut.jpg"
                    visitTeamResults="Cardinals"
                    visitInner1="0"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="1"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="0"
                    visitRuns="1"
                    visitHits="2"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/yankees"
                    localLogoResults="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                    localTeamResults="Yankees"
                    localInner1="3"
                    localInner2="0"
                    localInner3="0"
                    localInner4="0"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="4"
                    localRuns="7"
                    localHits="10"
                    localErrors="2"
                    linkVisitTeamResults="https://www.mlb.com/rays"
                    visitLogoResults="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
                    visitTeamResults="Rays"
                    visitInner1="3"
                    visitInner2="0"
                    visitInner3="1"
                    visitInner4="0"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="4"
                    visitInner9="X"
                    visitRuns="8"
                    visitHits="10"
                    visitErrors="0"
                  />
                  <CardResults
                    inner10="10"
                    linkLocalTeamResults="https://www.mlb.com/pirates"
                    localLogoResults="https://securea.mlb.com/assets/images/9/6/2/267951962/cuts/320x180/cut.jpg"
                    localTeamResults="Pirates"
                    localInner1="1"
                    localInner2="0"
                    localInner3="0"
                    localInner4="0"
                    localInner5="1"
                    localInner6="0"
                    localInner7="0"
                    localInner8="2"
                    localInner9="2"
                    localInner10="0"
                    localRuns="6"
                    localHits="10"
                    localErrors="2"
                    linkVisitTeamResults="https://www.mlb.com/cubs"
                    visitLogoResults="https://securea.mlb.com/assets/images/7/1/2/267951712/cuts/320x180/cut.jpg"
                    visitTeamResults="Cubs"
                    visitInner1="2"
                    visitInner2="0"
                    visitInner3="2"
                    visitInner4="2"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="0"
                    visitInner10="1"
                    visitRuns="7"
                    visitHits="12"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/indians"
                    localLogoResults="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                    localTeamResults="Indias"
                    localInner1="1"
                    localInner2="0"
                    localInner3="1"
                    localInner4="3"
                    localInner5="2"
                    localInner6="3"
                    localInner7="0"
                    localInner8="0"
                    localInner9="4"
                    localRuns="10"
                    localHits="16"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/whitesox"
                    visitLogoResults="https://securea.mlb.com/assets/images/2/9/0/267952290/cuts/320x180/cut.jpg"
                    visitTeamResults="White Sox"
                    visitInner1="0"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="2"
                    visitRuns="2"
                    visitHits="6"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/tigers"
                    localLogoResults="https://securea.mlb.com/assets/images/1/9/8/267952198/cuts/320x180/cut.jpg"
                    localTeamResults="Tigers"
                    localInner1="1"
                    localInner2="0"
                    localInner3="2"
                    localInner4="1"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="4"
                    localHits="8"
                    localErrors="2"
                    linkVisitTeamResults="https://www.mlb.com/twins"
                    visitLogoResults="https://securea.mlb.com/assets/images/4/1/2/267952412/cuts/320x180/cut.jpg"
                    visitTeamResults="Twins"
                    visitInner1="3"
                    visitInner2="1"
                    visitInner3="0"
                    visitInner4="2"
                    visitInner5="5"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="X"
                    visitRuns="11"
                    visitHits="14"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/phillies"
                    localLogoResults="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
                    localTeamResults="Phillies"
                    localInner1="0"
                    localInner2="0"
                    localInner3="0"
                    localInner4="0"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="0"
                    localHits="4"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/rockies"
                    visitLogoResults="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                    visitTeamResults="Rockies"
                    visitInner1="0"
                    visitInner2="1"
                    visitInner3="0"
                    visitInner4="1"
                    visitInner5="7"
                    visitInner6="0"
                    visitInner7="1"
                    visitInner8="4"
                    visitInner9="X"
                    visitRuns="14"
                    visitHits="16"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/dodgers"
                    localLogoResults="https://securea.mlb.com/assets/images/7/2/8/267951728/cuts/320x180/cut.jpg"
                    localTeamResults="Dodgers"
                    localInner1="1"
                    localInner2="1"
                    localInner3="0"
                    localInner4="0"
                    localInner5="0"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="2"
                    localHits="9"
                    localErrors="1"
                    linkVisitTeamResults="https://www.mlb.com/dbacks"
                    visitLogoResults="https://securea.mlb.com/assets/images/7/1/8/267947718/cuts/320x180/cut.jpg"
                    visitTeamResults="D-backs"
                    visitInner1="0"
                    visitInner2="3"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="3"
                    visitInner6="0"
                    visitInner7="1"
                    visitInner8="0"
                    visitInner9="X"
                    visitRuns="7"
                    visitHits="10"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/rangers"
                    localLogoResults="https://securea.mlb.com/assets/images/4/3/2/267952432/cuts/320x180/cut.jpg"
                    localTeamResults="Rangers"
                    localInner1="0"
                    localInner2="1"
                    localInner3="0"
                    localInner4="0"
                    localInner5="1"
                    localInner6="0"
                    localInner7="0"
                    localInner8="0"
                    localInner9="0"
                    localRuns="2"
                    localHits="7"
                    localErrors="1"
                    linkVisitTeamResults="https://www.mlb.com/angels"
                    visitLogoResults="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
                    visitTeamResults="Angels"
                    visitInner1="0"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="1"
                    visitInner5="1"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="1"
                    visitInner9="X"
                    visitRuns="3"
                    visitHits="5"
                    visitErrors="0"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/athletics"
                    localLogoResults="https://securea.mlb.com/assets/images/5/2/0/267952520/cuts/320x180/cut.jpg"
                    localTeamResults="Athletics"
                    localInner1="1"
                    localInner2="1"
                    localInner3="0"
                    localInner4="0"
                    localInner5="6"
                    localInner6="0"
                    localInner7="1"
                    localInner8="0"
                    localInner9="0"
                    localRuns="9"
                    localHits="9"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/mariners"
                    visitLogoResults="https://securea.mlb.com/assets/images/4/9/6/267952496/cuts/320x180/cut.jpg"
                    visitTeamResults="Mariners"
                    visitInner1="0"
                    visitInner2="2"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="1"
                    visitInner6="0"
                    visitInner7="0"
                    visitInner8="0"
                    visitInner9="0"
                    visitRuns="3"
                    visitHits="6"
                    visitErrors="1"
                  />
                  <CardResults
                    linkLocalTeamResults="https://www.mlb.com/padres"
                    localLogoResults="https://securea.mlb.com/assets/images/9/6/6/267951966/cuts/320x180/cut.jpg"
                    localTeamResults="Padres"
                    localInner1="0"
                    localInner2="0"
                    localInner3="1"
                    localInner4="0"
                    localInner5="1"
                    localInner6="0"
                    localInner7="1"
                    localInner8="0"
                    localInner9="0"
                    localRuns="3"
                    localHits="8"
                    localErrors="0"
                    linkVisitTeamResults="https://www.mlb.com/giants"
                    visitLogoResults="https://securea.mlb.com/assets/images/9/7/0/267951970/cuts/320x180/cut.jpg"
                    visitTeamResults="Giants"
                    visitInner1="0"
                    visitInner2="0"
                    visitInner3="0"
                    visitInner4="0"
                    visitInner5="0"
                    visitInner6="0"
                    visitInner7="2"
                    visitInner8="0"
                    visitInner9="0"
                    visitRuns="2"
                    visitHits="5"
                    visitErrors="1"
                  />
                </Card>
              </div>
            </Col>
            <Col s={6} md={4}>
              <Card>
                <Card.Header as="h5" className="text-center">
                  Top 5 teams
                </Card.Header>
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
              <Card className="text-center">
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
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
