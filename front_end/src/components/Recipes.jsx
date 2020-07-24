import React, { Component } from 'react';
import RecipeInfo from './RecipeInfo'

class Recipes extends Component {
    constructor (props) {
    super(props)
    this.state = {
      baseURL: 'https://api.edamam.com/search?app_id=c180e9f7&app_key=15b9007e988ab8d62a093bbfa45635bb&q=',
    //   api_id: 'app_id=c180e9f7',
    //   api_key: 'api_key=' + '15b9007e988ab8d62a093bbfa45635bb' +'&q=',
    //   query: '&',
      recipeName: '',
      searchURL: ''
    }

    //https://api.edamam.com/search?q=chicken&app_id=157c5422&&app_key=e247a1c94159aaaf903bc5d03963f444

    //https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=red%20apple&app_id=f7666d99&app_key=2109bcebbc7b27e68c00ec6699cee81d


    //https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=Apple&app_id=f7666d99&api_key=2109bcebbc7b27e68c00ec6699cee81d


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.recipeName
    }, () => {
      fetch(this.state.searchURL)
        .then(response => {
          return response.json()
        }).then(json => this.setState({
          recipe: json,
          recipeTitle: ''
        }),
          err => console.log(err))
    })
    this.props.toggleSearch()
  }


  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='recipeName'>Recipe</label>
          <input
            id='recipeName'
            type='text'
            value={this.state.recipeName}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Find Recipe'
          />
        </form>
       
        {/* <a href={this.state.searchURL}>{this.state.searchURL}</a> */}
       
        {(this.state.recipe)
            ? <RecipeInfo recipe={this.state.recipe} />
            : ''
          }
      
      </>
    )
  }
}


export default Recipes;