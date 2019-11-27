import React from "react";
import alIcon from "./AL.png";
import nlIcon from "./NL.png";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Row,
  Col,
  Container,
  Card,
  Badge,
  Alert,
  CardGroup
} from "react-bootstrap";

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
    <React.Fragment>
      <Alert variant="dark">
        <h1 align="center">
          <Badge variant="dark">Teams</Badge>
        </h1>
      </Alert>

      <Container>
        <Row>
          <Col sm={12}>
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
                      alt="logo"
                      height="60"
                      className="d-inline-block align-center"
                    />
                    <h4>
                      <Badge variant="primary">American League East</Badge>
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
                    <CardGroup>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Baltimore Orioles</h5>
                          <br />
                          Oriole Park
                          <br />
                          333 West Camden Street
                          <br />
                          Baltimore, MD 21201
                          <br />
                          Phone: (410) 685-9800
                          <br />
                          <br />
                          <a href="https://www.mlb.com/orioles" target="popup">
                            orioles.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Boston Red Sox</h5>
                          <br />
                          Fenway Park
                          <br />
                          4 Jersey Street
                          <br />
                          Boston, MA 02215
                          <br />
                          Phone: (617) 267-9440
                          <br />
                          <br />
                          <a href="https://www.mlb.com/redsox" target="popup">
                            redsox.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/redsox"
                            target="popup"
                          >
                            <br />
                            losredsox.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>New York Yankees</h5>
                          <br />
                          Yankee Stadium
                          <br />
                          One East 161st Street
                          <br />
                          Bronx, NY 10451
                          <br />
                          Phone: (718) 293-4300
                          <br />
                          <br />
                          <a href="https://www.mlb.com/yankees" target="popup">
                            yankees.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/yankees"
                            target="popup"
                          >
                            <br />
                            yankeesbeisbol.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Tampa Bay Rays</h5>
                          <br />
                          Tropicana Field
                          <br />
                          One Tropicana Drive
                          <br />
                          St. Petersburg, FL 33705
                          <br />
                          Phone: (727) 825-3137
                          <br />
                          <br />
                          <a href="https://www.mlb.com/rays" target="popup">
                            raysbaseball.com
                          </a>
                          <a href="https://www.mlb.com/es/rays" target="popup">
                            <br />
                            raysbeisbol.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/5/3/2/267952532/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Toronto Blue Jays</h5>
                          <br />
                          Rogers Centre
                          <br />
                          1 Blue Jays Way, Suite 3200 Toronto, Ontario, Canada
                          M5V1J1
                          <br />
                          Phone: (416) 341-1000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/bluejays" target="popup">
                            bluejays.com
                          </a>
                        </Card.Body>
                      </Card>
                    </CardGroup>
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
                      <Badge variant="primary">American League Central</Badge>
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
                    <CardGroup>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/2/9/0/267952290/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Chicago White Sox</h5>
                          <br />
                          <br />
                          Guaranteed Rate Field
                          <br />
                          333 West 35th Street
                          <br />
                          Chicago, IL 60616
                          <br />
                          Phone: (312) 674-1000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/whitesox" target="popup">
                            whitesox.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/whitesox"
                            target="popup"
                          >
                            <br />
                            loswhitesox.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Cleveland Indians</h5>
                          <br />
                          <br />
                          Progressive Field
                          <br />
                          2401 Ontario Street
                          <br />
                          Cleveland, OH 44115
                          <br />
                          Phone: (216) 420-4200
                          <br />
                          <br />
                          <a href="https://www.mlb.com/indians" target="popup">
                            indians.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/1/9/8/267952198/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Detroit Tigers</h5>
                          <br />
                          <br />
                          Comerica Park
                          <br />
                          2100 Woodward Avenue
                          <br />
                          Detroit, MI 48201
                          <br />
                          Phone: (313) 471-2000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/tigers" target="popup">
                            tigers.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/3/0/8/267952308/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Kansas City Royals</h5>
                          <br />
                          Kauffman Stadium
                          <br />
                          One Royal Way
                          <br />
                          Kansas City, MO 64129
                          <br />
                          Phone: (816) 921-8000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/royals" target="popup">
                            royals.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/royals"
                            target="popup"
                          >
                            <br />
                            losreals.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/4/1/2/267952412/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Minnesota Twins</h5>
                          <br />
                          <br />
                          Target Field
                          <br />
                          1 Twins Way
                          <br />
                          Minneapolis, MN 55403
                          <br />
                          Phone: (612) 659-3400
                          <br />
                          <br />
                          <a href="https://www.mlb.com/twins" target="popup">
                            twinsbaseball.com
                          </a>
                        </Card.Body>
                      </Card>
                    </CardGroup>
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
                      <Badge variant="primary">American League West</Badge>
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
                    <CardGroup>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/3/0/6/267952306/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Houston Astros</h5>
                          <br />
                          <br />
                          Minute Maid Park
                          <br />
                          501 Crawford Street
                          <br />
                          Houston, TX 77002
                          <br />
                          Phone: (713) 259-8000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/astros" target="popup">
                            astros.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/astros"
                            target="popup"
                          >
                            <br />
                            astrosdehouston.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Los Angeles Angels</h5>
                          <br />
                          Angel Stadium
                          <br />
                          2000 Gene Autry Way
                          <br />
                          Anaheim, CA 92806
                          <br />
                          Phone: (714) 940-2000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/angels" target="popup">
                            angels.com
                          </a>
                          <br />
                          <a
                            href="https://www.mlb.com/es/angels"
                            target="popup"
                          >
                            angelsbeisbol.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/5/2/0/267952520/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Oakland Athletics</h5>
                          <br />
                          <br />
                          Oakland Coliseum
                          <br />
                          7000 Coliseum Way
                          <br />
                          Oakland, CA 94621
                          <br />
                          Phone: (510) 638-4900
                          <br />
                          <br />
                          <a
                            href="https://www.mlb.com/athletics"
                            target="popup"
                          >
                            athletics.com
                          </a>
                          <br />
                          <a
                            href="https://www.mlb.com/es/athletics"
                            target="popup"
                          >
                            losatleticos.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/4/9/6/267952496/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Seattle Mariners</h5>
                          <br />
                          <br />
                          T-Mobile Park
                          <br />
                          P.O. Box 4100
                          <br />
                          Seattle, WA 98104
                          <br />
                          Phone: (206) 346-4000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/mariners" target="popup">
                            mariners.com
                          </a>
                          <br />
                          <a
                            href="https://www.mlb.com/es/mariners"
                            target="popup"
                          >
                            losmarineros.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/4/3/2/267952432/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Texas Rangers</h5>
                          <br />
                          <br />
                          Globe Life Park in Arlington
                          <br />
                          1000 Ballpark Way
                          <br />
                          Arlington, TX 76011
                          <br />
                          Phone: (817) 273-5222
                          <br />
                          <br />
                          <a href="https://www.mlb.com/rangers" target="popup">
                            texasrangers.com
                          </a>
                        </Card.Body>
                      </Card>
                    </CardGroup>
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
                      <Badge variant="danger">National League East</Badge>
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
                    <CardGroup>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Atlanta Braves</h5>
                          <br />
                          <br />
                          SunTrust Park
                          <br />
                          755 Battery Avenue
                          <br />
                          Atlanta, GA 30339
                          <br />
                          Phone: (404) 614-2300
                          <br />
                          <br />
                          <a href="https://www.mlb.com/braves" target="popup">
                            braves.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/braves"
                            target="popup"
                          >
                            <br />
                            losbravosbeisbol.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/6/7/2/300788672/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Miami Marlins</h5>
                          <br />
                          <br />
                          Marlins Park
                          <br />
                          501 Marlins Way
                          <br />
                          Miami, FL 33125
                          <br />
                          Phone: (305) 480-1300
                          <br />
                          <br />
                          <a href="https://www.mlb.com/marlins" target="popup">
                            marlins.com
                          </a>
                          <br />
                          <a
                            href="https://www.mlb.com/es/marlins"
                            target="popup"
                          >
                            marlinsbeisbol.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/5/5/6/267951556/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>New York Mets</h5>
                          <br />
                          <br />
                          Citi Field
                          <br />
                          120-01 Roosevelt Avenue
                          <br />
                          Corona, NY 11368
                          <br />
                          Phone: (718) 507-6387
                          <br />
                          <br />
                          <a href="https://www.mlb.com/mets" target="popup">
                            mets.com
                          </a>
                          <br />
                          <a href="https://www.mlb.com/es/mets" target="popup">
                            losmets.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Philadelphia Phillies</h5>
                          <br />
                          Citizens Bank Park
                          <br />
                          One Citizens Bank Way
                          <br />
                          Philadelphia, PA 19148
                          <br />
                          Phone: (215) 463-6000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/phillies" target="popup">
                            phillies.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/8/7/6/267951876/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Washington Nationals</h5>
                          <br />
                          Nationals Park
                          <br />
                          1500 South Capitol Street, SE
                          <br />
                          Washington, DC 20003-1507
                          <br />
                          Phone: (202) 675-6287
                          <br />
                          <br />
                          <a
                            href="https://www.mlb.com/nationals"
                            target="popup"
                          >
                            nationals.com
                          </a>
                          <br />
                          <a
                            href="https://www.mlb.com/es/nationals"
                            target="popup"
                          >
                            losnacionales.com
                          </a>
                        </Card.Body>
                      </Card>
                    </CardGroup>
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
                      <Badge variant="danger">National League Central</Badge>
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
                      src="https://securea.mlb.com/assets/images/4/6/8/311913468/cuts/320x180/cut.jpg"
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
                    <CardGroup>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/7/1/2/267951712/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Chicago Cubs</h5>
                          <br />
                          <br />
                          Wrigley Field
                          <br />
                          1060 West Addison
                          <br />
                          Chicago, IL 60613-4397
                          <br />
                          Phone: (773) 404-2827
                          <br />
                          <br />
                          <a href="https://www.mlb.com/cubs" target="popup">
                            cubs.com
                          </a>
                          <a href="https://www.mlb.com/es/cubs" target="popup">
                            <br />
                            loscubs.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/7/2/2/267951722/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Cincinnati Reds</h5>
                          <br />
                          <br />
                          Great American Ball
                          <br />
                          Park. 100 Main Street
                          <br />
                          Cincinnati, OH 45202-4109
                          <br />
                          Phone: (513) 765-7000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/reds" target="popup">
                            reds.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/4/6/8/311913468/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Milwaukee Brewers</h5>
                          <br />
                          Miller Park
                          <br />
                          One Brewers Way
                          <br />
                          Milwaukee, WI 53214
                          <br />
                          Phone: (414) 902-4400
                          <br />
                          <br />
                          <a href="https://www.mlb.com/brewers" target="popup">
                            brewers.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/9/6/2/267951962/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Pittsburg Pirates</h5>
                          <br />
                          <br />
                          PNC Park
                          <br />
                          115 Federal Street
                          <br />
                          Pittsburgh, PA 15212
                          <br />
                          Phone: (412) 323-5000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/pirates" target="popup">
                            pirates.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/8/7/2/267951872/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>St. Louis Cardinals</h5>
                          <br />
                          <br />
                          Busch Stadium
                          <br />
                          700 Clark Street
                          <br />
                          St. Louis, MO 63102
                          <br />
                          Phone: (314) 345-9600
                          <br />
                          <br />
                          <a
                            href="https://www.mlb.com/cardinals"
                            target="popup"
                          >
                            cardinals.com
                          </a>
                        </Card.Body>
                      </Card>
                    </CardGroup>
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
                      <Badge variant="danger">National League West</Badge>
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
                    <CardGroup>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/7/1/8/267947718/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Arizona Diamondbacks</h5>
                          <br />
                          Chase Field
                          <br />
                          401 East Jefferson Street. Phoenix, AZ 85004
                          <br />
                          Phone: (602) 462-6500
                          <br />
                          <br />
                          <a href="https://www.mlb.com/dbacks" target="popup">
                            dbacks.com
                          </a>
                          <br />
                          <a
                            href="https://www.mlb.com/es/dbacks"
                            target="popup"
                          >
                            losdbacks.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Colorado Rockies</h5>
                          <br />
                          <br />
                          Coors Field
                          <br />
                          2001 Blake Street
                          <br />
                          Denver, CO 80205-2000
                          <br />
                          Phone: (303) 292-0200
                          <br />
                          <br />
                          <a href="https://www.mlb.com/rockies" target="popup">
                            rockies.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/7/2/8/267951728/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>Los Angeles Dodgers</h5>
                          <br />
                          Dodger Stadium
                          <br />
                          1000 Vin Scully Avenue
                          <br />
                          Los Angeles, CA 90012
                          <br />
                          Phone: 866-DODGERS
                          <br />
                          <br />
                          <a href="https://www.mlb.com/dodgers" target="popup">
                            dodgers.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/dodgers"
                            target="popup"
                          >
                            <br />
                            losdodgers.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/9/6/6/267951966/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>San Diego Padres</h5>
                          <br />
                          <br />
                          Petco Park
                          <br />
                          100 Park Boulevard
                          <br />
                          San Diego, CA 92101
                          <br />
                          Phone: (619) 795-5000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/padres" target="popup">
                            padres.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/padres"
                            target="popup"
                          >
                            <br />
                            padresbeisbol.com
                          </a>
                        </Card.Body>
                      </Card>
                      <Card className="text-center">
                        <Card.Body>
                          <img
                            src="https://securea.mlb.com/assets/images/9/7/0/267951970/cuts/320x180/cut.jpg"
                            height="90"
                            alt="logo"
                          />
                          <br />
                          <br />
                          <h5>San Francisco Giants</h5>
                          <br />
                          Oracle Park
                          <br />
                          24 Willie Mays Plaza
                          <br />
                          San Francisco, CA 94107
                          <br />
                          Phone: (415) 972-2000
                          <br />
                          <br />
                          <a href="https://www.mlb.com/giants" target="popup">
                            SFGiants.com
                          </a>
                          <a
                            href="https://www.mlb.com/es/giants"
                            target="popup"
                          >
                            <br />
                            sfgigantes.com
                          </a>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
