import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/navigation.css';

export default class Navigation extends Component {

  render() {

    return (

      <Navbar collapseOnSelect expand="md" className="bg-black text-white" fixed="top">
        <Container>

          <Link
            activeClass="active"
            to="aboutComponent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className="nav-link"
          >
            {/* <Nav.Link href="#"> */}
              <Navbar.Brand href="#"  className="text-white">About</Navbar.Brand>
            {/* </Nav.Link> */}
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

              <Link
                activeClass="active"
                to="expComponent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="link"
              >
                <Nav.Link href="#">
                  Experience
                </Nav.Link>
              </Link>

              <Link
                activeClass="active"
                to="projectComponent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="link"
              >
                <Nav.Link href="#">
                  Projects
                </Nav.Link>
              </Link>

              <Link
                activeClass="active"
                to="skillsComponent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="link"
              >
                <Nav.Link href="#">
                  Skills
                </Nav.Link>
              </Link>

              <Link
                activeClass="active"
                to="contactComponent"
                spy={true}
                smooth={true}
                offset={-30}
                duration={200}
                className="link"
              >
                <Nav.Link href="#">
                  Contact
                </Nav.Link>
              </Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">Bio</Nav.Link>
              <Nav.Link href="#deets">Blog (Soon)</Nav.Link>
              <Nav.Link href="#deets">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}