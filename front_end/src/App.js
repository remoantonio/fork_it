import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import SearchRecipes from './components/SearchRecipes'
import SavedRecipes from './components/SavedRecipes'



export default class App extends Component {
  state = {
    message: 'Fork it!',
    redirect: false
  }

  handleRedirect = () => {
    this.setState({
      redirect: !this.state.redirect
    })
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      })
    }
  }
  
  render() {
    return (
    
        <Container>
         <NavBar />
         <Switch>
          <Route exact path='/search' component={SearchRecipes} />
          <Route exact path='/saved' component={SavedRecipes} />
          {/* <Route component={Error} /> */}
        </Switch>
          

        <Button onclick="myFunction()">Toggle dark mode</Button>
      
        
        </Container>
    )
  }
}
