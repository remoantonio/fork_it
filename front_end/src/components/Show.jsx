import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo.jsx'

export default class Show extends Component {
    

    render () {
    return (
            <div>
                <RecipeInfo />
               <p> {this.props.recipe.id.ingredients}</p>
            </div>
        )
    }
}