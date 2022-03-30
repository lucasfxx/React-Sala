import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>

<>

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link className='nav-link' to="/carros">Carros</Link>
    <Link className='nav-link' to="/array">Array</Link>
    <Link className='nav-link' to="/objeto">Objeto</Link>

    </Nav>
    </Container>
  </Navbar>
  <br />
  </>


        

    </div>

    
        

    
  )
}

export default Menu