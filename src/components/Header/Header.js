import React, {Component} from 'react'
import {Link, NavLink} from '../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from "firebase";

import './Header.min.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'dark',
            isAuthenticated: false
        }
    }

    switchTheme(theme) {
        this.props.theme(theme)
        this.setState({theme: theme})
    }

    logout = () => {
        firebase.auth().signOut()
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
            <div>
                <nav
                    className={`navbar navbar-expand-lg border-bottom navbar-${this.state.theme} bg-${this.state.theme}`}>
                    <Link to='/' className="navbar-brand">BattleRite</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className={`nav-item`}>
                                <NavLink className="nav-link text-uppercase"
                                         exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase"
                                         to="/news">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase"
                                         to="/guides">Guides</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase"
                                         to="/videos">Videos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase"
                                         to="/staff">Staff</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase"
                                         to="/contact">Contact</NavLink>
                            </li>
                            {this.state.isAuthenticated?<li className="nav-item">
                                <NavLink className="nav-link text-uppercase"
                                         to="/admin">Admin</NavLink>
                            </li>:''}
                        </ul>
                        <div className="d-md-flex navbar-nav align-items-center d-none">
                            {this.state.isAuthenticated ?
                                <NavLink to="#" className="nav-link text-uppercase"
                                        onClick={this.logout}>Logout</NavLink> :
                                <NavLink className="nav-link text-uppercase" to="/auth">Login</NavLink>}
                            <div className="light-theme-box" onClick={() => this.switchTheme('light')}/>
                            <div className="dark-theme-box" onClick={() => this.switchTheme('dark')}/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}