import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from '../node_modules/react-router-dom/umd/react-router-dom'

import * as firebase from 'firebase';

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/main.min.css'
import './plugins/fontawesome/css/font-awesome.min.css'

// JS
import '../node_modules/jquery/dist/jquery'
import '../node_modules/popper.js/dist/popper.min'
import '../node_modules/bootstrap/dist/js/bootstrap'

const config = {
    apiKey: "AIzaSyAARUwz1xoNJA8hNGAjM1OjEZfXQ8QR9KI",
    authDomain: "battle-rite.firebaseapp.com",
    databaseURL: "https://battle-rite.firebaseio.com",
    projectId: "battle-rite",
    storageBucket: "gs://battle-rite.appspot.com",
    messagingSenderId: "13229329100"
};
firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'))
registerServiceWorker()
