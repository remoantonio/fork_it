import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import SearchRecipes from './components/SearchRecipes'
import SavedRecipes from './components/SavedRecipes'
import Forms from './components/Forms.jsx'
import Recipes from './components/Recipes.jsx'


let baseURL = 'http://localhost:3003'

class App extends React.Component {
  state = {
        username: '',
        password: '',
        password2: '',
  }

  getRecipes = () => {
    fetch(baseURL + '/fork').then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        userName: data.userName,
        password: data.password,
        password2: data.password2,
      });
    });
  }

  addRecipes = (newRecipes) => {
    // const copyRecipes = [...this.state.recipes];
    // copyRecipes.push(newRecipes);
    // this.setState({
    //   recipes: copyRecipes,

    //});
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <Container>
        <h1>Create Account</h1>
        <Forms baseUrl={ baseURL } addRecipes={ this.addRecipes }/>
        <Recipes />
        <table>
          <tbody>
            
          </tbody>
        </table>
      </Container>
    )
  }
}







export default App;
