import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { createCategory } from '../../actions/category'
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap';

import CreateCategory from '../Modal/CreateCategory'

class BlogHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  close() {
    this.setState({ show: false })
  }

  open() {
    this.setState({ show: true })
  }

  onSubmit() {
    let data = {}
    data.category = {}
    data.category.name = this.refs.modal.getName()
    data.category.description = this.refs.modal.getDescription()
    console.log(data)
    this.props.crateCategory(data)
  }

  componentWillMount() {
    //this.props.getCategories()
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
        console.log(data)
      },
      create: function(name) {
        this.perform('create', {
          name: name
        })
      }
    })
  }

  hendleSendEvant(name) {
    this.categories.create(name)
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <p>React Blog</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Button bsStyle='primary' onClick={ () => this.open() }>Create { this.props.type  }</Button>
            { this.state.show ?
              <Modal show={ this.state.show } onHide={this.close.bind(this)}>
                <CreateCategory onSubmit={this.hendleSendEvant.bind(this)} ref='modal' errors={this.props.errors} />
              </Modal> :
              null
            }
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.categories.errors
})

const mapDispatchToProps = dispatch => ({
  crateCategory: (data) => {
    dispatch(createCategory(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogHeader)
