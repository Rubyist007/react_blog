import React, { Component } from 'react'
import { connect  } from 'react-redux'

import { Grid, Row } from 'react-bootstrap';

import BlogHeader from '../BlogHeader/index'

class App extends Component {

  whatCreate() {
    if (this.props.route.path == "/") {
      return 'Category'
    }
    else {
      return 'Post'
    }
  }

  render() {
    return (
      <div>
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <BlogHeader type={ this.whatCreate() } />
        </div>

        <Grid>
          <Row>
            { this.props.children }
          </Row>
        </Grid>
      </div>
     )
  }
}

export default App
