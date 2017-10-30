import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Row } from 'react-bootstrap';

import { postCategorySuccess, categoryRequest } from '../../actions/category'

import BlogHeader from '../BlogHeader/index'

class App extends Component {

  componentWillMount() {
    this.createSocket();
  }

  createSocket() {
    var Cable = require('actioncable')

    var cable = Cable.createConsumer('ws://localhost:3001/cable')
    this.categories = cable.subscriptions.create({
      channel: "CategoryChannel"
    }, {
      connected: () => {},
      received: (data) => {
        this.props.crateCategory(data)
      },
      create: function(data) {
        this.perform('create', {
          name: data.name,
          description: data.description
        })
      },
      update: function(data) {
        this.perform('update', {
          name: data.name,
          description: data.description,
          id: data.id
        })
      }
    })
  }


  whatCreate() {
    if (this.props.route.path == "/") {
      return 'Category'
    }
    else {
      return 'Post'
    }
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        cableCategory: this.categories
      })
    )

    return (
      <div>
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <BlogHeader type={ this.whatCreate() } cableCategory={ this.categories } />
        </div>

        <Grid>
          <Row>
            { childrenWithProps }
          </Row>
        </Grid>
      </div>
     )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  crateCategory: (data) => {
      dispatch(postCategorySuccess(data))
  },
  categoryRequest: () => {
    dispatch(categoryRequest())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
