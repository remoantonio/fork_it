import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Nav className="justify-content-center">
                <Nav.Link to='/'>Home</Nav.Link>
                <Nav.Link href='/saved'>Saved Recipes</Nav.Link>
                <Nav.Link to='/search'>Search Recipes</Nav.Link>
            </Nav>
        </Navbar>
    )
}