import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Row, Col, ListGroup, ListGroupItem, Button, Modal } from 'react-bootstrap'

import { getCategories, patchCategorySuccess, categoryRequest } from '../../actions/category'

import CreateCategory from '../Modal/CreateCategory'

class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: null
    }
  }

  close() {
    this.setState({ show: false,
                    id: null
                  })
  }

  open(id) {
    this.setState({ show: true,
                    id: id
                  })
  }

  onSubmit() {
    let data = {}
    data.category = {}
    data.category.name = this.refs.modal.getName()
    data.category.description = this.refs.modal.getDescription()
    console.log(data)
    this.props.crateCategory(data)
  }

  hendleSendEvant(name, description, id) {
    let data = {}
    data.name = name
    data.description = description
    data.id = this.state.id
    console.log(data)

    this.props.categoryRequest()
    this.props.cableCategory.update(data)
  }

  componentWillMount() {
    this.props.getCategories()
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
                    <Button bsStyle='info' bsSize='xsmall' onClick={ () => this.open(category.id) }>Update</Button> &nbsp;&nbsp;
                    <Button bsStyle='danger' bsSize='xsmall'>Delete</Button>
                  </ListGroupItem>
                )
            })}
          </ListGroup>
        }
        </Col>
        { this.state.show ?
          <Modal show={ this.state.show } onHide={this.close.bind(this)}>
            <CreateCategory onSubmit={this.hendleSendEvant.bind(this)} ref='modal' errors={this.props.errors} what="Category" does="Update" />
          </Modal> :
          null
        }
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
  },
  updateCategory: (data) => {
      dispatch(patchCategorySuccess(data))
  },
  categoryRequest: () => {
    dispatch(categoryRequest())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
