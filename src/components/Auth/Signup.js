import React, {Component} from 'react'
import * as firebase from "firebase";

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        }
    }

    signUp = () => {
        /*const auth = firebase.auth()
        const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        promise.catch(e => console.log(e.message))*/
    }

    render() {
        return (
            <div className="main-content signup">
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <form className="my-5" onSubmit={(event) => event.preventDefault()}>
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
                                    <button onClick={this.signUp} className="btn btn-primary" type="submit">
                                        Signup
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}