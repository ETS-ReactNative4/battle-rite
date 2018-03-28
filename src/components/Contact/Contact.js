import React from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

// CSS
import './Contact.min.css'

const Contact = () => (
    <div className="contact py-3">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-2">
                    <h3 className="text-uppercase">contact us</h3>
                </div>
            </div>
            <form action="">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Battlerite pseudo"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="The name of clip or link"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" cols="8" rows="10" placeholder="Your message"/>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block text-uppercase">Send</button>
                    </div>
                </div>
            </form>
            <hr/>
            <div className="row mt-4">
                <div className="col-12">
                    <h3 className="text-uppercase">Social networks</h3>
                    <Link to="#" className="nav-link">
                        <div className="social-cards discord-card">
                            <span className="fa fa-discord"/>
                            <p className="mb-0">/ NYHDV4g</p>
                        </div>
                    </Link>
                    <Link to="#" className="nav-link">
                        <div className="social-cards youtube-card">
                            <span className="fa fa-youtube fa-3x"/>
                            <p className="mb-0">/ Topplerite</p>
                        </div>
                    </Link>
                    <Link to="#" className="nav-link">
                        <div className="social-cards twitter-card">
                            <span className="fa fa-twitter fa-3x"/>
                            <p className="mb-0">@Topplerite_</p>
                        </div>
                    </Link>
                    <Link to="#" className="nav-link">
                        <div className="social-cards facebook-card">
                            <span className="fa fa-facebook fa-3x"/>
                            <p className="mb-0">/ Topplerite</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Contact