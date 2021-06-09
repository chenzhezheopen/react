import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { hot } from 'react-hot-loader/root'
import Routes from './configs/router.config.js'
// import { directive } from '@babel/types';
//Header
import Header from './components/Header'

// const HotRoutes = hot(Routes)

ReactDOM.render(
  <div>
    <Header />
    <Routes />
  </div>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
