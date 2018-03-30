import React from 'react';
import { Segment, Divider, Header, Input, Form } from 'semantic-ui-react';
import JobFilterBudget from './JobFilterBudget';
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox';

export default class JobFilterSettings extends React.Component {
  render = () => (
    <div>

      <Segment>
        <Header size='huge' content='Filter' />
        <Divider />

        <Header size='big' content='Budget'></Header>

        <JobFilterBudget />
        
        <Header size='big' content='Hourly Projects' />

        <JobFilterBudget />
        
        
      </Segment>

      <Segment>
        <Header size='huge' content='Skills'/>
        <Divider />

        <Segment>
          <Form>
            <Form.Field>
              <Checkbox label='PHP' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Android Development' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='SEO' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Accounting' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Content Writing' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Transalation' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Video Captioning' />            
            </Form.Field>
          </Form>
        </Segment>
        
      </Segment>
    </div>
  )
}
