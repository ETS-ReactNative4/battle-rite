import React, {Component} from 'react'

import BattleriteCard from '../../../images/battlerite-card.svg'
import AbilityBorder from '../../../images/Ability_Border_Black.png'
import './builds.min.css'

export default class Card extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.battlerites.map((data, key) => {
                        return <div className="col-xl-3 col-lg-4 mx-sm-0 col-sm-6 col-9 mb-3 mx-auto" key={key}>
                            <div className="battlerite-card">
                                <div className="battlerite-title">{data.name}</div>
                                <div className="battlerite-skill">
                                    <div className="battle-skill-container">
                                        <img src={AbilityBorder}
                                             className={`battlerite-skill-border ${data.type.toLowerCase()}`} alt=""/>
                                        <img src={data.img} className="battlerite-skill-image" alt=""/>
                                    </div>
                                </div>
                                <div className="battlerite-hotkey">{data.keyword}</div>
                                {data.type !== '' ? <div
                                    className={`battlerite-type ${data.type.toLowerCase()}`}>{data.type}</div> : ''}
                                <div className="battlerite-description">{data.description}</div>
                                <img src={BattleriteCard} className="battlerite-card-image" alt="Battlerite card"/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}