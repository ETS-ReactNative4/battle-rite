import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

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
        return (
            <div className="news py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h3 className="text-uppercase">News</h3>
                        </div>
                        {this.news.map((data, index) => {
                            return <div className="col-sm-6" key={index}>
                                <Link className="nav-link p-0" to="#">
                                    <div className="news__items" style={{backgroundImage: `url(${data.image})`}}>
                                        <h4>{data.title}</h4>
                                        <span>{data.date} - by {data.author}</span>
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