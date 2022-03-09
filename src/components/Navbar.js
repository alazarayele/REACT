import React from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


import {Container,Nav,NavDropdown} from 'react-bootstrap';

function Navbarr() {


    return (
        <Navbar bg="dark"  variant="dark"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Nav className="me-auto">
              <Nav.Link  className="nav-link text-white"href="/" ><HomeIcon/>Home</Nav.Link>
              <Nav.Link  className="nav-link text-white" href="/news">news</Nav.Link>
              <Nav.Link  className="nav-link text-white" href="/contacts">contact us</Nav.Link>
              <Nav.Link  className="nav-link text-white" href="/details">Details</Nav.Link>
             
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item className="nav-link text-black" href="/home"><HomeIcon/>A Create Department</NavDropdown.Item>
                <NavDropdown.Item className="nav-link text-black"href="/details">B  Manage Department</NavDropdown.Item>
                <NavDropdown.Item className="nav-link text-black" href="/Single">C Display single structure</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
} 

export default Navbarr; 