import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import 'normalize.css/normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
