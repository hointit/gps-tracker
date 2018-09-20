import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-green.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'admin-lte/dist/js/adminlte.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
