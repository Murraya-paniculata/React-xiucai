import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Router from './container/Router/Router'
import * as serviceWorker from './serviceWorker';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/common.css';
import './assets/css/inside.css';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
