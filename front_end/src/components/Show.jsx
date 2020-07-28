import React, { Component } from 'react'
import RecipesInfo from './RecipeInfo.jsx'

export default class Show extends Component {
    
        

    
    render () {
console.log ('hello')
    return (
            <div>
               
               <p> {this.props.recipe}</p>
               
            </div>
        )
    }
}