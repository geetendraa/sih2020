import React from 'react';
import JobsHeader from './JobsHeader';
import { Container } from 'semantic-ui-react';
import MainContent from './MainContent';

export default () => (
  <Container style={{ 
    marginBottom: '5em'
  }}>
    <JobsHeader />
    <MainContent />
  </Container>   
)