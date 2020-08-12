import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Matthew Wong</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#referrals">Referrals</Nav.Link>
            </Nav> 
        </Navbar>
    )
}
