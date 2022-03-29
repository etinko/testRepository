import React from "react";
import {Nav, Navbar,NavDropdown, Offcanvas, FormControl, Button, Form, Container} from 'react-bootstrap';

function MainNavbar() {
    return(
      
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">CRUD APP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/create">VIP registration</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        </Nav>
        </Container>
    <Nav>
      <Nav.Link href="/Login">Log In</Nav.Link>
      <Nav.Link href="/Register">sign Up </Nav.Link>
    </Nav>
      </Navbar>

    );
}
export default MainNavbar;