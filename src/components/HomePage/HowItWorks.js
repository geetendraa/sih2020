import React from 'react';
import {Segment, Grid, Container, Icon, Header} from 'semantic-ui-react';

export default () => (
  <div>
    <Segment vertical textAlign='center'>
      <Header 
          content='How it works' 
          size='huge'
          style={{
            fontSize: '3em',
            marginTop: '0.7em',
            // marginLeft:'7em',
            marginBottom:'1em',
            color:'inverted'
          }} />

      <Container>  
        <Grid columns={4} stackable>    
          <Grid.Row>

            <Grid.Column>
              <Icon name = 'newspaper' size = 'massive' color='teal'/>
              <Header 
                  content='POST' 
                  size='huge'
                  style={{
                    fontSize: '3em',
                    // marginTop: '3em'
                  }} />
              <Header 
                  as='h3'
                  content='Tackle anything from script to enterprise app. ' /> 
            </Grid.Column> 

            {/* 2nd column */}
            <Grid.Column >
              <Icon name = 'users' size = 'massive' color='pink'/>
              
              <Header 
                  content='HIRE' 
                  size='huge'
                  style={{
                  fontSize: '3em',
                  
                  }} />
              <Header 
              as='h3'
              content='Access experts and agencies across 1,500+ IT skills.' />
            </Grid.Column>

            {/* .....3rd column.............. */}

            <Grid.Column >
              <Icon name = 'computer' size = 'massive' color='red'/>
              <Header 
                  content='WORK' 
                  size='huge'
                  style={{
                    fontSize: '3em',
                    
                  }} />
              <Header 
              as='h3'
              content='Scale fast with on-demand engineering talent.' />
            </Grid.Column>

            {/* ...........4th column............ */}
            <Grid.Column >
              <Icon name = 'money' size = 'massive' color="green"/>

              <Header 
                  content='PAY' 
                  size='huge'
                  style={{
                  fontSize: '3em',
                  
                  }} />
              <Header 
              as='h3'
              content='Review code, track progress and pay with a click.' />
            </Grid.Column>  

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    
    <Segment vertical textAlign='center'>
    </Segment>
  </div>
    
);