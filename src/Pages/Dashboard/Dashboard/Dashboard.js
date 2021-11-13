import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Dashboard = () => {
    return (
        <div className="mt-5 pt-5">
           <Navbar bg="danger" expand={false}>
  <Container fluid>
    <Navbar.Brand className="text-white fw-bolder mx-auto" > The Dashboard is not Opening Because There is no Better Drawer in Bootstrap !!!</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#pay">Pay</Nav.Link>
          <Nav.Link href="#myOrders">My Orders</Nav.Link>
          <Nav.Link href="#action2">Review</Nav.Link>
          <Nav.Link href="#action2">My Orders</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar> 
        </div>
    );
};

export default Dashboard;