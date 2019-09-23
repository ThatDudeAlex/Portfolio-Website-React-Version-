import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { Link } from "react-scroll";
import { Link as RouteLink} from 'react-router-dom';


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
            offset={-50}
            duration={3000}
            className="nav-link"
          >
              <Navbar.Brand href="#"  className="text-white">About</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="mr-auto">

              <Link
                activeClass="active"
                to="expComponent"
                spy={true}
                smooth={true}
                offset={-50}
                duration={3000}
                className="nav-link"
              >
                <Nav.Link href="#" className="main-link">
                  Experience
                </Nav.Link>
              </Link>

              <Link
                activeClass="active"
                to="projectComponent"
                spy={true}
                smooth={true}
                offset={-50}
                duration={3000}
                className="nav-link"
              >
                <Nav.Link href="#" className="main-link">
                  Projects
                </Nav.Link>
              </Link>

              <Link
                activeClass="active"
                to="skillsComponent"
                spy={true}
                smooth={true}
                offset={-50}
                duration={3000}
                className="nav-link"
              >
                <Nav.Link href="#" className="main-link">
                  Skills
                </Nav.Link>
              </Link>

              <Link
                activeClass="active"
                to="contactComponent"
                spy={true}
                smooth={true}
                offset={-1}
                duration={3000}
                className="nav-link"
              >
                <Nav.Link href="#" className="main-link">
                  Contact
                </Nav.Link>
              </Link>
            </Nav>

            <Nav>

              <RouteLink to="/bio">
                <Nav.Link href="">
                  Bio
                </Nav.Link>
              </RouteLink>
              

              <Nav.Link href="">Blog(Soon)</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/152HOTp8CKLcM5k-by6bFTNAudheUIW-Q/view?usp=sharing"
                target="_blank">
                  Resume
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}