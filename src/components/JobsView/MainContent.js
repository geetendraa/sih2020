import React from 'react';
import { Grid } from 'semantic-ui-react';
import Settings from './JobFilterSettings';
import JobListContainer from './JobListContainer';

export default () => (
  <Grid columns={2}>
    <Grid.Row>

      <Grid.Column computer={4}>
        <Settings />
      </Grid.Column>

      <Grid.Column computer={12} >
        <JobListContainer />
      </Grid.Column>

    </Grid.Row>
  </Grid>
)