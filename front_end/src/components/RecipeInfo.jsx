import React, { Component } from 'react';

class ReceipeInfo extends Component {
  render () {
   const recipes = this.props.recipe.hits.map(recipes => {
        return (
            
          <tr key={ recipes._id }>
              {/* <h1>Hello</h1> */}
            <td>{ recipes.recipe.label }</td>
          </tr>
          
        )
      })
    return  (
      <div>
        
        <h1>Recipe:</h1>
        
        {recipes}
              
            


      </div>
    )
  }
}

export default ReceipeInfo;