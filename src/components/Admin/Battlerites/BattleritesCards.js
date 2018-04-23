import React, {Component} from 'react'

import Card from './Card'
import * as firebase from "firebase";

export default class BattleritesCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            champion:
            this.props.match !== undefined ?
                this.props.match.params.champion :
                this.props.champion,
            battlerites: []
        }
    }

    componentDidMount() {
        let champion = this.state.champion.toLowerCase().replace(/\s/g, '')
        firebase.database().ref(`champions/${champion}/battlerites`)
            .once('value').then(data => {
            this.setState({battlerites: data.val()})
        })
    }

    render() {
        return (
            <div className="aBattlerite col-12 col-md-9 col-xl-10 py-4">
                {this.state.battlerites.length !== 0 ? <Card battlerites={this.state.battlerites}/> : ''}
            </div>
        )
    }
}