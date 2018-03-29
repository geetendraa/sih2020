import React from 'react';
import { Grid, Header, Segment, Container, Button,Image,Icon,Step , Divider} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


const HelpPage = () => (
  <div>
    {/* ...............................how it works header............................ */}
    <Segment vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header 
                content='How it works' 
                size='huge'
                style={{
                 fontSize: '3em',
                  marginTop: '1em',
                  // marginLeft:'7em',
                }} />

              <Header 
                inverted
                as='h3'
                content='An overview of hiring and freelancing ' />
            </Grid.Column> 

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    {/* ......................buttons in how it work page..................... */}
    <Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
            <Button 
                color='green'
                size='huge' as={ NavLink } to='/help'> 
              if you're hiring.
              </Button>
            </Grid.Column> 
            {/* <Divider vertical>And</Divider> */}
            
            <Grid.Column>
            <Button 
                color='green'
                size='huge'  as={ NavLink } to='/freelencer'> 
                if you're freelancing.
              </Button>
            </Grid.Column> 

            {/* <Grid.Column>
            <Button 
            color='green'
            size='huge'  as={ NavLink } to='/faq'> 
            FAQs
            </Button>
          </Grid.Column>  */}

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
{/* .................................if you are hiring header ............. */}

<Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header 
              className="abc"
                inverted
                content='If You Are Hiring a Freelencer ' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '1em',
                  // marginLeft:'7em',
                color:'teal'
                }} />
            </Grid.Column> 

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    {/* {....................steps as per hiring ............} */}
    <Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
            <Step.Group>
    <Step active>
      <Icon name='eye' />
      <Step.Content>
        <Step.Title>FIND</Step.Title>
        <Step.Description>Easily find quality freelancers</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='user circle' />
      <Step.Content>
        <Step.Title>HIRE</Step.Title>
        <Step.Description>Hire the best freelancer</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='configure' />
      <Step.Content>
        <Step.Title>WORK</Step.Title>
        <Step.Description>Work efficiently, effectively.</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>PAY</Step.Title>
        <Step.Description>Pay easily, with peace of mind</Step.Description>
      </Step.Content>
    </Step>
   
  </Step.Group>
            </Grid.Column> 

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    {/* ------------------how it work page (hire a freelencer) */}
    <Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2} stackable>
            <Grid.Column>
              <Header 
                inverted
                content='Easily find quality freelancers' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '1em',
                  // marginLeft:'7em',
                  color:'teal'
                }} />

                    <Header 
                     inverted
                      as='h3'
                      content='On Upwork you’ll find a range of top talent, from programmers to designers, writers, customer support reps, and more. ' />

                    <Header 
                     inverted
                      as='h3'
                      content='Step-1 (Start by posting a job): Tell us about your project and the specific skills required. '/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Upwork analyzes your needs): Our search functionality uses data science to highlight freelancers based on their skills, helping you find talent that’s a good match.  '/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-2 (Upwork analyzes your needs): Our search functionality uses data science to highlight freelancers based on their skills, helping you find talent that’s a good match.  '/>




              </Grid.Column> 
              <Grid.Column>
              <Icon name = 'newspaper' size = 'massive'   style={{
                marginTop: '1.5em',
                color:'lightgreen'
                // marginTop: '3em'
              }}/>


              </Grid.Column> 
              

          </Grid.Row>
                  <Divider horizontal>.</Divider>            
          {/* .......first............. */}
          <Grid.Row columns={2} stackable>
                <Grid.Column>
                <Icon name = 'users' size = 'massive'   style={{
                    marginTop: '1.5em',
                    color:'lightgreen'
                    // marginTop: '3em'
                  }}/>
  
  
                </Grid.Column> 


            <Grid.Column>
              <Header 
                inverted
                content='Hire the best freelancer' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '1em',
                  // marginLeft:'7em',
                  color:'teal'
                }} />

                    <Header 
                     inverted
                      as='h3'
                      content='Invite favorite candidates to submit bids, then review and hire your favorite.  ' />

                    <Header 
                     inverted
                      as='h3'
                      content='step-1 (Browse profiles): View finalists’ Upwork profiles to see client ratings, portfolios, Job Success scores, and more.  '/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Review proposals): Evaluate bids, taking into account each freelancer’s qualifications, thought process, timeline, and overall cost '/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-3 (Schedule a chat): Ask specific questions, determine who’s the best fit, and contract.   '/>




              </Grid.Column> 

          </Grid.Row>
          <Divider horizontal>.</Divider>      

          {/* .............second......... */}

          <Grid.Row columns={2} stackable>
            <Grid.Column>
              <Header 
                inverted
                content='Work efficiently, effectively.' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '1em',
                  // marginLeft:'7em',
                  color:'teal'
                }} />

                    <Header 
                     inverted
                      as='h3'
                      content='Each project includes an online workspace shared by your team and your freelancer, allowing you to: ' />

                    <Header 
                     inverted
                      as='h3'
                      content='Step-1 (Send and receive files): Deliver digital assets in a secure environment.  '/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Share feedback in real time):Use Upwork Messages to communicate via text, chat, or video. '/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-3 (Use our mobile app):Many features can be accessed on your mobile phone when on the go  '/>




              </Grid.Column> 
              <Grid.Column>
              <Icon name = 'computer' size = 'massive'   style={{
                  marginTop: '1.5em',
                  // marginTop: '3em'
                  color:'lightgreen'
                }}/>


              </Grid.Column> 

          </Grid.Row>

          <Divider horizontal>.</Divider>      
                  {/*  ................third............*/}
                  <Grid.Row columns={2} stackable>
                <Grid.Column>
                <Icon name = 'money' size = 'massive'   style={{
                    marginTop: '1.5em',
                    // marginTop: '3em'
                    color:'lightgreen'
                  }}/>
  
  
                </Grid.Column> 
            <Grid.Column>
              <Header 
                inverted
                content='Pay easily, with peace of mind' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '1em',
                  // marginLeft:'7em',
                  color:'teal'
                }} />

                    <Header 
                     inverted
                      as='h3'
                      content='Pay your freelancer by the hour, or a fixed price for the entire project. On fixed-price jobs, use our licensed escrow service to release funds as pre-set milestones are met. ' />

                    <Header 
                     inverted
                      as='h3'
                      content='Step-1 (Simplified global payments): We deliver payments to freelancers in over 170 countries. '/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Includes Upwork Payment Protection):Only pay for work you authorize.'/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-3 (Invoicing and reporting): Access your invoices and transaction history on Upwork. '/>




              </Grid.Column> 

          </Grid.Row>
          {/* <Divider horizontal>.</Divider>       */}

        </Grid>
      </Container>
    </Segment>
              
           
  </div>
);

export default HelpPage;