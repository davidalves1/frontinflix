import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CategoryRegister from './pages/Register/Category';
import VideoRegister from './pages/Register/Video';

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', margin: '0 2rem', color: '#efefef'}}>
      <h1>Página não encontrada! :(</h1>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categoria/nova" component={CategoryRegister} />
      <Route path="/video/novo" component={VideoRegister} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
