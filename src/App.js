import React, {Component} from 'react'
import {Switch, Route} from '../node_modules/react-router-dom/umd/react-router-dom'

import * as firebase from 'firebase'

// Components
import Header from './components/Header/Header'
import AHeader from './components/Admin/Header/Header'

import Home from './components/Home/Home'
import News from './components/News/News'
import Guides from './components/Guides/Guides'
import Champions from './components/Guides/Champions'
import Videos from './components/Videos/Videos'
import Staff from './components/Staff/Staff'
import Contact from './components/Contact/Contact'
import Auth from './components/Auth/Auth'

import Admin from './components/Admin/Admin'
import AChampions from './components/Admin/Champions/Champions'
import ABuilds from './components/Admin/Builds/Builds'
import ANews from './components/Admin/News/News'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'dark',
            isAuthenticated: false
        }
    }

    switchTheme = (theme) => {
        this.setState({theme})
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({isAuthenticated: true})
            } else {
                this.setState({isAuthenticated: false})
            }
        })
    }

    render() {
        return (
            <div className={`App h-100 ${this.state.theme}-theme bg-${this.state.theme}`} data-theme={this.state.theme}>

                <Header theme={this.switchTheme}/>
                {this.state.isAuthenticated ? <AHeader/> : ''}

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route exact path='/guides' component={Guides}/>
                    <Route path='/champions/:id' component={Champions}/>
                    <Route path='/videos' component={Videos}/>
                    <Route path='/staff' component={Staff}/>
                    <Route path='/contact' component={Contact}/>

                    <Route path='/auth' component={Auth}/>

                    <Route exact path='/admin' component={Admin}/>
                    <Route path='/admin/champions' component={AChampions}/>
                    <Route path='/admin/builds' component={ABuilds}/>
                    <Route path='/admin/news' component={ANews}/>

                    {/*Admin*/}
                    {/*{this.state.isAuthenticated ? <Route path='/admin' component={Admin} childRoutes={loginRoutes}/> :
                        <Redirect from="/admin/*" to="/will-match"/>}*/}

                    {/*<Redirect from="/admin/*" to="/404"/>*/}
                    {/*<Route component={NoMatch}/>*/}
                </Switch>
            </div>
        )
    }
}

/*const NoMatch = () => (
    <div>
        <h3>
            404
        </h3>
    </div>
);*/
