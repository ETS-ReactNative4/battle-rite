import React, {Component} from 'react'

export default class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            picture: this.props.picture,
            name: this.props.name,
            title: this.props.title,
            level: this.props.level,
            totalMatches: this.props.totalMatches,
            wins: this.props.wins,
            lose: this.props.lose,
            winRate: this.props.winRate,
        }
    }
    render() {
        return (
            <div>
                <div className="d-flex">
                    <img className="player__img"
                         src={this.state.picture}
                         alt={this.state.name}/>
                    <p className="player__name">
                        {this.state.name}
                        <br/>
                        <small>{this.state.title}</small>
                    </p>
                    <p className="player__level">{this.state.level}</p>
                </div>
               {/* <ul className="player__details">
                    <li> Matches played
                        <span>{this.state.totalMatches}</span>
                    </li>
                    <li> Wins - Losses
                        <span>{this.state.wins} - {this.state.lose}</span>
                    </li>
                    <li>
                        Win rate
                        <span>{this.state.winRate}%</span>
                    </li>
                </ul>*/}
            </div>
        )
    }
}