/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev'
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { updateLocation } from './store/location'
import routes from './routes';
import {loadPosts} from './actions/postActions'
import {loadAbout} from './actions/aboutActions'
import {loadProjects} from './actions/projectActions'
import {loadCharts} from './actions/chartActions'
import './styles/styles.css';

const store = configureStore();
store.asyncReducers = {}
store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

store.dispatch(loadPosts());
store.dispatch(loadAbout());
store.dispatch(loadProjects());
store.dispatch(loadCharts());

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
