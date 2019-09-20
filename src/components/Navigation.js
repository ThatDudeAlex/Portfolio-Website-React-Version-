import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends Component {

  render() {

    return (

      <Navbar collapseOnSelect expand="md" className="bg-black text-white" fixed="top">
        <Container>

          <Nav.Link href="">
            <Link
              activeClass="active"
              to="aboutComponent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >
              <Navbar.Brand href="" to="aboutComponent" className="text-white">About</Navbar.Brand>
            </Link>
          </Nav.Link>
          

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="">
                <Link
                  activeClass="active"
                  to="expComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Experience
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  activeClass="active"
                  to="projectComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Projects
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  activeClass="active"
                  to="skillsComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Skills
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  activeClass="active"
                  to="contactComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Bio</Nav.Link>
              <Nav.Link href="#deets">Blog (Coming Soon)</Nav.Link>
              <Nav.Link href="#deets">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}