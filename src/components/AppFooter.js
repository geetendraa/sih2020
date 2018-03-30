import React from 'react'
import { Grid, Image,Container,List,Column,Divider,Segment,Icon,Header,visi} from 'semantic-ui-react'

const AppFooter= () => (
  <div>
    <Segment 
      inverted
      style={{ padding: '5em 0em' }}
      vertical
    >
      <Container textAlign='justified'>
        <Grid columns={4}  stackable inverted>
          <Grid.Row>
            <Grid.Column verticalAlign='middle' >
              <Header 
                inverted
                content='FOO BAR' 
                size='huge'
                style={{
                  fontSize: '3em',
                }} />
            </Grid.Column>  

            <Grid.Column>
              <Header inverted as='h4' content='Freelencer' />
              <List link inverted>
                <List.Item as='a'>Categories</List.Item>
                <List.Item as='a'>Projects</List.Item>
                <List.Item as='a'>Local Jobs</List.Item>
                <List.Item as='a'>Contest</List.Item>
                <List.Item as='a'>Showcase</List.Item>
                <List.Item as='a'>Project Management</List.Item>
              </List>
            </Grid.Column>
            
            <Grid.Column>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>About Us</List.Item>
                <List.Item as='a'>How it Wotks</List.Item>
                <List.Item as='a'>Security</List.Item>
                <List.Item as='a'>Investors</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <Header inverted as='h4' content='Terms' />
              <List link inverted>
                <List.Item as='a'>Privacy Policy</List.Item>
                <List.Item as='a'>Terms and Conditions</List.Item>
                <List.Item as='a'>Code of Products</List.Item>
                <List.Item as='a'>Fees and Charges</List.Item>
              </List>
            </Grid.Column>

          </Grid.Row>
        </Grid>
        
        <Divider inverted section />

        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default AppFooter
