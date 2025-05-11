import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
      <Navbar bg="primary"  expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Mi Sitio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default NavBar;