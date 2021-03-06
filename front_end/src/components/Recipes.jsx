import React, { Component } from 'react';
import RecipeInfo from './RecipeInfo'
import {Card, Button, Container, Form, Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Recipes extends Component {
    constructor (props) {
    super(props)
    this.state = {
      baseURL: 'https://api.edamam.com/search?app_id=c180e9f7&app_key=15b9007e988ab8d62a093bbfa45635bb&q=',
      // recipe: '',
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
          recipe: json.hits,
          // recipe: json,
          recipeTitle: ''
        }),
          err => console.log(err))
    })
    { this.props.toggleSearch() 
    }
  }


  render() {
    return (
      <>
        <Form className='w-50 p-3'>
          <Form.Label htmlFor='recipeName'>Recipe</Form.Label>
          <Form.Control
            id='recipeName'
            placeholder='recipe name or ingredient'
            type='text'
            value={this.state.recipeName}
            onChange={this.handleChange}
          />
          <Button  variant='warning' type='submit' onClick={(event) => this.handleSubmit(event)}>
            Find Recipe</Button>
        </Form>

        
          {this.state.recipe ? (
          <Row>
            {this.state.recipe.map((recipe, index) => {
          return (
           <Col xs={3} className="mb-5">
            <RecipeInfo recipe={recipe.recipe} id={index} />
            </Col>
          )})} 
          </Row>):(<></>)} 

    

        {/* <Card className="h-100 shadow-sm bg-white rounded">
          <Card.Img variant="top" src={this.state.recipe.hits[0].image} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">{this.state.data.label}</Card.Title>
            </div>
            <Card.Text className="text-secondary">{this.state.data.yield}</Card.Text>
            <Button
              // onClick={() => setOrdered()}
              className="mt-auto font-weight-bold"
              variant="success"
              block
            >
              Show More
          </Button>
          </Card.Body>
        </Card> */}
      </>
    )
  }
}


export default Recipes;