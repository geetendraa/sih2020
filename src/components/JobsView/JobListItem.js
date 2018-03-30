import React from 'react';
import { Header, Divider, Grid, Label } from 'semantic-ui-react';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';

export default () => (
  <div>
    <Grid columns={2} stackable>
      <Grid.Row style={{ padding: '2em' }} >

        <Grid.Column computer={11} style={{ }} >
          <span style={{ fontSize: '1.2em'}} ><strong style={{ marginRight: '1em', fontSize: '1.2em'}} >Project title </strong> 12 days left</span> 
          <p style={{ fontSize: '1.2em', paddingTop: '1em'}} >Project details go here. It contains details such as the brief description and overview of the project </p>

          <Label color='teal'>Skill 1</Label>
          <Label color='teal'>Skill 2</Label>
          <Label color='teal'>Skill 3</Label>
          <Label color='teal'>Skill 4</Label>
          <Label color='teal'>Skill 5</Label>
          
          
        </Grid.Column>

        <Grid.Column  computer={5} style={{ }} >
          <Header size='big' content='Rs. 534' />
          <p style={{ fontSize: '1.2em' }} >13 Bids</p>
          {/* <Header size='small' content='12 Bids' /> */}
        </Grid.Column>
        
      </Grid.Row>
    </Grid>

    <Divider />
  </div>
)