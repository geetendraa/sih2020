import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'semantic-ui-react';
import SignupForm from './components/SignupForm';
import AppRouter from './router/AppRouter';
import 'semantic-ui-css/semantic.min.css';
import './style/style.scss';
// import SkillsRequire from './components/SkillsRequire'

import configStore from './store/configStore';
import { Provider } from 'react-redux';  

const store = configStore();
// const a = store.subscribe();
// console.log(a);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));