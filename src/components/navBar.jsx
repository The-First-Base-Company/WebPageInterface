import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./FirstBase.png";
import homeIcon from "./home.png";
import playerIcon from "./playerIcon.png";
import scoreIcon from "./scoreIcon.png";
import teamIcon from "./teamIcon.png";
import alIcon from "./AL.png";
import nlIcon from "./NL.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import FAQmodal from "./faqModal";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="logo"
          height="80"
          className="d-inline-block align-center"
        />
        First Base Company
      </Navbar.Brand>
      <Nav.Link href="/">
        <Button variant="danger">
          <img
            src={homeIcon}
            alt="home"
            height="25"
            className="d-inline-block align-center"
          />
          <h6>Home</h6>
        </Button>
      </Nav.Link>

      <Dropdown as={ButtonGroup}>
        <Button variant="warning" href="/players">
          <img
            src={playerIcon}
            alt="home"
            height="25"
            className="d-inline-block align-center"
          />
          <h6>Players</h6>
        </Button>
        <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item href="/players_stats" active>
            Statistics
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Nav.Link href="/scores">
        <Button variant="warning">
          <img
            src={scoreIcon}
            alt="home"
            height="25"
            className="d-inline-block align-center"
          />
          <h6>Scores</h6>
        </Button>
      </Nav.Link>

      <ButtonGroup>
        <Dropdown as={ButtonGroup}>
          <Button variant="warning" href="/teams">
            <img
              src={teamIcon}
              alt="home"
              height="25"
              className="d-inline-block align-center"
            />
            <h6>Teams</h6>
          </Button>
          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="/teams_stats" active>
              Statistics
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <DropdownButton
          as={ButtonGroup}
          title={
            <div>
              <img
                src={alIcon}
                alt="home"
                height="25"
                className="d-inline-block align-center"
              />
            </div>
          }
          id="bg-nested-dropdown"
          variant="light"
        >
          <h5 align="center">AL East</h5>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/0/8/2/267952082/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Baltimore Orioles
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Boston Red Sox
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/4/2/0/267952420/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            New York Yankees
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/4/2/8/267952428/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Tampa Bay Rays
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/5/3/2/267952532/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Toronto Blue Jays
          </Dropdown.Item>
          <Dropdown.Divider />
          <h5 align="center">AL Central</h5>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/2/9/0/267952290/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Chicago White Sox
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/2/9/4/267952294/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Clevenland Indians
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/1/9/8/267952198/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Detroit Tigers
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/3/0/8/267952308/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Kansas City Royals
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/4/1/2/267952412/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Minnesota Twins
          </Dropdown.Item>
          <Dropdown.Divider />
          <h5 align="center">AL West</h5>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/3/0/6/267952306/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Houston Astros
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/3/1/2/267952312/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Los Angeles Angels of Anaheim
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/5/2/0/267952520/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Oakland Athletics
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/4/9/6/267952496/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Seattle Mariners
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/4/3/2/267952432/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Texas Rangers
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          as={ButtonGroup}
          title={
            <div>
              <img
                src={nlIcon}
                alt="home"
                height="25"
                className="d-inline-block align-center"
              />
            </div>
          }
          id="bg-nested-dropdown"
          variant="primary"
        >
          <h5 align="center">NL East</h5>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/2/0/8/267951208/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Atlanta Braves
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/6/7/2/300788672/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Florida Marlins
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/5/5/6/267951556/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            New York Mets
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/8/6/0/267951860/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Philadelphia Phillies
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/8/7/6/267951876/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Washington Nationals
          </Dropdown.Item>
          <Dropdown.Divider />
          <h5 align="center">NL Central</h5>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/7/1/2/267951712/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Chicago Cubs
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/7/2/2/267951722/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Cincinnati Reds
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/4/6/8/311913468/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Milwaukee Brewers
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/9/6/2/267951962/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Pittsburgh Pirates
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/8/7/2/267951872/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            St. Louis Cardinals
          </Dropdown.Item>
          <Dropdown.Divider />
          <h5 align="center">NL West</h5>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/7/1/8/267947718/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Arizona Diamondbacks
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/7/2/4/267951724/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Colorado Rockies
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/7/2/8/267951728/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            Los Angeles Dodgers
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/9/6/6/267951966/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            San Diego Padres
          </Dropdown.Item>
          <Dropdown.Item href="/teams">
            <img
              src="https://securea.mlb.com/assets/images/9/7/0/267951970/cuts/320x180/cut.jpg"
              height="20"
              alt="logo"
            />
            San Francisco Giants
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <Navbar.Collapse className="justify-content-end">
        <FAQmodal />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

/*
<Table>
              <thead>
                <tr>
                  <th>AL EAST</th>
                  <th>AL CENTRAL</th>
                  <th>AL WEST</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="mlb.com/redsox" target="popup">
                      <img
                        src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                        alt="logo"
                        height="25"
                        className="d-inline-block align-left"
                      />
                      Boston Red Sox
                    </a>
                  </td>
                  <td>
                    <a href="mlb.com/redsox" target="popup">
                      <img
                        src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                        alt="logo"
                        height="25"
                        className="d-inline-block align-left"
                      />
                      Boston Red Sox
                    </a>
                  </td>
                  <td>
                    <a href="mlb.com/redsox" target="popup">
                      <img
                        src="https://securea.mlb.com/assets/images/2/8/8/267952288/cuts/320x180/cut.jpg"
                        alt="logo"
                        height="25"
                        className="d-inline-block align-left"
                      />
                      Boston Red Sox
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>*/
