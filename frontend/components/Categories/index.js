import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import { getCategories } from '../../actions/category'

class Categories extends Component {

  componentWillMount() {
    //this.props.getCategories()
    //this.createSocket();
  }

  createSocket() {
    Cable = require('actioncable')

    var cable = Cable.createConsumer('ws://localhost:3001/cable')
    this.categories = cable.subscriptions.create({
      channel: "RoomChanel"
    }, {
      connected: () => {},
      received: (data) => {
        console.log(data)
      },
      create: function(category) {
        this.perform('create', {
          name: category.name
        })
      }
    })
  }

  render() {

    const { isFetching, categories } = this.props

    return (
      <div>
        <h1>Categories</h1>
        <Col>
        { isFetching ?
          <p>Loading...</p> :
          <ListGroup>
            { categories.map( (category, index) => {
                return(
                  <ListGroupItem key={'Categoty_' + index} header={category.name}>
                    {category.description} <br/>
                    <Button bsStyle='warning' bsSize='xsmall'>Comment</Button> &nbsp;&nbsp;
                    <Button bsStyle='info' bsSize='xsmall'>Update</Button> &nbsp;&nbsp;
                    <Button bsStyle='danger' bsSize='xsmall'>Delete</Button>
                  </ListGroupItem>
                )
            })}
          </ListGroup>
        }
        </Col>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
  isFetching: state.categories.isFetching,
  errors: state.categories.errors
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => {
    dispatch(getCategories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
