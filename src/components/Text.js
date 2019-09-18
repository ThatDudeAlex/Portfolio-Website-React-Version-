import React from "react";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Container } from 'reactstrap';

const Text = () => {

  return (

    <Navbar collapseOnSelect expand="md"  className="bg-black text-white" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="text-white">About</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Experience</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
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

export default Text;