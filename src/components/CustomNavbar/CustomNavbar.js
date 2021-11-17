import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { openInNewTab } from "../../utils/commonUtils";
const Customnavbar = ({ brandName = "React News App" }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand className="site-brand">{brandName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} exact to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} exact to="/business">
                Business
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={(e)=>openInNewTab("https://github.com/sundargautam/news-portal-using-reacthooks.git")}>Learn to Build this</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Customnavbar;
