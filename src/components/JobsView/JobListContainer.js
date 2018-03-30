import React from 'react';
import { Segment ,Grid,Container,Column,Row,Header,Icon,Pagination} from 'semantic-ui-react';
import JobList from './JobList';

export default () => (
<div>
<Segment>
  <Grid columns={2}>
    <Container>
      {/*  ................third............*/}
      <Grid.Row stackable>
        <Grid.Column>
          <Header 
            inverted
            content='Browse latest Jobs' 
            size='huge'
            style={{
            fontSize: '2em',
            marginTop: '0.1em',
            color:'black'
            }} />
        </Grid.Column> 

        <Grid.Column>
          <Pagination
            fluid
            defaultActivePage={2}
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            totalPages={5}
          />
        </Grid.Column> 

      </Grid.Row>
      </Container>
    </Grid>
  </Segment>

  <Segment>
    <JobList />
  </Segment>
  
  </div>


);