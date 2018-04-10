import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

import * as firebase from 'firebase'

// CSS
import './News.min.css'

// Images
import jamilaImg from '../../images/jamila.jpg'
import legends_of_quna from '../../images/legends_of_quna.jpg'
import dragon from '../../images/dragon.jpg'
import redditPartner from '../../images/reddit-partner.jpg'
import updateJanuary from '../../images/update-january.jpg'
import zander from '../../images/zander.png'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            admin: this.props.admin,
        }
    }

    componentDidMount() {
        firebase.database().ref('news').once('value').then(data => {
            console.log(data.val())
            let news = Object.values(data.val())
            this.setState({news})
        })
    }

    news = [
        {
            image: jamilaImg,
            title: 'Jamila, the Shadowblade Assassin',
            date: '2018-03-13',
            author: 'JohnnyB01'
        },
        {
            image: legends_of_quna,
            title: 'Inspirations from the Past: Legends of Quna',
            date: '2018-02-22',
            author: 'JohnnyB01'
        },
        {
            image: dragon,
            title: 'Sleeping Dragons',
            date: '2018-02-22',
            author: 'Ayydrill'
        },
        {
            image: redditPartner,
            title: 'United as one',
            date: '2018-01-24',
            author: 'Ayydrill'
        },
        {
            image: updateJanuary,
            title: 'Website Update January 2018',
            date: '2018-01-23',
            author: 'gflox'
        },
        {
            image: zander,
            title: 'Zander, The magnificent magician',
            date: '2018-01-16',
            author: 'Ayydrill'
        }
    ]

    render() {
        /********
         *
         * @param date Take a new Date
         * @returns {string}
         */
        const formatDate = date => {
            let monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];

            let day = date.getDate();
            let monthIndex = date.getMonth();
            let year = date.getFullYear();

            return day + ' ' + monthNames[monthIndex] + ' ' + year;
        }
        return (
            <div className="news py-3">
                <div className="container">
                    <div className="row">
                        {this.state.admin === undefined ?
                            <div className="col-12 mb-2">
                                <h3 className="text-uppercase">News</h3>
                            </div>
                            : ''}
                        {this.state.news.map((data, index) => {
                            return <div className="col-sm-6" key={index}>
                                <Link className="nav-link p-0"
                                      to={`${this.state.admin === undefined ? '/news' : this.state.admin.path}/${data.permalink}`}>
                                    <div className="news__items" style={{backgroundImage: `url(${data.img})`}}>
                                        <h4>{data.title}</h4>
                                        <h6>{data.subTitle}</h6>
                                        {/*<span>{formatDate(data.date)}</span>*/}
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}