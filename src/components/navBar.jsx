import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./FirstBase.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { DropdownItem } from "react-bootstrap";
import LoginModal from "./loginModal";
import SigninModal from "./signinModal";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="logo"
          height="80"
          className="d-inline-block align-center"
        />
        {"      First Base Company"}
      </Navbar.Brand>
      <Nav.Link href="#home">
        <Button variant="danger">Home</Button>
      </Nav.Link>
      <Nav.Link href="#results">
        <Button variant="warning" disabled>
          Results
        </Button>
      </Nav.Link>
      <Nav.Link href="#teams">
        <Dropdown as={ButtonGroup}>
          <Button variant="warning" disabled>
            Teams
          </Button>

          <Dropdown.Toggle
            split
            variant="warning"
            id="dropdown-split-basic"
            disabled
          />

          <Dropdown.Menu></Dropdown.Menu>
        </Dropdown>
      </Nav.Link>
      <Nav.Link href="#players">
        <Button variant="warning" disabled>
          Players
        </Button>
      </Nav.Link>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#">
          <SigninModal />
        </Nav.Link>
        <Nav.Link href="#">
          <LoginModal />
        </Nav.Link>
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
