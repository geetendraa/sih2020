import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

export default class HowtoPay extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
            <h3>chose any one </h3> <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='FIXED PRIZE PROJECT'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
            
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='HOURLY PROJECTS'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}
