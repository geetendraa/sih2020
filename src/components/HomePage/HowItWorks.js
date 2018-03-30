import React from 'react';
import {Segment, Grid, Container, Icon, Header} from 'semantic-ui-react';

export default () => (
  <div>
    <Segment 
      vertical 
      textAlign='center'
      style={{
        padding: '6em'
      }} >
      <Header 
          size='huge'
          content='How it works' 
          style={{
            fontSize: '3em',
            marginBottom: '2em'
          }} />

        <Grid columns={4}>    
        

            <Grid.Column>
              <Icon name = 'newspaper' size = 'massive'/>
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
              <Icon name = 'users' size = 'massive'/>
              
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
              <Icon name = 'computer' size = 'massive'/>
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
              <Icon name = 'money' size = 'massive'/>

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

        </Grid>
    </Segment> 
  </div>
    
);