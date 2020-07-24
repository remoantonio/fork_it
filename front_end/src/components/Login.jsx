import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Forms from 'components/Forms'


export default function Login() {
    
        return (
        <Container>
            <h1>Login</h1>
        <Forms baseUrl={ baseURL } addRecipes={ this.addRecipes }/>  
        </Container>
        )
   
}
