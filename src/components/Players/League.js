import React, {Component} from 'react'

export default class League extends Component {
    constructor(props){
        super(props)
        this.state = {
            l2v2:{
                win: this.props.l2v2.win,
                lose: this.props.l2v2.lose,
                winRate: this.props.l2v2.winRate,
            },
            l3vs3:{
                win: this.props.l3vs3.win,
                lose: this.props.l3vs3.lose,
                winRate: this.props.l3vs3.winRate,
            },
        }
    }
    render() {
        return (
            <div className="player__queue-stats">
                <h5 className="player__queue-stats--title">League</h5>
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
                        <td>{this.state.l2v2.win}</td>
                        <td>{this.state.l2v2.lose}</td>
                        <td className={`${this.state.l2v2.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                            {this.state.l2v2.winRate}%
                        </td>
                    </tr>
                    <tr>
                        <td className="font-weight-normal">3v3</td>
                        <td>{this.state.l3vs3.win}</td>
                        <td>{this.state.l3vs3.lose}</td>
                        <td className={`${this.state.l3vs3.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                            {this.state.l3vs3.winRate}%
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}