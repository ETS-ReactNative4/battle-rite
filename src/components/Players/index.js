import React, {Component} from 'react'
import Info from './Info'
import ChampionCard from './ChampiondCard'
import Quickmatch from './Quickmatch'
import League from './League'

import brAPI from '../../requests/battlerite'
import axios from "axios";

import './players.min.css'
import './circle-progressbar.min.css'

import stackables from '../../battlerite-assets/mappings/45166/stackables'

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

/**
 *
 * @param stats to get stats like: win, lose and level
 * @returns {Array} Array of champions
 */
const championsMap = stats => {
    let champions = [
        {'id': '01', 'type': 'support'},
        {'id': '02', 'type': 'support'},
        {'id': '03', 'type': 'ranged'},
        {'id': '04', 'type': 'ranged'},
        {'id': '05', 'type': 'melee'},
        {'id': '06', 'type': 'support'},
        {'id': '07', 'type': 'ranged'},
        {'id': '08', 'type': 'ranged'},
        {'id': '09', 'type': 'support'},
        {'id': '10', 'type': 'ranged'},
        {'id': '11', 'type': 'support'},
        {'id': '12', 'type': 'melee'},
        {'id': '13', 'type': 'melee'},
        {'id': '14', 'type': 'ranged'},
        {'id': '15', 'type': 'melee'},
        {'id': '16', 'type': 'ranged'},
        {'id': '17', 'type': 'melee'},
        {'id': '18', 'type': 'melee'},
        {'id': '19', 'type': 'support'},
        {'id': '20', 'type': 'ranged'},
        {'id': '21', 'type': 'melee'},
        {'id': '22', 'type': 'support'},
        {'id': '25', 'type': 'melee'},
        {'id': '35', 'type': 'support'},
        {'id': '39', 'type': 'support'},
        {'id': '41', 'type': 'ranged'},
        {'id': '43', 'type': 'melee'},
    ]
    let championsFiltered = []
    let obj, win, lose
    champions.map(champion => {
        obj = stackables.Mappings.filter(obj => {
            return obj.StackableId === parseInt(`100${champion.id}`)
        })[0]
        win = stats[`120${champion.id}`] ? stats[`120${champion.id}`] : 0
        lose = stats[`130${champion.id}`] ? stats[`130${champion.id}`] : 0
        championsFiltered.push({
            name: obj.EnglishLocalizedName,
            img: `../../media/mappings/assets/${obj.Icon}.jpg`,
            win,
            lose,
            type: champion.type,
            timePlayed: stats[`160${champion.id}`] ? Math.round((stats[`160${champion.id}`] / 60) / 60 * 10) / 10 : 0,
            level: stats[`400${champion.id}`] ? stats[`400${champion.id}`] : 0,
            winRate: win > 0 ? round1dec(win, lose) : 0,
        })
    })
    championsFiltered = championsFiltered.sort((a, b) => {
        return b.level - a.level
    })
    return championsFiltered
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
            search: '',
            type: '',
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
        let champions = []
        if (this.state.player !== undefined) {
            champions = this.state.player.champions.filter(
                champion => {
                    return champion.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 &&
                        champion.type.indexOf(this.state.type) !== -1
                }
            )
        }
        return (
            <div className="main-content players mt-5">
                {this.state.player ? <div className="container">
                    <div className="col-12">
                        <div className="player__container">
                            <img src={backgroundsMap['ezmo']} alt="" className="player__container--image"/>
                            <div className="player__container--content">
                                <Info picture={this.state.player.picture} name={this.state.player.name}
                                      title={this.state.player.title} level={this.state.player.level}
                                      totalMatches={this.state.player.totalMatches} wins={this.state.player.wins}
                                      lose={this.state.player.lose} winRate={this.state.player.winRate}/>
                                <div className="d-flex">
                                    <League l2v2={this.state.player.league2v2} l3vs3={this.state.player.league3v3}/>
                                    <Quickmatch q2v2={this.state.player.quickmatch2v2}
                                                q3vs3={this.state.player.quickmatch3v3}
                                                qBrawl={this.state.player.quickmatchBrawl}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row my-4">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" value={this.state.search}
                                           onChange={e => this.setState({search: e.target.value})}
                                           className="form-control bg-dark text-light rounded-0 form-control-lg"
                                           placeholder="SEARCH YOUR CHAMPION"/>
                                </div>
                            </div>
                            <div className="col-sm-6 text-sm-right text-center">
                                <div className="btn-group btn-group-toggle px-2" data-toggle="buttons">
                                    <label className="btn btn-outline-light btn-lg active" onClick={() => {
                                        this.setState({type: ''})
                                    }}>
                                        <input type="radio" name="champion-type"/>
                                        <span className="h6 text-uppercase">All</span>
                                    </label>
                                    <label className="btn btn-outline-light btn-lg" onClick={() => {
                                        this.setState({type: 'melee'})
                                    }}>
                                        <input type="radio" name="champion-type"/>
                                        <span className="h6 text-uppercase">Melee</span>
                                    </label>
                                    <label className="btn btn-outline-light btn-lg" onClick={() => {
                                        this.setState({type: 'ranged'})
                                    }}>
                                        <input type="radio" name="champion-type"/>
                                        <span className="h6 text-uppercase">Ranged</span>
                                    </label>
                                    <label className="btn btn-outline-light btn-lg" onClick={() => {
                                        this.setState({type: 'support'})
                                    }}>
                                        <input type="radio" name="champion-type"/>
                                        <span className="h6 text-uppercase">Support</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <ChampionCard champions={champions}/>
                    </div>
                </div> : ''}
            </div>
        )
    }
}