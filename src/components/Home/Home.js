import React from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

// CSS
import './Home.min.css'

// Images
import jamilaImg from '../../images/jamila.jpg'
import growlanImg from '../../images/Growlan.png'
import raigonImg from '../../images/raigon.jpg'
import updateJanuaryImg from '../../images/update-january.jpg'

const Home = ()=>(
    <div className="home mt-5">
        <div id="carouselHomepage" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselHomepage" data-slide-to="0" className="active"></li>
                <li data-target="#carouselHomepage" data-slide-to="1"></li>
                <li data-target="#carouselHomepage" data-slide-to="2"></li>
                <li data-target="#carouselHomepage" data-slide-to="2"></li>
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
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselHomepage" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
)

export default Home