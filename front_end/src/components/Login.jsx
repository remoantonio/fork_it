import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Forms from './Forms.jsx'


export default function Login(props) {

    return (
        <Container fluid>
            <h1>Sign Up</h1>
            <Forms setUser={props.setUser} />
        </Container>
    )

}
