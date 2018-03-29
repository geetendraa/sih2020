import React from 'react';
import { Grid, Header, Segment, Container, Button,Image,Input,Form,TextArea} from 'semantic-ui-react';
import SignupForm from './SignupForm'
import {NavLink} from 'react-router-dom';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import SkillsRequire from './SkillsRequire';
import HowtoPay from './HowtoPay';
import AddBudget from './AddBudget';
import LogSign from './LogSign';
const PostJobs= () => (
  <div>
      {/* ...............heading of postjobs..................  */}
    <Segment vertical textAlign='center' class = "abc">
              <Header 
                inverted
                content='Post the jobs/Hire a Freelencer' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '1em',
                  color:'teal'
                }} />
          
    </Segment>
  {/* ..................subheading of postjobs............ */}
       <Segment vertical >
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
              <Header 
                inverted
                content='Give us the details and we will match you with skilled professionals.' 
                size='huge'
                style={{
                  fontSize: '2em',
                  marginTop: '1em',
                  color:'teal'
                }} />
                <Header 
                color='black'
                as='h3'
                content='Eaisly find the quality freelancer.Hire the best freelancer.Work efficiently, effectively.Pay easily, with peace of mind' />
                  </Grid.Column> 
            </Grid.Row>
        </Grid>
      </Container>
        </Segment>
    {/* ................choose a project name  */}
     <Segment vertical >
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
              <Header 
                inverted
                content='choose a name for your project' 
                size='huge'
                style={{
                  fontSize: '1.5em',
                  marginTop: '1em',
                  color:'teal'
                }} />
                 <Input  fluid focus placeholder='e.g.Translate the scription' />
             </Grid.Column> 
            </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    {/* ..................discription of projects............... */}
    <Segment vertical>
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
              <Header 
                inverted
                content='Tell us more about your projects.' 
                size='huge'
                style={{
                  fontSize: '1.5em',
                  marginTop: '1em',
                  color:'teal'
                }} />
                  <Header 
                color='black'
                as='h3'
                content='Little bit of disription about your project i.e details of what you are trying to achieve,required result that you expect.This will help Freelancer to know more about your project'/>

               <Button 
                color='teal' 
                style={{ marginTop: '1em'}}>
								Upload file 
					    	</Button>
                   <Form>
                   <TextArea rows={2} focus placeholder='Tell us more' />
                   </Form>
             </Grid.Column> 
            </Grid.Row>
        </Grid>
      </Container>
    </Segment>



    {/* ....................what skills are required............... */}
    
    <Segment vertical >
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
             <Header 
                inverted
                content='What skills are required to accomplish your task ' 
                size='huge'
                style={{
                  fontSize: '1.5em',
                  marginTop: '1em',
                  color:'teal'
                }} />
                <Header 
                color='black'
                as='h3'
                content='Enter up to 3 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.'/>
                 <SkillsRequire/>

              </Grid.Column> 
          </Grid.Row>
      </Grid>
    </Container>
  </Segment>
   {/* ....................how to pay.................... */}

   <Segment vertical >
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
             <Header 
                inverted
                content='How do you want to pay? ' 
                size='huge'
                style={{
                  fontSize: '1.5em',
                  marginTop: '1em',
                  color:'teal'
                }} />
             <HowtoPay/>

               </Grid.Column> 
            </Grid.Row>
        </Grid>
      </Container>
   </Segment>
   {/* ...................estimated budget........ */}


   <Segment vertical >
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
             <Header 
                
                content='what is your estimated budget? ' 
                size='huge'
                style={{
                  fontSize: '1.5em',
                  marginTop: '1em',
                  color:'teal'
                }} />
           
                <AddBudget/>
               </Grid.Column> 
            </Grid.Row>
        </Grid>
      </Container>
   </Segment>
   {/* .......................post button .............. */}

   <Segment vertical style={{marginTop:'3em'}} >
       <Container>
         <Grid columns={1} stackable>
           <Grid.Row>
             <Grid.Column>
             <Button 
                color='green'
                size='huge'> 
                    Post My Project
                    
              </Button>
            </Grid.Column> 
            </Grid.Row>
        </Grid>
      </Container>
   </Segment>
  </div>
);
 export default PostJobs;