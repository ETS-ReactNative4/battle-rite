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

    dropCard = event => {
        event.preventDefault();
        let data = event.dataTransfer.getData("card-build")
        try {
            document.getElementById(data).style.opacity = "1"
            document.getElementById(data).classList = "battlerite-card"
            event.target.appendChild(document.getElementById(data))
            event.target.classList.add('card-dropped')
        } catch (err) {
            console.log(err.message)
            let cardBuild = document.getElementsByClassName('card-build')
            for (let i = 0; i < cardBuild.length; i++) {
                cardBuild[i].style.opacity = "1"
            }
        }
    }

    render() {
        return (
            <div className="aBuilds mt-3 mb-5 col-12">
                {this.state.battlerites.length !== 0 ? <BattleriteCard battlerites={this.state.battlerites}/> : ''}
                <div className="builder-container">
                    <div className="builder-drop" onDrop={e => this.dropCard(e)} onDragOver={e => e.preventDefault()}/>
                    <div className="builder-drop" onDrop={e => this.dropCard(e)} onDragOver={e => e.preventDefault()}/>
                    <div className="builder-drop" onDrop={e => this.dropCard(e)} onDragOver={e => e.preventDefault()}/>
                    <div className="builder-drop" onDrop={e => this.dropCard(e)} onDragOver={e => e.preventDefault()}/>
                    <div className="builder-drop" onDrop={e => this.dropCard(e)} onDragOver={e => e.preventDefault()}/>
                </div>
            </div>
        )
    }
}