
import React from 'react';
import { Navbar, Container, Nav, Button, Spinner } from 'react-bootstrap';
import logo from '../../../images/logo.jpg';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';





const Navigation = () => {
const {user,logout,isLoading}=useAuth();
if(isLoading){
  return  <Spinner animation="border" variant="danger" />
}
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img className="png" src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fw-bolder">
            <Nav.Link className="text-white man" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#banner">Banner</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#services">Products</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#reviews">Reviews</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#gallery">Gallery</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/explore">Explore</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#footer">Footer</Nav.Link>




            {
             user?.email ? 
        
            <>
           <Nav.Link className="text-white" as={HashLink} to="/dashboard">
                <Button className="fw-bold">Dashboard</Button> 
               </Nav.Link>
                <Button className="fw-bold mx-4" onClick={logout}>LogOut</Button> 
            </>
                :
            <Nav.Link className="text-white" as={HashLink} to="/login">Login</Nav.Link>
             
              }

            <Navbar.Text className="text-white fw-bolder">Sing In: <a className="text-dark" href="/login">{user?.displayName}</a>
            </Navbar.Text>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;