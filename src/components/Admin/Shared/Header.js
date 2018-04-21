import React, {Component} from 'react'
import {NavLink} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

export default class Header extends Component {
    render() {
        return (
            <div className="col-12 col-md-3 col-xl-2 pl-0">
                <nav className="navbar py-md-4 admin-sidebar border-secondary h-100 align-items-start border-right bg-dark2">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-light"
                                     activeStyle={{fontWeight: 'bold'}} to="/admin/champions">Champions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-light"
                                     activeStyle={{fontWeight: 'bold'}} to="/admin/builds">Builds</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-light"
                                     activeStyle={{fontWeight: 'bold'}} to="/admin/battlerites">Battlerites</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase small text-light"
                                     activeStyle={{fontWeight: 'bold'}} to="/admin/news">News</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}