import React from 'react';
import { Checkbox } from 'semantic-ui-react';
export default class JobFilterBudget extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value }) 
  render = () => (
    <div className='flex' style={{ justifyContent: 'space-around', alignItems: 'center' }}>
      <input type="text" className='filter-input' placeholder='min'/>
      <p>to</p>
      <input type="text" className='filter-input' placeholder='max'/>
    </div>
  );
}