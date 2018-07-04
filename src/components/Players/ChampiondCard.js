import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './championCards.min.css'

export default class ChampionCard extends Component {
    render() {
        return (
            <div>
                {this.props.champions.map((data, key) => {
                    return data.level > 0 ? <div className="heroes-details" data-role={data.type} key={key}>
                        <div className="heroes-details-bar">
                            <span className="bar-fill"
                                  style={{width: `${data.level / 20 * 100}%`}}/>
                        </div>
                        <div className="heroes-details-card">
                            <Link className="card-link" to="#"/>
                            <div className="card-container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-hero">
                                        <span className="card-hero-icon"
                                              style={{backgroundImage: `url("${data.img}")`}}/>
                                            <div className="card-hero-name">
                                                <strong>{data.name}</strong>
                                                <span className="card-games">{data.win + data.lose} Games</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-primary-stats">
                                            <div className="card-primary-stat">
                                            <span className="stat-row stat-playtime">{data.timePlayed}
                                                <i className="fas fa-clock"/></span>
                                                <span className="stat-row stat-fire">
                                        <span className="stat-fire-bar">
                                            <span className="bar-fill" style={{width: `${data.winPerTimePlayed}%`}}/>
                                        </span>
                                       <i className="fas fa-fire"/>
                                    </span>
                                            </div>
                                            <div className="card-primary-stat">
                                                <strong><span className="stats-kills">{data.win}</span></strong>
                                                <span className="stat-label">Wins</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">{data.winRate}
                                                <small>%</small>
                                            </div>
                                            <div className="bar-container">
                                                <div className={`bar-fill ${data.winRate < 49.9 ? 'bg-red' : ''}`}
                                                     style={{
                                                         width: `${data.winRate}%`,
                                                     }}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">Win rate</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">{data.kdRatio}</div>
                                            <div className="bar-container">
                                                <div className={`bar-fill ${data.kdRatio < 49.9 ? 'bg-red' : ''}`}
                                                     style={{
                                                         width: `${(data.kdRatio / 3.4) / 100}%`,
                                                     }}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">K/D Ratio</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">{data.winRatebrawl}
                                                <small>%</small>
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: `${data.winRatebrawl}%`}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">Win Rate Brawl</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                <span className="bar-value-empty">—</span>
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                —
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">{data.winRateRanked}
                                                <small>%</small>
                                            </div>
                                            <div className="bar-container">
                                                <div className={`bar-fill ${data.winRateRanked < 49.9 ? 'bg-red' : ''}`}
                                                     style={{
                                                         width: `${data.winRateRanked}%`,
                                                     }}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">Win Rate Ranked</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                —
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                —
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                —
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                —
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">
                                                —
                                            </div>
                                            <div className="bar-container">
                                                <div className="bar-fill"
                                                     style={{width: '0%'}}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">—</div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="stats-bar stats-bar-percentile">
                                            <div className="bar-value">{data.winRateUnranked}
                                                <small>%</small>
                                            </div>
                                            <div className="bar-container">
                                                <div className={`bar-fill ${data.winRateUnranked < 49.9 ? 'bg-red' : ''}`}
                                                     style={{
                                                         width: `${data.winRateUnranked}%`,
                                                     }}/>
                                            </div>
                                        </div>
                                        <div className="stats-label">Win Rate Unranked</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
                })}
            </div>
        )
    }
}