import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

function Header() {

    const [Collapse , setCollapse] = useState(true)

  return (
    <Navbar expand="lg" className="navbar">
        <Container>
        <Navbar.Brand href="#home" className='navBarTitle'>TATTOO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" onClick={() => setCollapse(!Collapse)}>
            {Collapse ? (<i class="bi bi-list"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg></i>) : (<i class="bi bi-x-lg"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg></i>)}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='Collapse'>
            <div className='mx-auto'></div>
            <Nav className="list">
            <Nav.Link className="link" href="#home">ABOUT</Nav.Link>
            <Nav.Link className="link" href="#">ARTIST</Nav.Link>
            <Nav.Link className="link" href="#">GALLERY</Nav.Link>
            <Nav.Link className="link" href="#">CONTACT</Nav.Link>     
            <Nav.Link className="link login" href="#">LOGIN</Nav.Link>     
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;