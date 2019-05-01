import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import { Link } from 'react-router-dom'

const schema = {
  title: 'Add New Object',
  type: 'object',
  required: ['title', 'description', 'image'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'Add a Title' },
    description: {
      type: 'string',
      title: 'Description',
      default: 'Add Description'
    },
    image: { type: 'string', title: 'NASA picture', default: null }
  }
}
const log = type => console.log.bind(console, type)

class Addform extends Component {
  state = {
    requestStatus: 0
  }
  onSubmit = event => {
    axios
      .post('https://localhost:5001/api/Picture', event.formData)
      .then(resp => {
        console.log(resp)

        if (resp.status === 201) {
          this.setState({ requestStatus: resp.status })
        }
      })
  }
  render() {
    return (
      <>
        {this.state.requestStatus === 201 ? (
          <div className="alert alert-secondary" role="alert">
            It created successfully. Click it if you would like to go{' '}
            <Link to={`/`}>Home</Link>.
          </div>
        ) : (
          <section>
            <header>
              <h1> Add new picture </h1>
            </header>
            <Form
              schema={schema}
              onChange={log('changed')}
              onSubmit={this.onSubmit}
              onError={log('errors')}
            />
          </section>
        )}
      </>
    )
  }
}

export default Addform
