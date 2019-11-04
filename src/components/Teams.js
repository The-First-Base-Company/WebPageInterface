import React from "react";
import alIcon from "./AL.png";
import nlIcon from "./NL.png";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Row, Col, Container, Card, Badge, ListGroup } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function Teams() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <br />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header as="h3">Teams</Card.Header>
            <Card.Body>
              <div className={classes.root}>
                <ExpansionPanel
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      <img
                        src={alIcon}
                        alt="home"
                        height="60"
                        className="d-inline-block align-center"
                      />
                      <h4>
                        <Badge variant="primary">East</Badge>
                      </h4>
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      <img
                        src="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      BAL
                      <img
                        src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      BOS
                      <img
                        src="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      NYY
                      <img
                        src="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      TB
                      <img
                        src="https://securea.mlb.com/assets/images/5/3/2/267952532/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      TOR
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ListGroup action href="#">
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Baltimore Orioles
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Boston Red Sox
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          New York Yankees
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Tampa Bay Rays
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/5/3/2/267952532/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Toronto Blue Jays
                        </ListGroup.Item>
                      </ListGroup>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      <img
                        src={alIcon}
                        alt="home"
                        height="60"
                        className="d-inline-block align-center"
                      />
                      <h4>
                        <Badge variant="primary">Central</Badge>
                      </h4>
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      <img
                        src="https://securea.mlb.com/assets/images/2/9/0/267952290/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      CWS
                      <img
                        src="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      CLE
                      <img
                        src="https://securea.mlb.com/assets/images/1/9/8/267952198/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      DET
                      <img
                        src="https://securea.mlb.com/assets/images/3/0/8/267952308/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      KAN
                      <img
                        src="https://securea.mlb.com/assets/images/4/1/2/267952412/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      MIN
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ListGroup action href="#">
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/2/9/0/267952290/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Chicago White Sox
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Clevenland Indians
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/1/9/8/267952198/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Ditroit Tigers
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/3/0/8/267952308/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Kansas City Royals
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/4/1/2/267952412/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Minnesota Twins
                        </ListGroup.Item>
                      </ListGroup>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography className={classes.heading}>
                      <img
                        src={alIcon}
                        alt="home"
                        height="60"
                        className="d-inline-block align-center"
                      />
                      <h4>
                        <Badge variant="primary">West</Badge>
                      </h4>
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      <img
                        src="https://securea.mlb.com/assets/images/3/0/6/267952306/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      HOU
                      <img
                        src="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      LAA
                      <img
                        src="https://securea.mlb.com/assets/images/5/2/0/267952520/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      OAK
                      <img
                        src="https://securea.mlb.com/assets/images/4/9/6/267952496/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      SEA
                      <img
                        src="https://securea.mlb.com/assets/images/4/3/2/267952432/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      TEX
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ListGroup action href="#">
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/3/0/6/267952306/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Houston Astros
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Los Angeles Angels of Anaheim
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/5/2/0/267952520/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Oakland Athletics
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/4/9/6/267952496/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Seattle Mariners
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/4/3/2/267952432/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Texas Rangers
                        </ListGroup.Item>
                      </ListGroup>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography className={classes.heading}>
                      <img
                        src={nlIcon}
                        alt="home"
                        height="60"
                        className="d-inline-block align-center"
                      />
                      <h4>
                        <Badge variant="danger">East</Badge>
                      </h4>
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      <img
                        src="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      ATL
                      <img
                        src="https://securea.mlb.com/assets/images/6/7/2/300788672/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      FLA
                      <img
                        src="https://securea.mlb.com/assets/images/5/5/6/267951556/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      NYM
                      <img
                        src="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      PHI
                      <img
                        src="https://securea.mlb.com/assets/images/8/7/6/267951876/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      WAS
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ListGroup action href="#">
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Atlanta Braves
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/6/7/2/300788672/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Florida Marlins
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/5/5/6/267951556/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          New York Mets
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Philadelphia Phillies
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/8/7/6/267951876/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Washington Nationals
                        </ListGroup.Item>
                      </ListGroup>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      <img
                        src={nlIcon}
                        alt="home"
                        height="60"
                        className="d-inline-block align-center"
                      />
                      <h4>
                        <Badge variant="danger">Central</Badge>
                      </h4>
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      <img
                        src="https://securea.mlb.com/assets/images/7/1/2/267951712/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      CHC
                      <img
                        src="https://securea.mlb.com/assets/images/7/2/2/267951722/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      CIN
                      <img
                        src="https://securea.mlb.com/assets/images/8/4/0/267951840/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      MIL
                      <img
                        src="https://securea.mlb.com/assets/images/9/6/2/267951962/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      PIT
                      <img
                        src="https://securea.mlb.com/assets/images/8/7/2/267951872/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      STL
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ListGroup action href="#">
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/7/1/2/267951712/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Chicago Cubs
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/7/2/2/267951722/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Cincinnati Reds
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/8/4/0/267951840/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Milwaukee Brewers
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/9/6/2/267951962/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Pittsburgh Pirates
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/8/7/2/267951872/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          St. Louis Cardinals
                        </ListGroup.Item>
                      </ListGroup>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                  >
                    <Typography className={classes.heading}>
                      <img
                        src={nlIcon}
                        alt="home"
                        height="60"
                        className="d-inline-block align-center"
                      />
                      <h4>
                        <Badge variant="danger">West</Badge>
                      </h4>
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      <img
                        src="https://securea.mlb.com/assets/images/7/1/8/267947718/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      ARI
                      <img
                        src="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      COL
                      <img
                        src="https://securea.mlb.com/assets/images/7/2/8/267951728/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      LAD
                      <img
                        src="https://securea.mlb.com/assets/images/9/6/6/267951966/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      SD
                      <img
                        src="https://securea.mlb.com/assets/images/9/7/0/267951970/cuts/320x180/cut.jpg"
                        height="20"
                        alt="logo"
                      />
                      SF
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <ListGroup action href="#">
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/7/1/8/267947718/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Arizona Diamondbacks
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Colorado Rockies
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/7/2/8/267951728/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          Los Angeles Dodgers
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/9/6/6/267951966/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          San Diego Padres
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                          <img
                            src="https://securea.mlb.com/assets/images/9/7/0/267951970/cuts/320x180/cut.jpg"
                            height="20"
                            alt="logo"
                          />
                          San Francisco Giants
                        </ListGroup.Item>
                      </ListGroup>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
}
