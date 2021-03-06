import React from "react";
import logo from "../images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Headroom from "react-headroom";

function NavBar() {
  return (
    <Headroom>
      <Container className=" container   ">
        <Navbar expand="lg">
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <FontAwesomeIcon icon={faBars} style={{ color: "#9edce3" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="navList ms-auto my-2 my-lg-0"
              style={{ maxHeight: "30vh" }}
              navbarScroll
            >
              <Nav.Link className="nav-Link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-Link" href="#aboutMe">
                About Me
              </Nav.Link>
              <Nav.Link className="nav-Link" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="nav-Link" href="#experience">
                Experience
              </Nav.Link>
              <Nav.Link className="nav-Link" href="#contact">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Headroom>
  );
}

export default NavBar;
