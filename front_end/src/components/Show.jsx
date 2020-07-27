import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo.jsx'

export default class Show extends Component {
    constructor (props) {
    super(props)
    this.state = {
      baseURL: 'https://api.edamam.com/search?app_id=c180e9f7&app_key=15b9007e988ab8d62a093bbfa45635bb&q=',
      recipe: '',
      
    }
        
} 
    
    render () {
    return (
            <div>
                <RecipeInfo />
               <p> {this.props.recipe.id.ingredients}</p>
            </div>
        )
    }
}