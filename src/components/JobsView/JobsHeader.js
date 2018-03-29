import React from 'react';
import { Segment, Grid, Input, Button, Dropdown } from 'semantic-ui-react';

const jobSortOption = [
  {
    text: 'Newest first',
    value: 0
  },
  {
    text: 'Budget (low - high)',
    value: 1
  },
  {
    text: 'Budget (high - low)',
    value: 2
  },
  {
    text: 'Bids (low - high)',
    value: 3
  },
  {
    text: 'Bids (high - low)',
    value: 4
  },
]

export default class JobsHeader extends React.Component {
  render = () => (
    <Segment>
      <Grid columns={2} verticalAlign='middle' stackable >
        <Grid.Row>

          <Grid.Column textAlign='center' >
            <Input
              type='text'
              placeholder='search for a keyword...'
              size='big'
            />

            <Button
              content='Search'
              color='teal'
              size='big'
            />
          </Grid.Column>

          <Grid.Column>
            <Grid columns={2} verticalAlign='middle' stackable>
              <Grid.Row>

                <Grid.Column textAlign='right' >
                  <span><strong>Sort by : </strong></span>
                  <Dropdown selection options={jobSortOption} defaultValue={0} />
                </Grid.Column>

                <Grid.Column>
                  <p>Showing jobs <strong>1</strong> to <strong>20</strong> of <strong>110,213</strong></p>
                </Grid.Column>


              </Grid.Row>
            </Grid>
          </Grid.Column>
          
        </Grid.Row>
      </Grid>
    </Segment>
  )
}