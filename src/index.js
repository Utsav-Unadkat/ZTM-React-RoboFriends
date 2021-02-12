import React from 'react';
import ReactDOM from 'react-dom'; // This is used for DOM manupulation
import './index.css'; 
import App from './containers/App';
import reportWebVitals from './reportWebVitals'; // this allows our servies to work faster and offline not necessary for this project 
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
