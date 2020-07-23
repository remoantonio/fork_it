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
