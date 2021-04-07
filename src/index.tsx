import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TsTest from './tsTest'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TsTest/>
    <div>123123312123122312312313</div>
      <button>321</button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// console.log('123123123333333333')
