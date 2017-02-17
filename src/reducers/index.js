import {combineReducers} from 'redux';
import posts from './postReducer';
import about from './aboutReducer';
import projects from './projectReducer';
import charts from './chartReducer';
import { routerReducer } from 'react-router-redux'
import locationReducer from '../store/location'


const rootReducer = combineReducers({
  posts,
  about,
  projects,
  charts,
  routing: routerReducer,
  location: locationReducer
});

export default rootReducer;
