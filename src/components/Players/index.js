import React, {Component} from 'react'

import brAPI from '../../requests/battlerite'
import axios from "axios";

import './players.min.css'
import './circle-progressbar.min.css'

// champions background
import ezmo from '../../images/chmpaions/ezmo.jpg'

const titlesMap = {
    501: 'Alpha Tester',
    502: 'Beta Tester',
    503: 'Founder',
    504: 'Contender',
    505: 'Spirit Catcher',
    506: 'The Filmmaker',
    507: 'Developer',
}

const backgroundsMap = {
    ezmo: ezmo,
}

const championsMap = state => {
    return [
        {
            name: 'Lucie',
            img: 'https://battlerite-stats.com/uploads/champions/1.png',
            win: state["12001"] ? state["12001"] : 0,
            lose: state["13001"] ? state["13001"] : 0,
            level: state["40001"] ? state["40001"] : 0,
            winRate: state["12001"] ? round1dec(state["12001"], state["13001"]) : 0,
        },
        {
            name: 'Sirius',
            img: 'https://battlerite-stats.com/uploads/champions/2.png',
            win: state["12002"] ? state["12002"] : 0,
            lose: state["13002"] ? state["13002"] : 0,
            level: state["40002"] ? state["40002"] : 0,
            winRate: state["12002"] ? round1dec(state["12002"], state["13002"]) : 0,
        },
        {
            name: 'Iva',
            img: 'https://battlerite-stats.com/uploads/champions/3.png',
            win: state["12003"] ? state["12003"] : 0,
            lose: state["13003"] ? state["13003"] : 0,
            level: state["40003"] ? state["40003"] : 0,
            winRate: state["12003"] ? round1dec(state["12003"], state["13003"]) : 0,
        },
        {
            name: 'Jade',
            img: 'https://battlerite-stats.com/uploads/champions/4.png',
            win: state["12004"] ? state["12004"] : 0,
            lose: state["13004"] ? state["13004"] : 0,
            level: state["40004"] ? state["40004"] : 0,
            winRate: state["12004"] ? round1dec(state["12004"], state["13004"]) : 0,
        },
        {
            name: 'Ruh Kaan',
            img: 'https://battlerite-stats.com/uploads/champions/5.png',
            win: state["12005"] ? state["12005"] : 0,
            lose: state["13005"] ? state["13005"] : 0,
            level: state["40005"] ? state["40005"] : 0,
            winRate: state["12005"] ? round1dec(state["12005"], state["13005"]) : 0,
        },
        {
            name: 'Oldur',
            img: 'https://battlerite-stats.com/uploads/champions/6.png',
            win: state["12006"] ? state["12006"] : 0,
            lose: state["13006"] ? state["13006"] : 0,
            level: state["40006"] ? state["40006"] : 0,
            winRate: state["12006"] ? round1dec(state["12006"], state["13006"]) : 0,
        },
        {
            name: 'Ashka',
            img: 'https://battlerite-stats.com/uploads/champions/7.png',
            win: state["12007"] ? state["12007"] : 0,
            lose: state["13007"] ? state["13007"] : 0,
            level: state["40007"] ? state["40007"] : 0,
            winRate: state["12007"] ? round1dec(state["12007"], state["13007"]) : 0,
        },
        {
            name: 'Varesh',
            img: 'https://battlerite-stats.com/uploads/champions/8.png',
            win: state["12008"] ? state["12008"] : 0,
            lose: state["13008"] ? state["13008"] : 0,
            level: state["40008"] ? state["40008"] : 0,
            winRate: state["12008"] ? round1dec(state["12008"], state["13008"]) : 0,
        },
        {
            name: 'Pearl',
            img: 'https://battlerite-stats.com/uploads/champions/9.png',
            win: state["12009"] ? state["12009"] : 0,
            lose: state["13009"] ? state["13009"] : 0,
            level: state["40009"] ? state["40009"] : 0,
            winRate: state["12009"] ? round1dec(state["12009"], state["13009"]) : 0,
        },
        {
            name: 'Taya',
            img: 'https://battlerite-stats.com/uploads/champions/10.png',
            win: state["12010"] ? state["12010"] : 0,
            lose: state["13010"] ? state["13010"] : 0,
            level: state["40010"] ? state["40010"] : 0,
            winRate: state["12010"] ? round1dec(state["12010"], state["13010"]) : 0,
        },
        {
            name: 'Poloma',
            img: 'https://battlerite-stats.com/uploads/champions/11.png',
            win: state["12011"] ? state["12011"] : 0,
            lose: state["13011"] ? state["13011"] : 0,
            level: state["40011"] ? state["40011"] : 0,
            winRate: state["12011"] ? round1dec(state["12011"], state["13011"]) : 0,
        },
        {
            name: 'croak',
            img: 'https://battlerite-stats.com/uploads/champions/12.png',
            win: state["12012"] ? state["12012"] : 0,
            lose: state["13012"] ? state["13012"] : 0,
            level: state["40012"] ? state["40012"] : 0,
            winRate: state["12012"] ? round1dec(state["12012"], state["13012"]) : 0,
        },
        {
            name: 'Freya',
            img: 'https://battlerite-stats.com/uploads/champions/13.png',
            win: state["12013"] ? state["12013"] : 0,
            lose: state["13013"] ? state["13013"] : 0,
            level: state["40013"] ? state["40013"] : 0,
            winRate: state["12013"] ? round1dec(state["12013"], state["13013"]) : 0,
        },
        {
            name: 'Jumong',
            img: 'https://battlerite-stats.com/uploads/champions/14.png',
            win: state["12014"] ? state["12014"] : 0,
            lose: state["13014"] ? state["13014"] : 0,
            level: state["40014"] ? state["40014"] : 0,
            winRate: state["12014"] ? round1dec(state["12014"], state["13014"]) : 0,
        },
        {
            name: 'Shifu',
            img: 'https://battlerite-stats.com/uploads/champions/15.png',
            win: state["12015"] ? state["12015"] : 0,
            lose: state["13015"] ? state["13015"] : 0,
            level: state["40015"] ? state["40015"] : 0,
            winRate: state["12015"] ? round1dec(state["12015"], state["13015"]) : 0,
        },
        {
            name: 'Ezmo',
            img: 'https://battlerite-stats.com/uploads/champions/16.png',
            win: state["12016"] ? state["12016"] : 0,
            lose: state["13016"] ? state["13016"] : 0,
            level: state["40016"] ? state["40016"] : 0,
            winRate: state["12016"] ? round1dec(state["12016"], state["13016"]) : 0,
        },
        {
            name: 'Bakko',
            img: 'https://battlerite-stats.com/uploads/champions/17.png',
            win: state["12017"] ? state["12017"] : 0,
            lose: state["13017"] ? state["13017"] : 0,
            level: state["40017"] ? state["40017"] : 0,
            winRate: state["12017"] ? round1dec(state["12017"], state["13017"]) : 0,
        },
        {
            name: 'Rook',
            img: 'https://battlerite-stats.com/uploads/champions/18.png',
            win: state["12018"] ? state["12018"] : 0,
            lose: state["13018"] ? state["13018"] : 0,
            level: state["40018"] ? state["40018"] : 0,
            winRate: state["12018"] ? round1dec(state["12018"], state["13018"]) : 0,
        },
        {
            name: 'Pestilus',
            img: 'https://battlerite-stats.com/uploads/champions/19.png',
            win: state["12019"] ? state["12019"] : 0,
            lose: state["13019"] ? state["13019"] : 0,
            level: state["40019"] ? state["40019"] : 0,
            winRate: state["12019"] ? round1dec(state["12019"], state["13019"]) : 0,
        },
        {
            name: 'Destiny',
            img: 'https://battlerite-stats.com/uploads/champions/20.png',
            win: state["12020"] ? state["12020"] : 0,
            lose: state["13020"] ? state["13020"] : 0,
            level: state["40020"] ? state["40020"] : 0,
            winRate: state["12020"] ? round1dec(state["12020"], state["13020"]) : 0,
        },
        {
            name: 'Raigon',
            img: 'https://battlerite-stats.com/uploads/champions/21.png',
            win: state["12021"] ? state["12021"] : 0,
            lose: state["13021"] ? state["13021"] : 0,
            level: state["40021"] ? state["40021"] : 0,
            winRate: state["12021"] ? round1dec(state["12021"], state["13021"]) : 0,
        },

        {
            name: 'Blossom',
            img: 'https://battlerite-stats.com/uploads/champions/22.png',
            win: state["12022"] ? state["12022"] : 0,
            lose: state["13022"] ? state["13022"] : 0,
            level: state["40022"] ? state["40022"] : 0,
            winRate: state["12022"] ? round1dec(state["12022"], state["13022"]) : 0,
        },
        {
            name: 'Thorn',
            img: 'https://battlerite-stats.com/uploads/champions/25.png',
            win: state["12025"] ? state["12025"] : 0,
            lose: state["13025"] ? state["13025"] : 0,
            level: state["40025"] ? state["40025"] : 0,
            winRate: state["12025"] ? round1dec(state["12025"], state["13025"]) : 0,
        },
        {
            name: 'Zander',
            img: 'https://battlerite-stats.com/uploads/champions/35.png',
            win: state["12035"] ? state["12035"] : 0,
            lose: state["13035"] ? state["13035"] : 0,
            level: state["40035"] ? state["40035"] : 0,
            winRate: state["12035"] ? round1dec(state["12035"], state["13035"]) : 0,
        },
        {
            name: 'Ulric',
            img: 'https://battlerite-stats.com/uploads/champions/39.png',
            win: state["12039"] ? state["12039"] : 0,
            lose: state["13039"] ? state["13039"] : 0,
            level: state["40039"] ? state["40039"] : 0,
            winRate: state["12039"] ? round1dec(state["12039"], state["13039"]) : 0,
        },
        {
            name: 'Alysia',
            img: 'https://battlerite-stats.com/uploads/champions/41.png',
            win: state["12041"] ? state["12041"] : 0,
            lose: state["13041"] ? state["13041"] : 0,
            level: state["40041"] ? state["40041"] : 0,
            winRate: state["12041"] ? round1dec(state["12041"], state["13041"]) : 0,
        },
        {
            name: 'Jamila',
            img: 'https://battlerite-stats.com/uploads/champions/43.png',
            win: state["12043"] ? state["12043"] : 0,
            lose: state["13043"] ? state["13043"] : 0,
            level: state["40043"] ? state["40043"] : 0,
            winRate: state["12043"] ? round1dec(state["12043"], state["13043"]) : 0,
        },
    ]
}

/**
 *
 * @param num Picture number in stats
 * @returns {string} Picture URL
 */
const playerPicture = num => {
    return `https://battlerite-stats.com/uploads/avatars/Drop_${num.toString().split("390")[1]}.png`
}

/** Round to 1 decimal
 *
 * @param win {number}
 * @param lose {number}
 * @returns {number} Win rate percentage
 */
const round1dec = (win, lose) => {
    return Math.round((win * 100) / (win + lose) * 10) / 10
}

/** Return a clean variables
 *
 * @param win {number}
 * @param lose {number}
 * @returns {{win: number, lose: number, winRate: number}}
 */
const playerState = (win, lose) => {
    return {
        win: win ? win : 0,
        lose: lose ? lose : 0,
        winRate: win > 0 ? round1dec(win, lose) : 0
    }
}


export default class Players extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerId: this.props.match.params.id,
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            baseURL: `${brAPI.url}/players/${this.state.playerId}`,
            headers: {
                Authorization: brAPI.header.authorization,
                Accept: brAPI.header.accept,
            }
        })
            .then(res => {
                let player = {}
                player.stats = res.data.data.attributes.stats

                // Declare attributes
                player.name = res.data.data.attributes.name
                // player.picture = playerPicture(res.data.data.attributes.picture)
                player.picture = playerPicture(player.stats["picture"])
                player.title = titlesMap[player.stats["title"]]
                player.totalMatches = player.stats["2"] + player.stats["3"]
                player.wins = player.stats["2"]
                player.lose = player.stats["3"]
                player.winRate = player.wins !== 0 ? round1dec(player.stats["2"], player.stats["3"]) : 0
                player.level = player.stats["26"]
                player.league2v2 = playerState(player.stats["14"], player.stats["15"])
                player.league3v3 = playerState(player.stats["16"], player.stats["17"])
                player.quickmatch2v2 = playerState(player.stats["10"], player.stats["11"])
                player.quickmatch3v3 = playerState(player.stats["12"], player.stats["13"])
                player.quickmatchBrawl = playerState(player.stats["18"], player.stats["19"])
                player.champions = championsMap(player.stats)

                this.setState({player: player})
            })
            .catch(error => console.log(error.message))
    }

    render() {
        return (
            <div className="main-content players mt-5">
                {this.state.player ? <div className="container">
                    <div className="col-12">
                        <div className="player__container">
                            <img src={backgroundsMap['ezmo']} alt="" className="player__container--image"/>
                            <div className="player__container--content">
                                <div className="d-flex">
                                    <img className="player__img"
                                         src={this.state.player.picture}
                                         alt={this.state.player.name}/>
                                    <p className="player__name">
                                        {this.state.player.name}
                                        <br/>
                                        <small>{this.state.player.title}</small>
                                    </p>
                                    <p className="player__level">{this.state.player.level}</p>
                                </div>
                                <ul className="player__details">
                                    <li> Matches played
                                        <span>{this.state.player.totalMatches}</span>
                                    </li>
                                    <li> Wins - Losses
                                        <span>{this.state.player.wins} - {this.state.player.lose}</span>
                                    </li>
                                    <li>
                                        Win rate
                                        <span>{this.state.player.winRate}%</span>

                                    </li>
                                </ul>
                                <div className="d-flex">
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
                                                <td>{this.state.player.league2v2.win}</td>
                                                <td>{this.state.player.league2v2.lose}</td>
                                                <td className={`${this.state.player.league2v2.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                                                    {this.state.player.league2v2.winRate}%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-normal">3v3</td>
                                                <td>{this.state.player.league3v3.win}</td>
                                                <td>{this.state.player.league3v3.lose}</td>
                                                <td className={`${this.state.player.league3v3.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                                                    {this.state.player.league3v3.winRate}%
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
                                                <td>{this.state.player.quickmatch2v2.win}</td>
                                                <td>{this.state.player.quickmatch2v2.lose}</td>
                                                <td className={`${this.state.player.quickmatch2v2.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                                                    {this.state.player.quickmatch2v2.winRate}%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-normal">3v3</td>
                                                <td>{this.state.player.quickmatch3v3.win}</td>
                                                <td>{this.state.player.quickmatch3v3.lose}</td>
                                                <td className={`${this.state.player.quickmatch3v3.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                                                    {this.state.player.quickmatch3v3.winRate}%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-normal">Brawl</td>
                                                <td>{this.state.player.quickmatchBrawl.win}</td>
                                                <td>{this.state.player.quickmatchBrawl.lose}</td>
                                                <td className={`${this.state.player.quickmatchBrawl.winRate > 49.9 ? 'text-success' : 'text-danger'}`}>
                                                    {this.state.player.quickmatchBrawl.winRate}%
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            {this.state.player.champions.map((data, key) => {
                                return <div className="col-4" key={key}>
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
                                                <p>Wins <strong>{data.win}</strong></p>
                                                <p>Loses <strong>{data.lose}</strong></p>
                                                <p>Win rate <strong>{data.winRate}%</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div> : ''}
            </div>
        )
    }
}