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
                    className={`navbar navbar-expand-lg border-bottom border-secondary navbar-${this.state.theme} bg-${this.state.theme}`}>
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
                            {this.state.isAuthenticated ? <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-uppercase" activeClassName={'active'}
                                         to="/admin/*" id="navbarDropdownAdmin" role="button" data-toggle="dropdown"
                                         aria-haspopup="false" aria-expanded="false">Admin</NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
                                    <NavLink className="dropdown-item" activeStyle={{fontWeight: 'bold'}}
                                             to="/admin/champions">Champions</NavLink>
                                    <NavLink className="dropdown-item" activeStyle={{fontWeight: 'bold'}}
                                             to="/admin/builds">Builds</NavLink>
                                    <NavLink className="dropdown-item" activeStyle={{fontWeight: 'bold'}}
                                             to="/admin/battlerites">Battlerites</NavLink>
                                    <NavLink className="dropdown-item" activeStyle={{fontWeight: 'bold'}}
                                             to="/admin/news">News</NavLink>
                                </div>
                            </li> : ''}
                        </ul>
                        <div className="d-md-flex navbar-nav align-items-center d-none">
                            {this.state.isAuthenticated ?
                                <NavLink to="/" className="nav-link text-uppercase"
                                         onClick={logout}>Logout</NavLink> :
                                <NavLink className="nav-link text-uppercase" to="/login">Login</NavLink>}
                            <div className="light-theme-box" onClick={() => this.switchTheme('light')}/>
                            <div className="dark-theme-box" onClick={() => this.switchTheme('dark')}/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const logout = () => {
    firebase.auth().signOut()
}