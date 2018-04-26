import React, {Component} from 'react'

import BattleriteCard from '../../../images/battlerite-card.png'
import AbilityBorder from '../../../images/Ability_Border_Black.png'
import './battlerites.min.css'

export default class Card extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.props.battlerites.map((data, key) => {
                        return <div className="col-lg-4 mx-sm-0 col-sm-6 col-9 col-xl-3 mb-5" key={key}>
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
                                <img src={BattleriteCard} className="w-100" alt="Battlerite card"/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}