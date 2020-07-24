import React, { Component } from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipes from './Recipes'


export default class SearchRecipes {
  state = {
    searched: false
  }
  toggleSearch = this.toggleSearch.bing(this)

  toggleSearch () {
    let toggle = !searched
    this.state({
      searched : toggle
    })
  }

  render() {
    return
    <Container>
      <Recipes toggleSearch = {this.toggleSearch}/>
      {searched ? (
        <Card className="h-100 shadow-sm bg-white rounded">
          <Card.Img variant="top" src={data.image} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">{data.label}</Card.Title>
            </div>
            <Card.Text className="text-secondary">{data.yield}</Card.Text>
            <Button
              onClick={() => setOrdered()}
              className="mt-auto font-weight-bold"
              variant="success"
              block
            >
              Show More
          </Button>
          </Card.Body>
        </Card>) : (<></>)
      }
    </Container>

  }
}
