import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import { Link } from 'react-router-dom'

const log = type => console.log.bind(console, type)

class UpdatePicture extends Component {
  state = {
    formSchema: {
      title: 'Picture',
      type: 'object',
      required: ['title', 'description', 'image'],
      properties: {
        id: {
          type: 'number',
          title: 'Id',
          default: parseInt(this.props.match.params.id)
        },
        title: {
          type: 'string',
          title: 'Title',
          default: this.props.match.params.title
        },
        description: {
          type: 'string',
          title: 'Description',
          default: this.props.match.params.description
        },
        image: {
          type: 'string',
          title: 'NASA picture',
          default: ''
        }
      }
    },
    uiSchema: {
      id: { 'ui:widget': 'hidden' }
    },
    requestStatus: 0
  }

  onSubmit = event => {
    axios
      .put(
        `https://localhost:5001/api/Picture/${this.props.match.params.id}`,
        event.formData
      )
      .then(resp => {
        console.log(resp)

        if (resp.status === 204) {
          this.setState({ requestStatus: 204 })
        }
      })
  }
  render() {
    return (
      <>
        {this.state.requestStatus === 204 ? (
          <div className="alert alert-secondary" role="alert">
            It updated successfully. Click it if you would like to go{' '}
            <Link to={`/FindPicture`}>Search Picture</Link>.
          </div>
        ) : (
          <Form
            schema={this.state.formSchema}
            uiSchema={this.state.uiSchema}
            onChange={log('changed')}
            onSubmit={this.onSubmit}
            onError={log('errors')}
          />
        )}
      </>
    )
  }
}
export default UpdatePicture
