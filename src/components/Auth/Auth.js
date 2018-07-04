import React, {Component} from 'react'
import {NavLink} from '../../../node_modules/react-router-dom/umd/react-router-dom'

import axios from "axios/index";

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        axios.post("http://localhost:3000/users/signin",
            {email: this.state.email, password: this.state.password})
            .then(docs => this.props.history.goBack())
            .catch(e => console.log(e.message))
    }

    render() {
        return (
            <div className="main-content signin">
                <div className="main-content container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <form className="my-5" onSubmit={e => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="email" value={this.state.email}
                                           onChange={(e) => this.setState({email: e.target.value})}
                                           className="form-control"
                                           placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" value={this.state.password}
                                           onChange={(e) => this.setState({password: e.target.value})}
                                           className="form-control"
                                           placeholder="Password"/>
                                </div>
                                <div className="d-flex">
                                    <button onClick={this.login} className="btn btn-primary" type="submit">Login
                                    </button>
                                    <NavLink to="/signup" className="btn bg-transparent border-0 text-white">
                                        Signup
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}