import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CategoryRegister from './pages/Register/Category';
import VideoRegister from './pages/Register/Video';
import Error from './pages/Error';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categoria/nova" component={CategoryRegister} />
      <Route path="/video/novo" component={VideoRegister} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
