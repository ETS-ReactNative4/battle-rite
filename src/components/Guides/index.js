import React, {Component} from 'react'
import {Link} from 'react-router-dom'

// CSS
import './Guides.min.css'
import * as firebase from "firebase";

export default class Guides extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: this.props.theme,
            search: '',
            type: '',
            admin: this.props.admin
        }
    }

    componentDidMount() {
        firebase.database().ref(`champions`)
            .once('value').then(data => {
            this.setState({champions: Object.values(data.val())})
        })
    }

    render() {
        let champions = []
        if (this.state.champions !== undefined) {
            champions = this.state.champions.filter(
                champion => {
                    return champion.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 &&
                        champion.type.indexOf(this.state.type) !== -1
                }
            )
        }
        return (
            <div className={`${!this.state.admin ? 'main-content' : ''} guide`}>
                <div className="container">
                    <div className="row">
                        {!this.state.admin ?
                            <div className="col-12 mb-2">
                                <h3 className="text-uppercase">Builds & Guides</h3>
                            </div>
                            : ''}
                        <div className="col-12">
                            <div className="row mb-4 mt-3">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" value={this.state.search}
                                               onChange={e => this.setState({search: e.target.value})}
                                               className="form-control bg-dark rounded-0 text-light form-control-lg"
                                               placeholder="SEARCH YOUR CHAMPION"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-sm-right text-center">
                                    <div className="btn-group btn-group-toggle px-2" data-toggle="buttons">
                                        <label className="btn btn-outline-light btn-lg active" onClick={() => {
                                            this.setState({type: ''})
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">All</span>
                                        </label>
                                        <label className="btn btn-outline-light btn-lg" onClick={() => {
                                            this.setState({type: 'melee'})
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">Melee</span>
                                        </label>
                                        <label className="btn btn-outline-light btn-lg" onClick={() => {
                                            this.setState({type: 'ranged'})
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">Ranged</span>
                                        </label>
                                        <label className="btn btn-outline-light btn-lg" onClick={() => {
                                            this.setState({type: 'support'})
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">Support</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {champions !== undefined ? champions.map((data, index) => {
                                return <Link className="guide__container"
                                             to={`${this.state.admin === undefined ? '/champions' : this.state.admin.path}/${data.name.toLowerCase().replace(/\s/g, '')}`}
                                             key={index}>
                                    <div className="guide__box">
                                        <div className="guide__items"
                                             style={{backgroundImage: `url('${data.icon}')`}}>
                                            <span className="guide__type">{data.type}</span>
                                            <h4 className="guide__name">{data.name}</h4>
                                        </div>
                                    </div>
                                </Link>
                            }) : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}