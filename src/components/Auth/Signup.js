import React, {Component} from 'react'
import axios from "axios"

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    signUp = () => {
        axios.post("http://localhost:3000/users/signup",
            {name: this.state.name, email: this.state.email, password: this.state.password}, {"Content-Type": "application/json"})
            .then(docs => this.props.history.push("/"))
            .catch(e => console.log(e.message))
    }

    render() {
        return (
            <div className="main-content signup">
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <form className="my-5" onSubmit={e => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" value={this.state.name}
                                           onChange={e => this.setState({name: e.target.value})}
                                           className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" value={this.state.email}
                                           onChange={e => this.setState({email: e.target.value})}
                                           className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" value={this.state.password}
                                           onChange={e => this.setState({password: e.target.value})}
                                           className="form-control" placeholder="Password"/>
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