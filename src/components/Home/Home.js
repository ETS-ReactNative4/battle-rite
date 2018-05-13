import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import brAPI from '../../requests/battlerite'
import axios from "axios";

// CSS
import './Home.min.css'

// Images
import jamilaImg from '../../images/jamila.jpg'
import growlanImg from '../../images/Growlan.png'
import raigonImg from '../../images/raigon.jpg'
import updateJanuaryImg from '../../images/update-january.jpg'

import subscribeCardJade from '../../images/subscribe-card-jade.png'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    search = event => {
        event.preventDefault()
        axios({
            method: 'get',
            baseURL: `${brAPI.url}/players?filter[playerNames]=${this.state.search}`,
            headers: {
                Authorization: brAPI.header.authorization,
                Accept: brAPI.header.accept,
            }
        })
            .then(res => {
                this.props.history.push(`/player/${res.data.data[0].id}`)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    render() {
        return (
            <div className="main-content home">
                <div id="carouselHomepage" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselHomepage" data-slide-to="0" className="active"/>
                        <li data-target="#carouselHomepage" data-slide-to="1"/>
                        <li data-target="#carouselHomepage" data-slide-to="2"/>
                        <li data-target="#carouselHomepage" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={jamilaImg} alt="Jamila"/>
                            <div className="row">
                                <div className="col-sm-6 offset-sm-1">
                                    <div className="carousel-caption text-left d-none d-md-block">
                                        <h1 className="display-3">JAMILA, THE SHADOWBLADE ASSASSIN</h1>
                                        <Link to="#" className="btn btn-light ml-2 text-uppercase">Check article</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={growlanImg} alt="Growlan"/>
                            <div className="row">
                                <div className="col-sm-6 offset-sm-1">
                                    <div className="carousel-caption text-left d-none d-md-block">
                                        <h1 className="display-3">FIND GUIDES FROM TOP PLAYERS</h1>
                                        <Link to="#" className="btn btn-light ml-2 text-uppercase">Show guide</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={raigonImg} alt="Raigon"/>
                            <div className="row">
                                <div className="col-sm-6 offset-sm-1">
                                    <div className="carousel-caption text-left d-none d-md-block">
                                        <h1 className="display-3">NEW OUTPLAY SERIES</h1>
                                        <Link to="#" className="btn btn-light ml-2 text-uppercase">Check video</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={updateJanuaryImg} alt="Update January"/>
                            <div className="row">
                                <div className="col-sm-6 offset-sm-1">
                                    <div className="carousel-caption text-left d-none d-md-block">
                                        <h1 className="display-3">WEBSITE GUIDES UPDATE</h1>
                                        <Link to="#" className="btn btn-light ml-2 text-uppercase">Check update</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselHomepage" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselHomepage" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br/>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-8 col-xl-9">
                            <form onSubmit={this.search}>
                                <div className="d-fex">
                                    <div className="input-group mb-3">
                                        <input type="text" placeholder="Search by Battlerite username..."
                                               value={this.state.search}
                                               className="form-control rounded-0"
                                               onChange={e => this.setState({search: e.target.value})}/>
                                        <div className="input-group-append ml-4">
                                            <button className="btn btn-primary btn-lg"
                                                    type="submit">Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="battlerite-subscribe-card mr-auto mr-sm-0 ml-auto">
                                <img src={subscribeCardJade} className="subscribe-card-jade" alt=""/>
                                <h5 className="mb-1">BattleRite</h5>
                                <div className="mb-2 d-flex justify-content-between">
                                    <span className="number">46,941 Thorn Mains</span>
                                    <button className="battlerite-subscribe-card__btn">Subscribe</button>
                                </div>
                                <p className="mb-0">Battlerite is an action-packed team arena brawler. Experience the
                                    unique
                                    combination of a top-down shooter with a fast-paced fighting game. Unleash the
                                    champion
                                    within you!</p>
                            </div>
                            <Link className="play-battlerite mr-auto mr-sm-0 ml-auto" target="_blank"
                                  to="http://store.steampowered.com/app/504370"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}