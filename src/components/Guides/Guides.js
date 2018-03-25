import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

// CSS
import './Guides.min.css'

// Images
import Alysia from '../../images/champions/Alysia_icon.png'
import Ashka from '../../images/champions/Ashka_icon.png'
import Bakko from '../../images/champions/Bakko_icon.png'
import Blossom from '../../images/champions/Blossom_icon.png'
import Croak from '../../images/champions/Croak_icon.png'
import Destiny from '../../images/champions/Destiny_icon.png'
import Ezmo from '../../images/champions/Ezmo_icon.png'
import Freya from '../../images/champions/Freya_icon.png'
import Iva from '../../images/champions/Iva_icon.png'
import Jade from '../../images/champions/Jade_icon.png'
import Jumong from '../../images/champions/Jumong_icon.png'
import Lucie from '../../images/champions/Lucie_icon.png'
import Oldur from '../../images/champions/Oldur_icon.png'
import Pearl from '../../images/champions/Pearl_icon.png'
import Pestilus from '../../images/champions/Pestilus_icon.png'
import Poloma from '../../images/champions/Poloma_icon.png'
import Raigon from '../../images/champions/Raigon_icon.png'
import Rook from '../../images/champions/Rook_icon.png'
import RuhKaan from '../../images/champions/RuhKaan_icon.png'
import Shifu from '../../images/champions/Shifu_icon.png'
import Sirius from '../../images/champions/Sirius_icon.png'
import Taya from '../../images/champions/Taya_icon.png'
import Thorn from '../../images/champions/Thorn_icon.png'
import Varesh from '../../images/champions/Varesh_icon.png'
import Zander from '../../images/champions/Zander_icon.png'

export default class Guides extends Component {
    champions = [
        {
            image: Alysia,
            name: 'Alysia',
            type: 'Ranged'
        },
        {
            image: Ashka,
            name: 'Ashka',
            type: 'Ranged'
        },
        {
            image: Bakko,
            name: 'Bakko',
            type: 'Melee'
        },
        {
            image: Blossom,
            name: 'Blossom',
            type: 'Support'
        },
        {
            image: Croak,
            name: 'Croak',
            type: 'Melee'
        },
        {
            image: Destiny,
            name: 'Destiny',
            type: 'Ranged'
        },
        {
            image: Ezmo,
            name: 'Ezmo',
            type: 'Ranged'
        },
        {
            image: Freya,
            name: 'Freya',
            type: 'Melee'
        },
        {
            image: Iva,
            name: 'Iva',
            type: 'Ranged'
        },
        {
            image: Jade,
            name: 'Jade',
            type: 'Ranged'
        },
        {
            image: Jumong,
            name: 'Jumong',
            type: 'Ranged'
        },
        {
            image: Lucie,
            name: 'Lucie',
            type: 'Support'
        },
        {
            image: Oldur,
            name: 'Oldur',
            type: 'Support'
        },
        {
            image: Pearl,
            name: 'Pearl',
            type: 'Support'
        },
        {
            image: Pestilus,
            name: 'Pestilus',
            type: 'Support'
        },
        {
            image: Poloma,
            name: 'Poloma',
            type: 'Support'
        },
        {
            image: Raigon,
            name: 'Raigon',
            type: 'Melee'
        },
        {
            image: Rook,
            name: 'Rook',
            type: 'Melee'
        },
        {
            image: RuhKaan,
            name: 'Ruh Kaan',
            type: 'Melee'
        },
        {
            image: Shifu,
            name: 'Shifu',
            type: 'Melee'
        },
        {
            image: Sirius,
            name: 'Sirius',
            type: 'Support'
        },
        {
            image: Taya,
            name: 'Taya',
            type: 'Ranged'
        },
        {
            image: Thorn,
            name: 'Thorn',
            type: 'Melee'
        },
        {
            image: Varesh,
            name: 'Varesh',
            type: 'Ranged'
        },
        {
            image: Zander,
            name: 'Zander',
            type: 'Support'
        }
    ]

    render() {
        return (
            <div className="guide py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h3 className="text-uppercase">Builds & Guides</h3>
                        </div>
                        <div className="col-12">
                            {this.champions.map((data, index) => {
                                return <Link className="guide__container" to="#" key={index}>
                                    <div className="guide__box">
                                        <div className="guide__items" style={{backgroundImage: `url(${data.image})`}}>
                                            <span className="guide__type">{data.type}</span>
                                            <h4 className="guide__name">{data.name}</h4>
                                        </div>
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase">Social networks</h3>
                            <a href="#">
                                <div className="social-media__icon--lg">
                                    <span className="fa fa-discord"/>
                                    <p>/ NYHDV4g</p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="social-media__icon--lg">
                                    <span className="fa fa-youtube fa-3x"/>
                                    <p>/ Topplerite</p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="social-media__icon--lg">
                                    <span className="fa fa-twitter fa-3x"/>
                                    <p>@Topplerite_</p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="social-media__icon--lg">
                                    <span className="fa fa-facebook fa-3x"/>
                                    <p>/ Topplerite</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}