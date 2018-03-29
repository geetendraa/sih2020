import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'website design', text: 'website design', value: 'website design' },
  { key: 'logo design', text: 'logo design', value: 'logo design' },
  { key: 'mobile app development', text: 'mobile app development', value: 'mobile app development' },
  { key: 'data enter', text: 'data enter', value: 'data enter' },
  { key: 'article writing', text: 'article writing', value: 'article writing' },
  { key: 'sales and marketing', text: 'sales and marketing', value: 'sales and marketing' },
  { key: 'product sourcing and manufacturing', text: 'product sourcing and manufacturing', value: 'product sourcing and manufacturing' },
  { key: 'engineering and science', text: 'engineering and science', value: 'engineering and science' },
  { key: 'bussines services', text: 'bussines services', value: 'bussines services' },
  { key: 'local jobs and services', text: 'local jobs and services', value: 'local jobs and services' },
 
]

class SkillsRequire extends Component {
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options],
    })
  }

  handleChange = (e, { value }) => this.setState({ currentValues: value })

  render() {
    const { currentValues } = this.state

    return (
      <Dropdown
        focus
        options={this.state.options}
        placeholder='Choose Languages'
        search
        selection
        fluid
        multiple
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}

export default  SkillsRequire;
