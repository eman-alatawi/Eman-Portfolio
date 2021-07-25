import React from 'react'
import logo from '../logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'

function NavBar() {
    return (
        <div className="Header">

            <Container className=" container m-3">
                <Navbar expand="lg">
                    <Navbar.Brand href="#"><img className="logo" src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll">
                        <FontAwesomeIcon icon={faBars} style={{ color: '#9edce3' }} />
                    </Navbar.Toggle>


                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="navList p-3"
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About Me</Nav.Link>
                            <Nav.Link href="#action2">Projects</Nav.Link>
                            <Nav.Link href="#action2">Skills</Nav.Link>
                            <Nav.Link href="#action2">Contact Me</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBar
