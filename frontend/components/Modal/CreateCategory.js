import React, { Component } from 'react'
import { connect  } from 'react-redux'

import { Modal, Button, ControlLabel, FormGroup, FormControl, Alert } from 'react-bootstrap';

class CreateCategory extends Component {

    getName() {
      return this.name.value
    }

    getDescription() {
      return this.description.value
    }

  render() {
    const { errors } = this.props
    console.log(errors.name)
    return (
      <div>
        <Modal.Header>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl type='text' inputRef={ref => {this.name = ref}}  placeholder='Enter name' />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl type='text' inputRef={ref => {this.description = ref}} placeholder='Enter description' />
            </FormGroup>

            <Button bsStyle='success' onClick={() => this.props.onSubmit(this.getName())}>Submit</Button>

            { errors.name != undefined ?
              <Alert bsStyle='danger'>
                <h4>Cannot create categoy</h4>
                { errors.name.map( (error, index) => {
                  return (
                    <p key={'error_'+index}>Name:{error}</p>
                  )
                })}
              </Alert> :
              null
            }

          </form>
        </Modal.Body>
      </div>
    )
  }
}

export default CreateCategory
