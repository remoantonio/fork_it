import React from 'react';
import Forms from './components/Forms'


let baseURL = 'http://localhost:3003'

class App extends React.Component {
  state = {
        username: '',
        password: '',
        recipes: []
  }

  getRecipes = () => {
    fetch(baseURL + '/user/new').then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        username: data,
        password: data,
        recipes: data
      });
    });
  }

  addRecipes = (newRecipes) => {
    const copyRecipes = [...this.state.recipes];
    copyRecipes.push(newRecipes);
    this.setState({
      recipes: copyRecipes,
    });
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
        </table>
      </div>
    )
  }
}







export default App;
