import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Forms from './Forms.jsx'


<<<<<<< HEAD
export default function Login() {
    
        return (
        <>
            <h1>Login/Sign Up</h1>
        <Forms />
        </>
        )
   
=======
export default function Login(props) {

    return (
        <Container fluid>
            <h1>Login/Sign Up</h1>
            <Forms setUser={props.setUser} />
        </Container>
    )

>>>>>>> a912f737a9e87d786ab74b31eb5ead90a3cfacce
}
