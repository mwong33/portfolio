import React from 'react'
import { Nav, Navbar} from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="light" variant="light" expand="sm">
            <Navbar.Brand>Matthew Wong</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/referrals">Referrals</Nav.Link>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    )
}
