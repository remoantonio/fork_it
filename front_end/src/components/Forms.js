import React from 'react'

class Forms extends React.Component {

    state = {
        userName: '',
        password: '',
        password2: '',
    }

    handleChange = (event) => {
      this.setState({
          [event.currentTarget.id]: event.currentTarget.value,
         
      });
    }  
  

    handleSubmit = (event) => {
      event.preventDefault();
      fetch(this.props.baseUrl + '/user/new', {
          method: 'POST',
          body: JSON.stringify({
            userName: this.state.userName,
            password: this.state.password,
            password2: this.state.password,
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      }).then(res => {
          return res.json();
      }).then(data => {
          this.props.addRecipes(data);
          this.setState({
            userName: '',
            password: '',
            password2: '',
          });
      });
  }

    render() {
      return (

      <form onSubmit={ (evt) => this.handleSubmit(evt) }>
                <label htmlFor="userName">Username: </label>
                <input type="text" id="userName"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.userName }/>
                    <br/>

                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.password }/>
                    <br/>


                    <label htmlFor="password2">Re-enter Password: </label>
                    <input type="text" id="password2"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.password2 }/>
                    <br/>


    
                <input type="submit" value="SUBMIT"/>
            </form>
        
      )
    
  }
}




export default Forms