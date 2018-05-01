import React, {Component} from 'react'

import './battlerites.min.css'

export default class Card extends Component {
    constructor(props) {
        super(props)

    }

    dragCard = event => {
        event.dataTransfer.setData("card-build", event.target.id)
        event.target.style.opacity = "0.4"
    }

    dropCard = event => {
        event.preventDefault();
        let data = event.dataTransfer.getData("card-build")

        try {
            let droppable = document.getElementsByClassName('small-card-container')[0]
            document.getElementById(data).style.opacity = "1"
            document.getElementById(data).classList =
                "battlerite-card small-card col-xl-2 col-lg-4 mx-sm-0 col-sm-6 col-9"
            droppable.appendChild(document.getElementById(data))
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

    render() {
        return (
            <div className="ml-2 mr-4" onDrop={e => this.dropCard(e)} onDragOver={e => e.preventDefault()}>
                <div className="row flex-nowrap px-3 py-5 small-card-container">
                    {this.props.battlerites.map((data, key) => {
                        return <div className="battlerite-card small-card col-xl-2 col-lg-4 mx-sm-0 col-sm-6 col-9"
                                    data-card-type={data.type.toLowerCase()} key={key} id={`drag-${key}`}
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
            </div>
        )
    }
}