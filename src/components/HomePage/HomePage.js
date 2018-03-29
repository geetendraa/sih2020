import React from 'react';
import { Grid, Header, Segment, Container, Button,Image} from 'semantic-ui-react';
import SignupForm from '../SignupForm'
import { Link } from 'react-router-dom';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import HowItWorks from './HowItWorks';

export default () => (
  <div>
    <Segment inverted vertical textAlign='center'>
      <Container>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header 
                inverted
                content='Freelancr'
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '3em'
                }} />
              
              <Header 
                inverted
                as='h3'
                content='A platform to connect the people to the Government.' />
              <Header 
                inverted 
                as='h3'
                content="Give us the details and we'll mathch you with skilled professionals." />

              <Header
                inverted
                as='h3'
                content='Safe. Secure. Simple' />

              <Button 
                color='green'
                size='huge'  as={ Link } to='/help'> 
                How it works
              </Button>
            </Grid.Column> 
            
            {/* 2nd column */}
            <Grid.Column 
               style={{
                padding: '2em 0 5em 0',
                }}>
              <SignupForm />
              
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <HowItWorks />
  </div>
);