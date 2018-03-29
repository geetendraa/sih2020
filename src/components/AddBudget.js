import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'micro projects (600-1500INR)', text: 'micro projects (600-1500INR)', value: 'micro projects (600-1500INR)' },
  { key: 'simple projects (1500-12500INR)', text: 'simple projects (1500-2500INR)', value: 'simple projects (1500-2500INR)' },
  { key: 'small projects(12500-37500INR)', text: 'small projects(12500-37500INR)', value: 'small projects(12500-37500INR)' },
  { key: 'medium projects( 37500-75000INR)', text: 'medium projects( 37500-75000INR)', value: 'medium projects( 37500-75000INR)' },
  { key: 'large projects(75000-120000INR)', text: 'large projects(75000-120000INR)', value: 'large projects(75000-120000INR)' },
  { key: 'very large projects(50000-1000000INR)', text: 'very large projects(50000-1000000INR)', value: 'very large projects(50000-1000000INR)' },
 

 
]

class AddBudget extends Component {
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
        placeholder='estimated budget of your project'
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

export default  AddBudget;
