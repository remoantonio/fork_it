import React from 'react'

class Forms extends React.Component {

    state = {
        username: '',
        password: '',
        recipes: []
    }

    handleChange = (event) => {
      this.setState({
          username: event.target.value,
          password: event.target.value,
          recipes: event.target.value
      });
    }  
  

    handleSubmit = (event) => {
      event.preventDefault();
      fetch(this.props.baseUrl + '/user/new', {
          method: 'POST',
          body: JSON.stringify({
            username: event.target.value,
            password: event.target.value,
            recipes: event.target.value 
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      }).then(res => {
          return res.json();
      }).then(data => {
          this.props.addRecipes(data);
          this.setState({
            username: '',
            password: '',
            recipes: [] 
          });
      });
  }

    render() {
      return (

      <form onSubmit={ (evt) => this.handleSubmit(evt) }>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.username }/>
                    <br/>

                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.password }/>
                    <br/>

                    <label htmlFor="recipes">Recipes</label>
                    <input type="text" id="recipes"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.recipes }/>
                    <br/>

    
                <input type="submit" value="SUBMIT"/>
            </form>
        
      )
    
  }
}




export default Forms