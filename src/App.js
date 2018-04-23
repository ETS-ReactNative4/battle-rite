import React, {Component} from 'react'
import {Switch, Route, Redirect} from '../node_modules/react-router-dom/umd/react-router-dom'

import * as firebase from 'firebase'

// Components
import Header from './components/Shared/Header'

import Home from './components/Home/Home'

// News
import News from './components/News/News'
import ViewNews from './components/News/View'

import Guides from './components/Guides/Guides'
import Champions from './components/Guides/Champions'
import Videos from './components/Videos/Videos'
import Staff from './components/Staff/Staff'
import Contact from './components/Contact/Contact'

import Auth from './components/Auth/Auth'
import Signup from './components/Auth/Signup'

// Admin
import AHeader from './components/Admin/Shared/Header'
import Admin from './components/Admin/Admin'
import ABuildsView from './components/Admin/Builds/BuildsView'
import ABuilder from './components/Admin/Builds/Builder'
import ABattlerites from './components/Admin/Battlerites/BattleritesCards'
import AChampionsForm from './components/Admin/Champions/Form'
import ANewsForm from './components/Admin/News/Form'

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
            <div className={`App h-100 ${this.state.theme}-theme bg-${this.state.theme}`} data-theme={this.state.theme} style={{overflowX: 'hidden'}}>
                <Header theme={this.switchTheme}/>
                <Switch>
                    <Route exact path='/' component={Home}/>

                    {/*News*/}
                    <Route exact path='/news/' component={News}/>
                    <Route path='/news/:news' component={ViewNews}/>

                    <Route exact path='/guides' component={Guides}/>
                    <Route path='/champions/:id' component={Champions}/>
                    <Route path='/videos' component={Videos}/>
                    <Route path='/staff' component={Staff}/>
                    <Route path='/contact' component={Contact}/>

                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Auth}/>

                    {this.state.isAuthenticated ? <Route>
                        <div className="container-fluid">
                            <div className="row">
                                <AHeader/>
                                <Route exact path='/admin/:sectionName' component={Admin}/>

                                {/* Builds */}
                                <Route exact path='/admin/builds/:champion' component={ABuildsView}/>
                                <Route path='/admin/builds/:champion/create' component={ABuilder}/>
                                <Route path='/admin/builds/:champion/:build' component={ABuilder}/>

                                {/* Battlerites */}
                                <Route path='/admin/battlerites/:champion' component={ABattlerites}/>

                                {/* News */}
                                <Route exact path='/admin/news/create' component={ANewsForm}/>
                                <Route path='/admin/news/edit/:news' component={ANewsForm}/>

                                {/* Champions */}
                                <Route exact path='/admin/champions/create' component={AChampionsForm}/>
                                <Route path='/admin/champions/edit/:champion' component={AChampionsForm}/>
                            </div>
                        </div>
                        </Route> :
                        <Route>
                            {/*<Redirect to="/"/>*/}
                        </Route>
                    }
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
