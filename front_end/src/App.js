import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import SearchRecipes from './components/SearchRecipes'
import SavedRecipes from './components/SavedRecipes'
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

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    return (
      <Container fluid>
      <NavBar /> 
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={SavedRecipes} />
          <Route exact path='/search' component={SearchRecipes} />
          <Route component={Error} />
        </Switch>
      
      
        <h1>Login/Sign Up</h1>
        <Forms baseUrl={ baseURL } addRecipes={ this.addRecipes }/>
        {/* <table>
          <tbody>
            {
              this.state.recipes.map(recipes => {
                return (
                  <tr key={ recipes._id }>
                    <td>{ recipes.name }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table> */}
      </Container>
    )
  }
}







export default App;
