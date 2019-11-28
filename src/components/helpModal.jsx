import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import helpIcon from "./help.png";
import helpBlack from "./helpBlack.jpg";
import homeIcon from "./home.png";
import playerIcon from "./playerIcon.png";
import scoreIcon from "./scoreIcon.png";
import teamIcon from "./teamIcon.png";
import faqIcon from "./FAQ.jpg";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "100%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

function MyVerticallyCenteredModal(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            src={helpBlack}
            alt="home"
            height="25"
            className="d-inline-block align-center"
            hspace="10"
          />{" "}
          Help
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={classes.root}>
          <ExpansionPanel
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                <img
                  src={faqIcon}
                  alt="faqIcon"
                  height="25"
                  className="d-inline-block align-center"
                  hspace="20"
                />
                FAQs
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Where does the statistics information come from?</li>
                  <ul>
                    <li>
                      All statistical data, both of the teams and the players
                      are retrieved from the official MLB website.
                    </li>
                  </ul>
                  <li>How was the victory percentage of each team obtained?</li>
                  <ul>
                    <li>
                      The winning percentage of each team is calculated using
                      the Bill James' formula, which is based on the won and
                      lost games of each team.
                    </li>
                  </ul>
                  <li>Can you bet on the website?</li>
                  <ul>
                    <li>
                      The website is only for consulting victory percentages,
                      statistical data and information of each team in the MLB;
                      as well as, statistics and information of several players.
                    </li>
                  </ul>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <img
                  src={homeIcon}
                  alt="home"
                  height="25"
                  className="d-inline-block align-center"
                  hspace="20"
                />
                Home
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Games of the day</li>
                  <ul>
                    <li>
                      Shows the two teams that will be playing with the
                      corresponding odds of winning and the hour of the game.
                    </li>
                  </ul>
                  <li>Top news</li>
                  <ul>
                    <li>
                      Shows the three most important news of the week about the
                      best players.
                    </li>
                  </ul>
                  <li>Top teams</li>
                  <ul>
                    <li>
                      Shows the best five teams of the season of the moment.{" "}
                    </li>
                  </ul>
                  <li>Top players</li>
                  <ul>
                    <li>
                      Shows the best five players in fielding, pitching and
                      batting of the season of the moment.
                    </li>
                  </ul>
                  <li>Previous games results</li>
                  <ul>
                    <li>
                      Shows the results of the teams that play in previous days
                      with the score that obtain in the game.
                    </li>
                  </ul>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                <img
                  src={playerIcon}
                  alt="playerIcon"
                  height="25"
                  className="d-inline-block align-center"
                  hspace="20"
                />
                Players
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Player profile</li>
                  <ul>
                    <li>
                      Shows the name of the player, their picture, the nickname,
                      date of born, draft, school grade, the date of debut and
                      the relationship(s).
                    </li>
                  </ul>
                  <li>Performance table</li>
                  <ul>
                    <li>
                      Shows the stats of the player in the season, and the MLB
                      career stats with his corresponding information.
                    </li>
                  </ul>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                <img
                  src={scoreIcon}
                  alt="scoreIcon"
                  height="25"
                  className="d-inline-block align-center"
                  hspace="20"
                />
                Scores
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>Full Scoreboard</li>
                  <ul>
                    <li>
                      Shows the whole scores of the games played at that day. In
                      this section you can consult the runs of each inning, and
                      also the total hits, errors and runs of each team in the
                      game.
                    </li>
                  </ul>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                <img
                  src={teamIcon}
                  alt="teamsIcon"
                  height="25"
                  className="d-inline-block align-center"
                  hspace="20"
                />
                Teams
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  <li>List of teams</li>
                  <ul>
                    <li>
                      Shows every team of the MLB, grouped by league and
                      division. Each team has his main data and his contact
                      information; as well as, the redirection of his personal
                      page.
                    </li>
                  </ul>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button onClick={() => setModalShow(true)} variant="dark">
        <img src={helpIcon} alt="signin" width="50" />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

class helpModal extends Component {
  render() {
    return <App />;
  }
}

export default helpModal;
