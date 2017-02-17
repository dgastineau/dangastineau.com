import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { updateLocation } from './location'


const router = routerMiddleware(browserHistory)
const middlewares = [thunk, router]

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(middlewares)
  );
}

