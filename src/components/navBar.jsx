import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./FirstBase.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

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
        <Button variant="warning">Results</Button>
      </Nav.Link>
      <Nav.Link href="#teams">
        <Button variant="warning">Teams</Button>
      </Nav.Link>
      <Nav.Link href="#players">
        <Button variant="warning">Players</Button>
      </Nav.Link>
    </Navbar>
  );
};

export default NavBar;
