<<<<<<< HEAD
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
=======
import React from 'react';
import Forms from './components/Forms'


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
      <div>
        <h1>Create Account</h1>
        <Forms baseUrl={ baseURL } addRecipes={ this.addRecipes }/>
        <table>
          <tbody>
            {/* {
              this.state.recipes.map(recipes => {
                return (
                  <tr key={ recipes._id }>
                    <td>{ recipes.name }</td>
                  </tr>
                )
              })
            } */}
          </tbody>
        </table>
      </div>
    )
  }
}







export default App;
>>>>>>> 85eca28f3cd0200c9864185e6f0fbc84e679f1b6
