import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from '../node_modules/react-router-dom/umd/react-router-dom.min.js'

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/main.min.css'
import './plugins/fontawesome/css/font-awesome.min.css'

// JS
import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/popper.js/dist/popper.min'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'))
registerServiceWorker()
