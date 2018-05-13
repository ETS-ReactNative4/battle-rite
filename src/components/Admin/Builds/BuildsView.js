import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from 'firebase'

import './builds-view.min.css'

export default class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            championName: this.props.match.params.champion,
            name: '',
            description: '',
            builds: [],
        }
    }

    componentDidMount() {
        this.setState({user: firebase.auth().currentUser})
        firebase.database().ref(`builds/${this.state.championName}`)
            .once('value').then(data => {
            this.setState({builds: Object.values(data.val())})
        })
    }

    createBuild = () => {
        let key = firebase.database().ref('builds').push().key
        let updates = {}
        updates[`builds/${this.state.championName}/${key}`] = {
            id: key,
            name: this.state.name,
            description: this.state.description,
            author: this.state.user.uid
        }
        firebase.database().ref().update(updates).then(
            this.props.history.push(`/admin/builds/${this.state.championName}/${key}`)
        )
    }

    render() {
        return (
            <div className="main-content aBuilds mt-3 col-12">
                <div className="row mb-4">
                    <div className="col-12">
                        <button type="button" className="btn btn-light" data-toggle="modal"
                                data-target="#createBuildModal">
                            Create
                        </button>
                    </div>
                </div>

                <div className="modal fade text-dark" id="createBuildModal" tabIndex="-1" role="dialog"
                     aria-labelledby="createBuildModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="createBuildModalLabel">Create a new build</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="buildName">Name</label>
                                    <input type="text" className="form-control"
                                           onChange={e => this.setState({name: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="buildDescription">Description</label>
                                    <textarea className="form-control" rows="5"
                                              onChange={e => this.setState({description: e.target.value})}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.createBuild} disabled={this.state.name.length < 3}
                                        data-dismiss="modal"
                                        className="btn btn-dark">Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {this.state.builds.map((data, key) => {
                        return <div className="col-3" key={key}>
                            <Link to={`/admin/builds/${this.state.championName}/${data.id}`} className="build-card p-3">
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                                <div className="builds__spell-container">
                                    {data.cards.map((data, index)=>{
                                        return <div className="builds__skill-icons" key={index}>
                                            <img src={data.img} alt={data.name} className="w-100"/>
                                        </div>
                                    })}
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}