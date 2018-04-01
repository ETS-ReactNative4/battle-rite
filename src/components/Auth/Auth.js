import React, {Component} from 'react'
import {Redirect} from '../../../node_modules/react-router-dom/umd/react-router-dom'

import * as firebase from 'firebase'

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        }
    }

    login = () => {
        const auth = firebase.auth()
        const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        promise.catch(e => console.log(e.message))
        return <Redirect to="/"/>
    }
    signUp = () => {
        const auth = firebase.auth()
        const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        promise.catch(e => console.log(e.message))
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
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <form className="my-5" onSubmit={(event) => event.preventDefault()}>
                            <div className="form-group">
                                <input type="email" value={this.state.email}
                                       onChange={(e) => this.setState({email: e.target.value})} className="form-control"
                                       placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" value={this.state.password}
                                       onChange={(e) => this.setState({password: e.target.value})}
                                       className="form-control"
                                       placeholder="Password"/>
                            </div>
                            <div className="d-flex">
                                <button onClick={this.login} className="btn btn-primary" type="submit">Login</button>
                                <button className="btn btn-light mx-3" type="button" onClick={this.signUp}>Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}