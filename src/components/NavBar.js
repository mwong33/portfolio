import React, { Component } from 'react';
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="sm">
                <Navbar.Brand href="/">Matthew Wong</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/referrals">Referrals</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
