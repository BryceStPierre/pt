import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css'

import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faCoffee);

//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
