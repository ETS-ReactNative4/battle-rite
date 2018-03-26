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
    constructor(props) {
        super(props)
        this.state = {
            champions: [
                {
                    image: Alysia,
                    name: 'Alysia',
                    type: 'ranged'
                },
                {
                    image: Ashka,
                    name: 'Ashka',
                    type: 'ranged'
                },
                {
                    image: Bakko,
                    name: 'Bakko',
                    type: 'melee'
                },
                {
                    image: Blossom,
                    name: 'Blossom',
                    type: 'support'
                },
                {
                    image: Croak,
                    name: 'Croak',
                    type: 'melee'
                },
                {
                    image: Destiny,
                    name: 'Destiny',
                    type: 'ranged'
                },
                {
                    image: Ezmo,
                    name: 'Ezmo',
                    type: 'ranged'
                },
                {
                    image: Freya,
                    name: 'Freya',
                    type: 'melee'
                },
                {
                    image: Iva,
                    name: 'Iva',
                    type: 'ranged'
                },
                {
                    image: Jade,
                    name: 'Jade',
                    type: 'ranged'
                },
                {
                    image: Jumong,
                    name: 'Jumong',
                    type: 'ranged'
                },
                {
                    image: Lucie,
                    name: 'Lucie',
                    type: 'support'
                },
                {
                    image: Oldur,
                    name: 'Oldur',
                    type: 'support'
                },
                {
                    image: Pearl,
                    name: 'Pearl',
                    type: 'support'
                },
                {
                    image: Pestilus,
                    name: 'Pestilus',
                    type: 'support'
                },
                {
                    image: Poloma,
                    name: 'Poloma',
                    type: 'support'
                },
                {
                    image: Raigon,
                    name: 'Raigon',
                    type: 'melee'
                },
                {
                    image: Rook,
                    name: 'Rook',
                    type: 'melee'
                },
                {
                    image: RuhKaan,
                    name: 'Ruh Kaan',
                    type: 'melee'
                },
                {
                    image: Shifu,
                    name: 'Shifu',
                    type: 'melee'
                },
                {
                    image: Sirius,
                    name: 'Sirius',
                    type: 'support'
                },
                {
                    image: Taya,
                    name: 'Taya',
                    type: 'ranged'
                },
                {
                    image: Thorn,
                    name: 'Thorn',
                    type: 'melee'
                },
                {
                    image: Varesh,
                    name: 'Varesh',
                    type: 'ranged'
                },
                {
                    image: Zander,
                    name: 'Zander',
                    type: 'support'
                }
            ],
            theme: this.props.theme,
            search: '',
            type: ''
        }
    }

    searchChamption(event) {
        this.setState({
            search: event.target.value
        })
    }

    selectChampionType(type) {
        this.setState({type})
    }

    render() {
        let filteredChampions = this.state.champions.filter(
            champion => {
                return champion.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 &&
                    champion.type.indexOf(this.state.type) !== -1
            }
        );
        return (
            <div className="guide py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h3 className="text-uppercase">Builds & Guides</h3>
                        </div>
                        <div className="col-12">
                            <div className="row mb-4 mt-3">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" value={this.state.search}
                                               onChange={this.searchChamption.bind(this)}
                                               className="form-control bg-dark rounded-0 form-control-lg"
                                               placeholder="SEARCH YOUR CHAMPION"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-sm-right text-center">
                                    <div className="btn-group btn-group-toggle px-2" data-toggle="buttons">
                                        <label className="btn btn-outline-light btn-lg active" onClick={() => {
                                            this.selectChampionType('')
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">All</span>
                                        </label>
                                        <label className="btn btn-outline-light btn-lg" onClick={() => {
                                            this.selectChampionType('melee')
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">Melee</span>
                                        </label>
                                        <label className="btn btn-outline-light btn-lg" onClick={() => {
                                            this.selectChampionType('ranged')
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">Ranged</span>
                                        </label>
                                        <label className="btn btn-outline-light btn-lg" onClick={() => {
                                            this.selectChampionType('support')
                                        }}>
                                            <input type="radio" name="champion-type"/>
                                            <span className="h6 text-uppercase">Support</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {filteredChampions.map((data, index) => {
                                return <Link className="guide__container" to={`/champions/${data.name.toLowerCase().replace(/\s/g, '')}`} key={index}>
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
                </div>
            </div>
        )
    }
}