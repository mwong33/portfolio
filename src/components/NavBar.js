import React, { Component } from 'react';
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="sm" className="fixed-top"> 
                <Navbar.Brand href="/">Matthew Wong</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
