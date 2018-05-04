import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from "firebase";

import './builder.min.css'
import './battlerites.min.css'

export default class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            championName: this.props.match.params.champion,
            battlerites: [],
            selectedCards: [],
            buildId: this.props.match.params.build,
            emptyCards: false
        }
    }

    componentDidMount() {
        firebase.database().ref(`champions/${this.state.championName}/battlerites`)
            .once('value').then(data => {
            this.setState({battlerites: data.val()})
        })
        firebase.database().ref(`builds/${this.state.championName}/${this.state.buildId}`)
            .once('value').then(data => {
            if (data.val().cards) this.setState({selectedCards: data.val().cards, emptyCards: true})
        })
    }

    /** Calling to add fade effect when moving the card.
     *
     * @param event
     */
    dragCard = event => {
        event.dataTransfer.setData("card-build", event.target.id)
        event.target.style.opacity = "0.4"
    }

    /** Calling when adding cards to build boxes or retrieve to battlerites cards.
     *
     * @param card Using card id to catch the key to working with state.
     * @param functionality Catch where the card going.
     */
    buildCards = (card, functionality) => {
        let battlerites = this.state.battlerites
        let selectedCards = this.state.selectedCards
        let selectedCard = parseInt(document.getElementById(card).getAttribute('data-id'))
        switch (functionality) {
            case 'toBattlerites':
                selectedCards = selectedCards.filter(
                    card => {
                        return card.name !== battlerites[selectedCard].name
                    }
                )
                this.setState({selectedCards})
                break
            case 'toBuild':
                selectedCard = battlerites[selectedCard]
                selectedCards.push(selectedCard)
                this.setState({selectedCards})
                break
            default:
                //
                break
        }
    }

    /** Using for dropping the card and to retrieve to the battlerites.
     *
     * @param event Element event handler.
     * @param retrieve Element id from the contextmenu handler when clicking by right click on build cards.
     */
    dropCard = (event, retrieve) => {
        event.preventDefault();
        let data;
        retrieve ? data = retrieve : data = event.dataTransfer.getData("card-build")
        try {
            let droppable = document.getElementsByClassName('small-card-container')[0] //
            document.getElementById(data).style.opacity = "1"
            document.getElementById(data).classList = "battlerite-card small-card" //
            droppable.appendChild(document.getElementById(data))

            this.buildCards(data, 'toBattlerites')
        } catch (err) {
            console.log(err.message)
            let cardBuild = document.getElementsByClassName('card-build')
            for (let i = 0; i < cardBuild.length; i++) {
                cardBuild[i].style.opacity = "1"
            }
        }

        let cardDropped = document.getElementsByClassName('card-dropped')
        for (let i = 0; i < cardDropped.length; i++) {
            if (!cardDropped[i].hasChildNodes()) cardDropped[i].classList = 'builder-drop'
        }
    }

    /** Check if build boxes have more than 2 cards from the same spell.
     *
     * @param card Using card id to catch the key to working with state.
     * @returns {boolean}
     */
    checkCardMax = card => {
        let selectedCard = parseInt(document.getElementById(card).getAttribute('data-id'))
        let selectedCards = this.state.selectedCards
        let battlerites = this.state.battlerites
        try {
            let cards = selectedCards.filter(
                card => {
                    return card.keyword === battlerites[selectedCard].keyword
                }
            ).length > 1
            return !cards
        } catch (err) {
            console.log(err.message)
        }
    }

    /** Calling when adding card from battlerites to build boxes.
     *
     * @param event
     */
    dropCardBuilder = event => {
        event.preventDefault();
        let data = event.dataTransfer.getData("card-build")
        if (!this.checkCardMax(data)) {
            document.getElementById(data).style.opacity = "1"
            return this.checkCardMax(data)
        }
        try {
            document.getElementById(data).style.opacity = "1"
            document.getElementById(data).classList = "battlerite-card"
            event.target.appendChild(document.getElementById(data)) //
            event.target.classList.add('card-dropped') //

            this.buildCards(data, 'toBuild')
        } catch (err) {
            console.log(err.message)
            let cardBuild = document.getElementsByClassName('card-build')
            for (let i = 0; i < cardBuild.length; i++) {
                cardBuild[i].style.opacity = "1"
            }
        }
    }

    /** Calling when clicking on right click contextmenu to retrieve the card from build boxes to battlerites.
     *
     * @param event
     */
    retrieveCardHandler = event => {
        this.buildCards(event.target.id, 'toBattlerites')
        this.dropCard(event, event.target.id)
    }

    /** Save build to firebase.
     *
     */
    saveBuild = () => {
        firebase.database().ref(`builds/${this.state.championName}/${this.state.buildId}`).update({cards: this.state.selectedCards})
            .then(this.props.history.goBack())
    }

    goBack = ()=>{
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="aBuilds mt-3 mb-5 col-12">
                {this.state.battlerites.length !== 0 ?
                    <div className="d-flex flex-nowrap py-5 px-4 small-card-container" onDrop={e => this.dropCard(e)}
                         onDragOver={e => e.preventDefault()}>
                        {this.state.battlerites.map((data, key) => {
                            return <div className="battlerite-card small-card"
                                        data-id={key}
                                        onContextMenu={e => this.retrieveCardHandler(e)}
                                        data-card-type={data.type.toLowerCase()} key={key}
                                        id={`drag-${key}`}
                                        draggable="true" onDragStart={e => this.dragCard(e)}>
                                <div className="battlerite-title">{data.name}</div>
                                <div className="battlerite-skill">
                                    <div className="battle-skill-container">
                                        <img src={data.img} className="battlerite-skill-image" alt=""/>
                                    </div>
                                </div>
                                {data.keyword !== '' ?
                                    <div className="battlerite-hotkey">{data.keyword}</div> : ''}
                                {data.type !== '' ? <div
                                    className="battlerite-type">{data.type}</div> : ''}
                                <div className="battlerite-description">{data.description}</div>
                            </div>
                        })}
                    </div>
                    : ''}
                {this.state.selectedCards.length !== 0 && this.state.emptyCards ? <div className="builder-container">
                        {this.state.selectedCards.map((data, key) => {
                            return <div className="builder-drop card-dropped" key={key}>
                                <div className="battlerite-card small-card"
                                     data-id={data.name.toLowerCase().replace(/\s/g, '')}
                                     onDrop={e => this.dropCardBuilder(e)}
                                     onDragOver={e => e.preventDefault()}
                                     onContextMenu={e => this.retrieveCardHandler(e)}
                                     data-card-type={data.type.toLowerCase()}
                                     id={`drag-${data.name.toLowerCase().replace(/\s/g, '')}`}
                                     draggable="true" onDragStart={e => this.dragCard(e)}>
                                    <div className="battlerite-title">{data.name}</div>
                                    <div className="battlerite-skill">
                                        <div className="battle-skill-container">
                                            <img src={data.img} className="battlerite-skill-image" alt=""/>
                                        </div>
                                    </div>
                                    {data.keyword !== '' ?
                                        <div className="battlerite-hotkey">{data.keyword}</div> : ''}
                                    {data.type !== '' ? <div
                                        className="battlerite-type">{data.type}</div> : ''}
                                    <div className="battlerite-description">{data.description}</div>
                                </div>
                            </div>
                        })}
                    </div> :
                    <div className="builder-container">
                        {[1, 2, 3, 4, 5].map((data, key) => {
                            return <div className="builder-drop" key={key} onDrop={e => this.dropCardBuilder(e)}
                                        onDragOver={e => e.preventDefault()}/>
                        })}
                    </div>}
                {this.state.emptyCards ?
                    <button className="btn btn-light mt-4 px-3"
                            onClick={this.goBack}>Back
                    </button> :
                    <button className="btn btn-light mt-4 px-3"
                            disabled={this.state.selectedCards.length !== 5}
                            onClick={this.saveBuild}>Save
                    </button>}
            </div>
        )
    }
}