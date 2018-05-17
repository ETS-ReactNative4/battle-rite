import React, {Component} from 'react'

export default class Quickmatch extends Component {
    constructor(props){
        super(props)
        this.state = {
            q2v2:{
                win: this.props.q2v2.win,
                lose: this.props.q2v2.lose,
                winRate: this.props.q2v2.winRate,
            },
            q3vs3:{
                win: this.props.q3vs3.win,
                lose: this.props.q3vs3.lose,
                winRate: this.props.q3vs3.winRate,
            },
            qBrawl:{
                win: this.props.qBrawl.win,
                lose: this.props.qBrawl.lose,
                winRate: this.props.qBrawl.winRate,
            },
        }
    }
    render() {
        return (
            <div className="player__queue-stats">
                <h5 className="player__queue-stats--title">Quickmatch</h5>
                <table className="league__stats">
                    <thead>
                    <tr>
                        <th>Group</th>
                        <th>W</th>
                        <th>L</th>
                        <th>P</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="font-weight-normal">2v2</td>
                        <td>{this.state.q2v2.win}</td>
                        <td>{this.state.q2v2.lose}</td>
                        <td className={`${this.state.q2v2.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                            {this.state.q2v2.winRate}%
                        </td>
                    </tr>
                    <tr>
                        <td className="font-weight-normal">3v3</td>
                        <td>{this.state.q3vs3.win}</td>
                        <td>{this.state.q3vs3.lose}</td>
                        <td className={`${this.state.q3vs3.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                            {this.state.q3vs3.winRate}%
                        </td>
                    </tr>
                    <tr>
                        <td className="font-weight-normal">Brawl</td>
                        <td>{this.state.qBrawl.win}</td>
                        <td>{this.state.qBrawl.lose}</td>
                        <td className={`${this.state.qBrawl.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                            {this.state.qBrawl.winRate}%
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}