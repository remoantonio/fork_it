import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        
        <Navbar>
            <Link to='/'>Home</Link>
            <Link to='/saved'>Saved Recipes</Link>
            <Link to='/search'>Search Recipes</Link>
        </Navbar>
    )
}