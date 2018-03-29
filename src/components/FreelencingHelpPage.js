import React from 'react';
import { Grid, Header, Segment, Container, Button,Image,Icon,Step,Divider} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


const FreelencingHelpPage = () => (
    <div>
        {/* ...............................how it works header............................ */}
    <Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header 
                inverted
                content='How it works' 
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

            <Grid.Column>
            <Button 
                color='green'
                size='huge'  as={ NavLink } to='/freelencer'> 
                if you're freelancing.
              </Button>
            </Grid.Column> 
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
{/* .................................if you are freelencer header ............. */}

<Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header 
                inverted
                className="abc"
                content='If You Are Working as a Freelencer' 
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
    {/* {....................steps as per freelencing............} */}
    <Segment inverted vertical textAlign='center' class = "abc">
      <Container>
        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
            <Step.Group>
    <Step active>
      <Icon name='find' />
      <Step.Content>
        <Step.Title>FIND</Step.Title>
        <Step.Description>Find rewarding projects</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='users' />
      <Step.Content>
        <Step.Title> GET HIRED</Step.Title>
        <Step.Description>Get hired quickly</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='computer' />
      <Step.Content>
        <Step.Title>WORK</Step.Title>
        <Step.Description>Work efficiently, effectively.</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='money' />
      <Step.Content>
        <Step.Title> GET PAID</Step.Title>
        <Step.Description>Get paid on time</Step.Description>
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
                content='Find rewarding projects' 
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
                      content='This is a great place to find more clients, and to run and grow your own freelance business. ' />

                    <Header 
                     inverted
                      as='h3'
                      content='Step-1 (Freedom to work on ideal projects):On Upwork, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.'/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Wide variety and high pay):Clients are now posting jobs in hundreds of skill categories, paying top price for great work. '/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-3 (More and more success): The greater the success you have on projects, the more likely you are to get hired by clients that use Upwork. '/>




              </Grid.Column> 
              <Grid.Column>
              <Icon name = 'find' size = 'massive'   style={{
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
                content='Get hired quickly' 
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
                      content=' Upwork makes it easy to connect with clients and begin doing great work. ' />

                    <Header 
                     inverted
                      as='h3'
                      content='step-1 (Streamlined hiring): Upwork’s sophisticated algorithms highlight projects you’re a great fit for.'/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Top Rated and Rising Talent programs):Enjoy higher visibility with the added status of prestigious programs. '/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-3 (Do substantial work with top clients): Upwork pricing encourages freelancers to use Upwork for repeat relationships with their clients. '/>




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
                      content=' With Upwork, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to: ' />

                    <Header 
                     inverted
                      as='h3'
                      content='Step-1  (Send and receive files) Deliver digital assets in a secure environment. '/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Share feedback in real time): Use Upwork Messages to communicate via text, chat, or video. '/>

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
                content='Get paid on time' 
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
                      content=' All projects include Upwork Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website. ' />

                    <Header 
                     inverted
                      as='h3'
                      content='Step-1 (All invoices and payments happen through Upwork):Count on a simple and streamlined process. '/>

                    <Header 
                     inverted
                      as='h3'
                      content='Step-2 (Hourly and fixed-price projects): For hourly work, submit timesheets through Upwork. For fixed-price jobs, set milestones and funds are released via Upwork escrow features. .'/>

                    <Header 
                    inverted
                    as='h3'
                    content='Step-3 (Multiple payment options): Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more. '/>




              </Grid.Column> 

          </Grid.Row>
          {/* <Divider horizontal>.</Divider>       */}

        </Grid>
      </Container>
    </Segment>
    
  </div>
);

export default FreelencingHelpPage;
           
               
 


        