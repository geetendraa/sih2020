import React from 'react';
import { Segment, Divider, Header, Input } from 'semantic-ui-react';
import JobFilterBudget from './JobFilterBudget';

export default class JobFilterSettings extends React.Component {
  render = () => (
    <Segment>
      <Header size='huge' content='Filter' />
      <Divider />

      <Header size='big' content='Budget'></Header>

      <JobFilterBudget />
      
      
    </Segment>
  )
}
