import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './Components/MainPage';


ReactDOM.render(
  React.createElement(MainPage, {}, null),
  document.getElementById('root')
);

reportWebVitals();
