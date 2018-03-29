import { createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        auth: authReducer       
      })
    );

  return store;
}