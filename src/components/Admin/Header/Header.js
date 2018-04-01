import React, {Component} from 'react'
import {NavLink} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

export default class Header extends Component{
    render(){
        return(
            <div className="col-12 col-md-3 col-xl-2 bg-light bd-sidebar">
                <nav className="navbar">
                    <ul className="nav navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-dark" activeStyle={{fontWeight: 'bold'}} to="/admin/champions">Create champion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-dark" activeStyle={{fontWeight: 'bold'}} to="/admin/builds">Create build</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-dark" activeStyle={{fontWeight: 'bold'}} to="/admin/news">Create topic</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}