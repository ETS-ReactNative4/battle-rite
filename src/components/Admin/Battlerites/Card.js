import React, {Component} from 'react'

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
                        return <div
                            className="battlerite-card col-lg-4 mx-sm-0 col-sm-6 col-9 col-xl-3 mb-5" key={key}
                            data-card-type={data.type.toLowerCase()}>
                            <div className="battlerite-title">{data.name}</div>
                            <div className="battlerite-skill">
                                <div className="battle-skill-container">
                                    <img src={data.img} className="battlerite-skill-image" alt=""/>
                                </div>
                            </div>
                            {data.keyword !== '' ?
                                <div className="battlerite-hotkey">{data.keyword}</div> : ''}
                            {data.type !== '' ? <div
                                className={`battlerite-type ${data.type.toLowerCase()}`}>{data.type}</div> : ''}
                            <div className="battlerite-description">{data.description}</div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}