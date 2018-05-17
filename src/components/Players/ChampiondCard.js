import React, {Component} from 'react'

export default class ChampionCard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="row">
                {this.props.champions.map((data, key) => {
                    return <div className="col-6" key={key}>
                        <div className="card player__champion-card">
                            <div className="card-body d-flex">
                                <div className="progress-custom progress"
                                     data-percentage={data.winRate > 0 ? Math.ceil(data.winRate / 10) * 10 : 0}>
                                            <span className="progress-left">
                                                <span className="progress-bar"/>
                                            </span>
                                    <span className="progress-right">
                                                <span className="progress-bar"/>
                                            </span>
                                    <div className="progress-value">
                                        <img src={data.img} alt={data.name}/>
                                    </div>
                                    <div className="champion-card__level">
                                        {data.level}
                                    </div>
                                </div>
                                <div className="champion-card__info">
                                    <p className="champion-card__name">{data.name}</p>
                                    <div className="d-flex">
                                        <div>
                                            <p>Wins <strong>{data.win}</strong></p>
                                            <p>Loses <strong>{data.lose}</strong></p>
                                            <p>Win rate <strong>{data.winRate}%</strong></p>
                                        </div>
                                        <div className="ml-3">
                                            <p>
                                                Time played <strong title={`Played ${data.timePlayed} Hour`}>
                                                    {data.timePlayed}
                                                    <small> h</small>
                                                </strong>
                                            </p>
                                            <p>Exp <strong>{data.lose}</strong></p>
                                            <p>Win rate <strong>{data.winRate}%</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}