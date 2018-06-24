import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from 'firebase'

// CSS
import './Champions.min.css'

export default class Champion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            spellSelected: 0,
            champtionId: this.props.location.pathname.split('/champions/')[1],
        }
    }

    componentDidMount() {
        firebase.database().ref(`champions`)
            .once('value').then(data => {
            let champions = Object.values(data.val())
            let championsSameType = champions.filter(
                champion => {
                    return champion.type.indexOf(this.state.type) !== -1
                }
            )
            let champion = champions.filter(
                champ => {
                    return champ.name.toLowerCase().replace(/\s/g, '').indexOf(this.state.champtionId) !== -1
                }

            )[0]
            this.setState({champions, champion, championsSameType})
        })
    }

    render() {
        let spellSelected, championsSameType
        if (this.state.champion !== undefined) {
            spellSelected = this.state.champion.spells.filter(
                spell => {
                    return spell.id === this.state.spellSelected
                }
            )[0]

        }
        return (
            <div className="main-content champions">
                {this.state.champion !== undefined ? <div>
                    <div className="video-container d-lg-block d-none">
                        <video autoPlay="true" loop
                               src={this.state.champion.video}
                               className="champion__video"/>
                    </div>
                    <div className="container py-5">
                        <div className="row d-lg-none d-block">
                            <div className="col-6 offset-3">
                                <img src={this.state.champion.icon}
                                     className="w-100 border"
                                     alt={`${this.state.champion.name.toLowerCase()}-champion`}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 d-flex flex-column justify-content-center">
                                <ul className="nav text-uppercase justify-content-lg-start justify-content-center h6 font-weight-light">
                                    <li className="nav-item">
                                        <Link className="nav-link pl-0 text-white" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link px-0 text-white">-</span>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/guides">Guides</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link px-0 text-white">-</span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link text-white">{this.state.champion.name}</span>
                                    </li>
                                </ul>
                                <div
                                    className="text-uppercase h3 align-items-center justify-content-lg-start justify-content-center d-flex font-weight-light">
                                    <i className={`fa fa-4x fa-${this.state.champion.type}`}/> {this.state.champion.type}
                                </div>
                                <h1 className="display-4 text-center text-uppercase text-dark bg-light">
                                    {this.state.champion.name}
                                </h1>
                                <h6 className="text-center text-uppercase py-1 w-75 mx-auto text-dark bg-light">
                                    {this.state.champion.slogan}
                                </h6>
                            </div>
                            <div className="col-lg-6 offset-lg-2 pt-lg-0 pt-5">
                                <div className="damages">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-uppercase mb-0">
                                                Damages
                                            </h3>
                                            <p className="text-uppercase mb-0">
                                                {this.state.champion.status.damages.props}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="mb-0 font-weight-bold">{this.state.champion.status.damages.rate}%</h1>
                                        </div>
                                    </div>
                                    <div className="progress status-bar mt-2 rounded-0">
                                        <div className="progress-bar bg-light rounded-0" role="progressbar"
                                             style={{width: `${this.state.champion.status.damages.rate}%`}}
                                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="survivability">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-uppercase mb-0">
                                                Survivability
                                            </h3>
                                            <p className="text-uppercase mb-0">
                                                {this.state.champion.status.survivability.props}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="mb-0 font-weight-bold">{this.state.champion.status.survivability.rate}%</h1>
                                        </div>
                                    </div>
                                    <div className="progress status-bar mt-2 rounded-0">
                                        <div className="progress-bar bg-light rounded-0" role="progressbar"
                                             style={{width: `${this.state.champion.status.survivability.rate}%`}}
                                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="protection">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-uppercase mb-0">
                                                Protection
                                            </h3>
                                            <p className="text-uppercase mb-0">
                                                {this.state.champion.status.protection.props}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="mb-0 font-weight-bold">{this.state.champion.status.protection.rate}%</h1>
                                        </div>
                                    </div>
                                    <div className="progress status-bar mt-2 rounded-0">
                                        <div className="progress-bar bg-light rounded-0" role="progressbar"
                                             style={{width: `${this.state.champion.status.protection.rate}%`}}
                                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="control">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-uppercase mb-0">
                                                Control
                                            </h3>
                                            <p className="text-uppercase mb-0">
                                                {this.state.champion.status.control.props}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="mb-0 font-weight-bold">{this.state.champion.status.control.rate}%</h1>
                                        </div>
                                    </div>
                                    <div className="progress status-bar mt-2 rounded-0">
                                        <div className="progress-bar bg-light rounded-0" role="progressbar"
                                             style={{width: `${this.state.champion.status.control.rate}%`}}
                                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="difficulty">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-uppercase mb-0">
                                                Difficulty
                                            </h3>
                                            <p className="text-uppercase mb-0">
                                                {this.state.champion.status.difficulty.props}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="mb-0 font-weight-bold">{this.state.champion.status.difficulty.rate}%</h1>
                                        </div>
                                    </div>
                                    <div className="progress status-bar mt-2 rounded-0">
                                        <div className="progress-bar bg-light rounded-0" role="progressbar"
                                             style={{width: `${this.state.champion.status.difficulty.rate}%`}}
                                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <blockquote className="blockquote p-md-5">
                                    <h4 className="font-weight-bold mb-2 text-uppercase">Story</h4>
                                    <p className="mb-0 text-capitalize">{this.state.champion.bio}</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className="font-weight-bold text-uppercase">{this.state.champion.name}</h3>
                                    <h1 className="display-4 text-uppercase">{this.state.champion.slogan}</h1>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="text-uppercase">Pros</h3>
                                            {this.state.champion.pros.map((data, index) => {
                                                return <div className="px-4 py-2 mb-3 bg-success" key={index}>
                                                    {data}
                                                </div>
                                            })}
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="text-uppercase">Cons</h3>
                                            {this.state.champion.cons.map((data, index) => {
                                                return <div className="px-4 py-2 mb-3 bg-danger" key={index}>
                                                    {data}
                                                </div>
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container d-md-block d-none">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="display-4 my-5 text-uppercase">Spells & Battlerites</h1>
                                    <div className="row">
                                        <div className="col-xl-4 col-5">
                                            <div className="row">
                                                {this.state.champion.spells.map((data, index) => {
                                                    return <div
                                                        className="col-lg-4 col-sm-6 d-flex justify-content-center"
                                                        key={index}>
                                                        <div
                                                            style={{backgroundImage: `url('${data.img}')`}}
                                                            className={`spell ${index === this.state.spellSelected ? 'active' : ''}`}
                                                            onClick={() => this.setState({spellSelected: index})}>
                                                            <p className="text-uppercase text-white mb-0 text-center font-weight-bold">{data.keyword}</p>
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <div className="col-xl-7 offset-xl-1 col-lg-6 offset-lg-1 col-6 offset-1">
                                            <h3 className="text-uppercase">{spellSelected.name}</h3>
                                            <h5 className="font-weight-light text-capitalize my-4">{spellSelected.description}</h5>
                                            {spellSelected.details.map((data, index) => {
                                                return <div className="d-flex justify-content-between" key={index}>
                                                    <h6>{data.name}</h6>
                                                    <h6>{data.prop}</h6>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div id="carouselBuilds" className="carousel slide" data-wrap="false">
                    <div className="carousel-inner px-sm-5">
                        <div className="container">
                            {this.state.champion.builds.map((data, index) => {
                                return <div
                                    className={`carousel-item p-md-5 px-sm-0 p-4 ${index === 0 ? 'active' : ''}`}
                                    key={index}>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6">
                                            <div>
                                                <h2 className="font-weight-bold">{data.id + 1}. {data.name}</h2>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                        {data.cards.map((data, index) => {
                                            return <div className="col-xl-4 col-lg-6" key={index}>
                                                <div
                                                    className={`card__build bg-black card__build--${data.type.toLowerCase()} mb-3`}>
                                                    <div className="d-flex">
                                                        <img
                                                            src={`../../../media/champions/${champion.name.toLowerCase()}/spells/${data.spell.toLowerCase()}.png`}
                                                            className={`card__img card__img--${data.type.toLowerCase()}`}
                                                            alt={`${data.name}-card`}/>
                                                        <div>
                                                            <small>{data.type}</small>
                                                            <h4 className="text-uppercase mb-4">{data.name}</h4>
                                                        </div>
                                                    </div>
                                                    <p className="text-capitalize">{data.description}</p>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <a className="carousel-control-prev w-5" href="#carouselBuilds" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next w-5" href="#carouselBuilds" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>*/}
                    <div className="bg-black py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="display-4 text-uppercase mb-5">Basic guide</h1>
                                </div>
                                {this.state.champion.basicGuide.map((data, index) => {
                                    return <div className="col-sm-6" key={index}>
                                        <h4 className="font-weight-bold mb-2 text-uppercase">{data.title}</h4>
                                        <p className="font-weight-light">{data.description}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-uppercase mb-5 display-4">Mastering guide</h1>
                                </div>
                                {this.state.champion.masteringGuide.map((data, index) => {
                                    return <div className="col-sm-6" key={index}>
                                        <h4 className="font-weight-bold mb-2 text-uppercase">{data.title}</h4>
                                        <p className="font-weight-light">{data.description}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="bg-black py-5">
                        <div className="container">
                            {this.state.champion.synergy !== undefined ?
                                <div className="row mb-5">
                                    <div className="col-12">
                                        <h1 className="display-4 mb-3 text-uppercase">Synergy & Match-up</h1>
                                        <div className="bg-light text-dark d-inline-block px-2">
                                            <small className="text-uppercase font-weight-bold">We are actually updating
                                                Synergy
                                                and Match-ups.
                                            </small>
                                        </div>
                                    </div>
                                </div> : ''
                            }
                            <div className="row">
                                <div className="col-6">
                                    <h3 className="text-uppercase mb-0">Same category guides</h3>
                                    <Link className="nav-link p-0" to="/guides">
                                        <p className="text-uppercase font-weight-bold text-secondary">
                                            Show all guides <i className="fa fa-myarrow-right"/>
                                        </p>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <h3 className="text-uppercase mb-0">A video with {this.state.champion.name}</h3>
                                    <Link className="nav-link p-0" to="/videos">
                                        <p className="text-uppercase font-weight-bold text-secondary">
                                            Show all videos <i className="fa fa-myarrow-right"/>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    {this.state.championsSameType.map((data, index) => {
                                        return <Link className="guide__container"
                                                     to={`/champions/${data.name.toLowerCase().replace(/\s/g, '')}`}
                                                     key={index}>
                                            <div className="guide__box">
                                                <div className="guide__items"
                                                     style={{backgroundImage: `url('${data.icon}')`}}/>
                                            </div>
                                        </Link>
                                    })}
                                </div>
                                <div className="col-6">
                                    <div className="embed-responsive h-100">
                                        <iframe className="embed-responsive-item"
                                                title={`${this.state.champion.name} video`}
                                                src="https://www.youtube.com/embed/W4nb08MuJ2Q?rel=0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''}
            </div>
        )
    }
}