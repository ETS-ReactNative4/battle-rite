import React, {Component} from 'react'
import Info from './Info'
import ChampionCard from './ChampiondCard'
import Quickmatch from './Quickmatch'
import League from './League'
import {Link} from 'react-router-dom'

import {timeConversion, checkValue, playerState, round1dec, playerPicture} from './services'

import brAPI from '../../requests/battlerite'
import axios from "axios"

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
    champions.map(champion => {
        let obj = stackables.Mappings.filter(obj => {
            return obj.StackableId === parseInt(`100${champion.id}`)
        })[0];
        let win = checkValue(stats[`120${champion.id}`]);
        let lose = checkValue(stats[`130${champion.id}`]);
        let ranked2v2wins = checkValue(stats[`170${champion.id}`]);
        let ranked2v2losses = checkValue(stats[`180${champion.id}`]);
        let ranked3v3wins = checkValue(stats[`190${champion.id}`]);
        let ranked3v3losses = checkValue(stats[`200${champion.id}`]);
        let unranked2v2wins = checkValue(stats[`210${champion.id}`]);
        let unranked2v2losses = checkValue(stats[`220${champion.id}`]);
        let unranked3v3wins = checkValue(stats[`230${champion.id}`]);
        let unranked3v3losses = checkValue(stats[`240${champion.id}`]);
        championsFiltered.push({
            id: parseInt(champion.id), //
            name: obj.EnglishLocalizedName,
            img: `../../media/mappings/assets/${obj.Icon}.jpg`, //
            win, //
            lose, //
            type: champion.type, //
            xp: checkValue(stats[`110${champion.id}`]), //
            kills: checkValue(stats[`140${champion.id}`]), //
            deaths: checkValue(stats[`150${champion.id}`]), //
            kdRatio: stats[`150${champion.id}`] ? round1dec(stats[`140${champion.id}`], stats[`150${champion.id}`]) : 0, //
            ranked2v2wins, //
            ranked2v2losses, //
            ranked3v3wins, //
            ranked3v3losses, //
            unranked2v2wins, //
            unranked2v2losses, //
            unranked3v3wins, //
            unranked3v3losses, //
            winRateRanked: (ranked2v2losses + ranked3v3losses) > 0 ? //
                round1dec((ranked2v2wins + ranked3v3wins), (ranked2v2losses + ranked3v3losses)) : 0, //
            winRateUnranked: (unranked2v2losses + unranked3v3losses) > 0 ?
                round1dec((unranked2v2wins + unranked3v3wins), (unranked2v2losses + unranked3v3losses)) : 0, //
            winRatebrawl: checkValue(stats[`260${champion.id}`]) > 0 ?
                round1dec(checkValue(stats[`250${champion.id}`]), checkValue(stats[`260${champion.id}`])) : 0, //
            brawlWins: checkValue(stats[`250${champion.id}`]), //
            brawlLosses: checkValue(stats[`260${champion.id}`]), //
            timePlayed: timeConversion(checkValue(stats[`160${champion.id}`])), //
            level: checkValue(stats[`400${champion.id}`]), //
            winRate: win > 0 ? round1dec(win, lose) : 0, //
            winPerTimePlayed: stats[`160${champion.id}`] ?
                Math.floor(win / (checkValue(stats[`160${champion.id}`])) * 10000) : 0, //
            winPerTimePlayed2: checkValue(stats[`160${champion.id}`]), //
        })
    })
    championsFiltered = championsFiltered.sort((a, b) => {
        return b.level - a.level
    })
    return championsFiltered
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
                let player = {};
                player.stats = res.data.data.attributes.stats

                // Declare attributes
                player.name = res.data.data.attributes.name;
                player.picture = playerPicture(player.stats["picture"]);
                player.title = titlesMap[player.stats["title"]];
                player.totalMatches = player.stats["2"] + player.stats["3"];
                player.wins = checkValue(player.stats["2"]);
                player.lose = checkValue(player.stats["3"]);
                player.winRate = player.wins ? round1dec(player.stats["2"], player.stats["3"]) : 0;
                player.level = checkValue(player.stats["26"]);
                player.xp = checkValue(player.stats["25"]);
                player.ratingMean = checkValue(player.stats["70"]);
                player.ratingDev = checkValue(player.stats["71"]);
                player.vsAIPlayed = checkValue(player.stats["56"]);
                player.timePlayed = checkValue(player.stats["8"]);
                player.gradeScore = checkValue(player.stats["4"]);
                player.league2v2 = playerState(player.stats["14"], player.stats["15"])
                player.league3v3 = playerState(player.stats["16"], player.stats["17"])
                player.quickmatch2v2 = playerState(player.stats["10"], player.stats["11"])
                player.quickmatch3v3 = playerState(player.stats["12"], player.stats["13"])
                player.quickmatchBrawl = playerState(player.stats["18"], player.stats["19"])
                player.champions = championsMap(player.stats)

                this.setState({player: player})
            })
            .catch(error => console.log(error.message))

        axios({
            method: 'get',
            baseURL: `${brAPI.url}/matches?filter[playerIds]=${this.state.playerId}`,
            headers: {
                Authorization: brAPI.header.authorization,
                Accept: brAPI.header.accept,
            }
        }).then(res => console.log(res))

        axios({
            method: 'get',
            baseURL: `https://api.developer.battlerite.com/shards/global/matches/5CF407023D1442E49AD718D60FB949B7`,
            headers: {
                Authorization: brAPI.header.authorization,
                Accept: brAPI.header.accept,
            }
        }).then(res => console.log(res))
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
            <div className="players">
                <img src={backgroundsMap['ezmo']} alt="Ezmo background" className="player__container--image"/>
                <div className="main-content players mt-5">
                    {this.state.player ? <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="player__container">
                                    <div className="player__container--content">
                                        <Info picture={this.state.player.picture} name={this.state.player.name}
                                              title={this.state.player.title} level={this.state.player.level}
                                              totalMatches={this.state.player.totalMatches}
                                              wins={this.state.player.wins}
                                              lose={this.state.player.lose} winRate={this.state.player.winRate}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="player__nav-pills">
                                    <div className="nav nav-pills" id="v-pills-tab" role="tablist"
                                         aria-orientation="vertical">
                                        <Link className="nav-link active" id="v-pills-champions-tab" data-toggle="pill"
                                              to="#v-pills-champions" role="tab" aria-controls="v-pills-champions"
                                              aria-selected="true">Champions</Link>
                                        <Link className="nav-link" id="v-pills-stats-tab" data-toggle="pill"
                                              to="#v-pills-stats" role="tab" aria-controls="v-pills-stats"
                                              aria-selected="false">Stats</Link>
                                        <Link className="nav-link" id="v-pills-matches-tab" data-toggle="pill"
                                              to="#v-pills-matches" role="tab" aria-controls="v-pills-matches"
                                              aria-selected="false">Matches</Link>
                                    </div>
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-champions"
                                         role="tabpanel" aria-labelledby="v-pills-champions-tab">
                                        <div className="row mb-3">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" value={this.state.search}
                                                           onChange={e => this.setState({search: e.target.value})}
                                                           className="form-control text-light rounded-0 form-control-lg"
                                                           placeholder="SEARCH YOUR CHAMPION"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 text-sm-right text-center">
                                                <div className="btn-group btn-group-toggle px-2" data-toggle="buttons">
                                                    <label className="btn btn-outline-light btn-lg active"
                                                           onClick={() => {
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
                                    <div className="tab-pane fade" id="v-pills-stats" role="tabpanel"
                                         aria-labelledby="v-pills-stats-tab">
                                        <League l2v2={this.state.player.league2v2}
                                                l3vs3={this.state.player.league3v3}/>
                                        <Quickmatch q2v2={this.state.player.quickmatch2v2}
                                                    q3vs3={this.state.player.quickmatch3v3}
                                                    qBrawl={this.state.player.quickmatchBrawl}/>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-matches" role="tabpanel"
                                         aria-labelledby="v-pills-matches-tab">
                                        Matches
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''}
                </div>
            </div>
        )
    }
}