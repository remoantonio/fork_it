import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container, Button, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SearchRecipes from './components/SearchRecipes'
import SavedRecipes from './components/SavedRecipes'
import Forms from './components/Forms.jsx'
import Recipes from './components/Recipes.jsx'
import Login from './components/Login'
import RecipeInfo from './components/RecipeInfo'
import Show from './components/Show'
import Login2 from './components/Login2'

let baseURL = 'http://localhost:3003'

class App extends React.Component {
  state = {
    userName: ''
  }
  setUser = this.setUser.bind(this)

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

  setUser(data) {
    this.setState({
      userName : data
    })
  }
 
  addRecipes = (newRecipes) => {
    // const copyRecipes = [...this.state.recipes];
    // copyRecipes.push(newRecipes);
    // this.setState({
    //   recipes: copyRecipes,

    //});
  }

  componentDidMount() {
    fetch("http://localhost:3003/user").then(res => {
      return res.json();
    }).then(data => {
      console.log(data)
      this.setState({
        userName: data
      })
    });
  }

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={SavedRecipes} />
          <Route exact path='/search' component={SearchRecipes} />
          <Route
            exact path='/login'
            render={(props) => (
              <Login {...props} setUser={this.setUser} />
            )} />
            <Route
            exact path='/login2'
            render={(props) => (
              <Login2 {...props} setUser={this.setUser} />
            )} />
          <Route exact path='/show' component={Show} />
          <Route component={Error} />
        </Switch>

       

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
