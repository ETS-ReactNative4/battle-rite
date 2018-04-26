import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

import BattleriteCard from './Card'
import './builder.min.css'
import * as firebase from "firebase";

export default class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            championName: this.props.match.params.champion,
            battlerites: [],
        }
    }

    componentDidMount() {
        firebase.database().ref(`champions/${this.state.championName}/battlerites`)
            .once('value').then(data => {
            this.setState({battlerites: data.val()})
        })
    }

    render() {
        return (
            <div className="aBuilds mt-3 col-12 col-md-9 col-xl-10">
                {this.state.battlerites.length !== 0 ? <BattleriteCard battlerites={this.state.battlerites}/> : ''}
                {/*<div className="row mt-2">
                    <div className="col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label htmlFor="build-title">Build title</label>
                            <input type="text" className="form-control" id="build-title"/>
                        </div>
                    </div>
                </div>*/}
                <div className="builder-container">
                    {[1,2,3,4,5].map((data, key)=>{
                        return <div className="builder-drop" key={key}/>
                    })}
                </div>
            </div>
        )
    }
}