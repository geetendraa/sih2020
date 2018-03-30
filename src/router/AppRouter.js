import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import AppHeader from '../components/AppHeader';
import HelpPage from '../components/HelpPage';
import TestForm from '../components/TestForm';
import HomePage from '../components/HomePage/HomePage';
import MainContent from '../components/MainContent';
import FreelencingHelpPage from '../components/FreelencingHelpPage';
import AppFooter from '../components/AppFooter';
import PostJobs from '../components/PostJobs';
import SkillsRequire from '../components/SkillsRequire';
import HowtoPay from '../components/HowtoPay';
// import LogSign from '../components/LogSign';
import JobsView from '../components/JobsView/JobsView';

import LoginForm from '../components/LoginForm';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppHeader />
      <div style={{ marginTop: 76 }}>
        <Switch>
          <Route path='/' component={ HomePage } exact={true} />
          <Route path='/test' component={ TestForm } />
          <Route path='/help' component={ HelpPage } />
          <Route path='/freelencer' component={ FreelencingHelpPage } />
          <Route path='/postjobs' component={ PostJobs} />
          <Route path='/jobs' component={ JobsView } />
          <Route path='/login' component={ LoginForm } />
          <Route path='/signup' component={ SignupForm } />
          
        </Switch>
      </div>
      <AppFooter/>

        
    </div>
  </BrowserRouter>
);

export default AppRouter;