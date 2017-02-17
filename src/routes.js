import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ProjectsPage from './components/projects/ProjectsPage';
import SinglePostPage from './components/posts/FullPost';
import ResourcesPage from './components/resources/ResourcesPage'
import PostsPage from './components/posts/PostsPage'
import AboutPage from './components/about/AboutPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="posts" component={PostsPage} />
    <Route path="post/:slug" component={SinglePostPage} />
    <Route path="projects" component={ProjectsPage} />
    <Route path="inspiration" component={ResourcesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
