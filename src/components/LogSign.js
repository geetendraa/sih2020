import React from 'react';
import { Grid, Header, Segment, Container, Button,Image} from 'semantic-ui-react';
import SignupForm from './SignupForm'
import {NavLink} from 'react-router-dom';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
// import SignupColumn from './SignupForm';
// import LoginColumn from './LoginColumn';


const LogSign= () => (
  <div className="signup-column">
    <Segment  vertical textAlign='center'  style={{marginTop:'13em'}} >
      <Container>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <LoginColumn/>
             </Grid.Column> 
            
            {/* 2nd column */}
            <Grid.Column 
               style={{
                padding: '2em 0 5em 0',
                }}>
             
              {/* <SignupColumn/> */}
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment vertical textAlign='center' className="abc">
      <Header 
          content='How it works' 
          size='huge'
          style={{
            fontSize: '3em',
            marginTop: '2em',
            
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
   
    
 </div>
);

export default LogSign;