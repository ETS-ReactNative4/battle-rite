import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

// CSS
import './Champions.min.css'

// Videos
import alysia from '../../videos/alysia.mp4'
import ashka from '../../videos/ashka.mp4'
import bakko from '../../videos/bakko.mp4'
import blossom from '../../videos/blossom.mp4'
import croak from '../../videos/croak.mp4'
import destiny from '../../videos/destiny.mp4'
import ezmo from '../../videos/ezmo.mp4'
import freya from '../../videos/freya.mp4'
import iva from '../../videos/iva.mp4'
import jade from '../../videos/jade.mp4'
import jumong from '../../videos/jumong.mp4'
import lucie from '../../videos/lucie.mp4'
import oldur from '../../videos/oldur.mp4'
import pearl from '../../videos/pearl.mp4'
import pestilus from '../../videos/pestilus.mp4'
import poloma from '../../videos/poloma.mp4'
import raigon from '../../videos/raigon.mp4'
import rook from '../../videos/rook.mp4'
import ruhkaan from '../../videos/ruhKaan.mp4'
import shifu from '../../videos/shifu.mp4'
import sirius from '../../videos/sirius.mp4'
import taya from '../../videos/taya.mp4'
import thorn from '../../videos/thorn.mp4'
import varesh from '../../videos/varesh.mp4'
import zander from '../../videos/zander.mp4'

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

export default class Champion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            champions: [
                {
                    id: 'alysia',
                    video: alysia,
                    image: Alysia,
                    name: 'Alysia',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 90,
                            props: 'Poke, constant damage, burst'
                        },
                        survivability: {
                            rate: 50,
                            props: 'Iframe, shield, invulnerability shield, self-healing'
                        },
                        protection: {
                            rate: 40,
                            props: 'Shield, invulnerability shield, healing'
                        },
                        control: {
                            rate: 60,
                            props: 'Slow, freeze, push, projectile block'
                        },
                        difficulty: {
                            rate: 80,
                            props: ''
                        },
                    }
                },
                {
                    id: 'ashka',
                    video: ashka,
                    image: Ashka,
                    name: 'Ashka',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 90,
                            props: 'Constant damage, Poke, AOE burst'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Self-healing, air times'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 50,
                            props: 'AOE stun, AOE petrify, push, projectile block'
                        },
                        difficulty: {
                            rate: 70,
                            props: ''
                        },
                    }
                },
                {
                    id: 'bakko',
                    video: bakko,
                    image: Bakko,
                    name: 'Bakko',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 40,
                            props: 'Poke, burst'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Shield, shield reflect, air time, dash'
                        },
                        protection: {
                            rate: 30,
                            props: 'AOE Shield'
                        },
                        control: {
                            rate: 60,
                            props: 'AOE incapacitate, push, stun, projectile reflect'
                        },
                        difficulty: {
                            rate: 50,
                            props: ''
                        },
                    }
                },
                {
                    id: 'blossom',
                    video: blossom,
                    image: Blossom,
                    name: 'Blossom',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 40,
                            props: 'Burst'
                        },
                        survivability: {
                            rate: 80,
                            props: 'Heal, AOE heal, AOE invulnerability, air time, projectile reflect'
                        },
                        protection: {
                            rate: 70,
                            props: 'Heal, AOE heal, AOE invulnerability'
                        },
                        control: {
                            rate: 30,
                            props: 'AOE stun, weaken, push, projectile reflect, invocation block'
                        },
                        difficulty: {
                            rate: 40,
                            props: ''
                        },
                    }
                },
                {
                    id: 'croak',
                    video: croak,
                    image: Croak,
                    name: 'Croak',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 50,
                            props: 'Burst'
                        },
                        survivability: {
                            rate: 80,
                            props: 'Dash, air time, dispell, camouflage, self-healing'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 70,
                            props: 'Incapacitate, stun, blind'
                        },
                        difficulty: {
                            rate: 70,
                            props: ''
                        },
                    }
                },
                {
                    id: 'destiny',
                    video: destiny,
                    image: Destiny,
                    name: 'Destiny',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 100,
                            props: 'Poke, burst, constant damage'
                        },
                        survivability: {
                            rate: 40,
                            props: 'Counter, iframe, movement dispel, movement speed, shield'
                        },
                        protection: {
                            rate: 20,
                            props: 'Shield'
                        },
                        control: {
                            rate: 40,
                            props: 'Stun, push, silence, slow, projectile slow'
                        },
                        difficulty: {
                            rate: 70,
                            props: ''
                        },
                    }
                },
                {
                    id: 'ezmo',
                    video: ezmo,
                    image: Ezmo,
                    name: 'Ezmo',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 100,
                            props: 'Constant damage, Burst'
                        },
                        survivability: {
                            rate: 50,
                            props: 'Air time, lifesteal, shield, absorb shield'
                        },
                        protection: {
                            rate: 20,
                            props: 'Shield'
                        },
                        control: {
                            rate: 40,
                            props: 'Grab, root, pull'
                        },
                        difficulty: {
                            rate: 60,
                            props: ''
                        },
                    }
                },
                {
                    id: 'freya',
                    video: freya,
                    image: Freya,
                    name: 'Freya',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 40,
                            props: 'Poke, burst, constant damage'
                        },
                        survivability: {
                            rate: 100,
                            props: 'Air times, counter, self-shields'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 50,
                            props: 'Pull, push, incapacitate'
                        },
                        difficulty: {
                            rate: 30,
                            props: ''
                        },
                    }
                },
                {
                    id: 'iva',
                    video: iva,
                    image: Iva,
                    name: 'Iva',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 90,
                            props: 'Poke, burst, constant damage, dot'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Self-shield, haste, absorb shield, iframe, dispel'
                        },
                        protection: {
                            rate: 40,
                            props: 'Shield, dispel, haste'
                        },
                        control: {
                            rate: 50,
                            props: 'Pull, stun, incapacitate'
                        },
                        difficulty: {
                            rate: 30,
                            props: ''
                        },
                    }
                },
                {
                    id: 'jade',
                    video: jade,
                    image: Jade,
                    name: 'Jade',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 100,
                            props: 'Poke, Burst, constant damage'
                        },
                        survivability: {
                            rate: 50,
                            props: 'iframe, self-healing, immaterial'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 50,
                            props: 'Stun, Root, Slow, push'
                        },
                        difficulty: {
                            rate: 90,
                            props: ''
                        },
                    }
                },
                {
                    id: 'jumong',
                    video: jumong,
                    image: Jumong,
                    name: 'Jumong',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 100,
                            props: 'Poke, Burst, constant damage'
                        },
                        survivability: {
                            rate: 50,
                            props: 'iframe, self-healing, immaterial'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 50,
                            props: 'Stun, Root, Slow, push'
                        },
                        difficulty: {
                            rate: 90,
                            props: ''
                        },
                    }
                },
                {
                    id: 'lucie',
                    video: lucie,
                    image: Lucie,
                    name: 'Lucie',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 30,
                            props: 'Burst'
                        },
                        survivability: {
                            rate: 80,
                            props: 'Self shield, Self heal, iframe, dispel'
                        },
                        protection: {
                            rate: 90,
                            props: 'Heal, Shield, dispel'
                        },
                        control: {
                            rate: 80,
                            props: 'Panic, Petrify, dispel, push, slow'
                        },
                        difficulty: {
                            rate: 90,
                            props: ''
                        },
                    }
                },
                {
                    id: 'oldur',
                    video: oldur,
                    image: Oldur,
                    name: 'Oldur',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 60,
                            props: 'Burst, constant damage'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Absorb Shield, iframe, self heal'
                        },
                        protection: {
                            rate: 50,
                            props: 'Heal, iframe'
                        },
                        control: {
                            rate: 40,
                            props: 'AOE Petrify, AOE stun, push, slow, projectile reflect'
                        },
                        difficulty: {
                            rate: 50,
                            props: ''
                        },
                    }
                },
                {
                    id: 'pearl',
                    video: pearl,
                    image: Pearl,
                    name: 'Pearl',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 40,
                            props: 'Burst, constant damage'
                        },
                        survivability: {
                            rate: 100,
                            props: 'iframe, self heal, self shield, counter, dispel'
                        },
                        protection: {
                            rate: 80,
                            props: 'Heal, shield, dispel'
                        },
                        control: {
                            rate: 60,
                            props: 'Silence, push, projectile slow'
                        },
                        difficulty: {
                            rate: 50,
                            props: ''
                        },
                    }
                },
                {
                    id: 'pestilus',
                    video: pestilus,
                    image: Pestilus,
                    name: 'Pestilus',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 30,
                            props: 'Poke, burst'
                        },
                        survivability: {
                            rate: 70,
                            props: 'iframe, little self heal, shield'
                        },
                        protection: {
                            rate: 90,
                            props: 'Heal, shield, damage reduction'
                        },
                        control: {
                            rate: 70,
                            props: 'Panics, brain bug, root, invocation block'
                        },
                        difficulty: {
                            rate: 80,
                            props: ''
                        },
                    }
                },
                {
                    id: 'poloma',
                    video: poloma,
                    image: Poloma,
                    name: 'Poloma',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 30,
                            props: 'Constant damage'
                        },
                        survivability: {
                            rate: 90,
                            props: 'little self heal, self immaterial, iframe'
                        },
                        protection: {
                            rate: 90,
                            props: 'Heal, immaterial, damage reduction, iframe'
                        },
                        control: {
                            rate: 70,
                            props: 'Panic, push, slow, position switch'
                        },
                        difficulty: {
                            rate: 60,
                            props: ''
                        },
                    }
                },
                {
                    id: 'raigon',
                    video: raigon,
                    image: Raigon,
                    name: 'Raigon',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 80,
                            props: 'Constant damage, burst'
                        },
                        survivability: {
                            rate: 70,
                            props: 'Air time, reflect shield, dashes, lifesteal, iframe'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 50,
                            props: 'Bump, slow, incapacitate, stun'
                        },
                        difficulty: {
                            rate: 30,
                            props: ''
                        },
                    }
                },
                {
                    id: 'rook',
                    video: rook,
                    image: Rook,
                    name: 'Rook',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 60,
                            props: 'Poke, burst'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Counter, invulnerability, iframe, self-healing, haste'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 60,
                            props: 'AOE incapacitate, armor break, slow, stun, push'
                        },
                        difficulty: {
                            rate: 30,
                            props: ''
                        },
                    }
                },
                {
                    id: 'ruhkaan',
                    video: ruhkaan,
                    image: RuhKaan,
                    name: 'Ruh Kaan',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 60,
                            props: 'Poke, Burst'
                        },
                        survivability: {
                            rate: 80,
                            props: 'AOE lifesteal, lifesteal, absorb shield, iframe'
                        },
                        protection: {
                            rate: 20,
                            props: 'Grab, heal'
                        },
                        control: {
                            rate: 60,
                            props: 'Silence, grab, slow'
                        },
                        difficulty: {
                            rate: 40,
                            props: ''
                        },
                    }
                },
                {
                    id: 'shifu',
                    video: shifu,
                    image: Shifu,
                    name: 'Shifu',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 80,
                            props: 'Burst, constant damage'
                        },
                        survivability: {
                            rate: 70,
                            props: 'Immaterial, counter, lifesteal, iframe, shield, haste'
                        },
                        protection: {
                            rate: 0,
                            props: ''
                        },
                        control: {
                            rate: 20,
                            props: 'AOE incapacitate, grab'
                        },
                        difficulty: {
                            rate: 60,
                            props: ''
                        },
                    }
                },
                {
                    id: 'sirius',
                    video: sirius,
                    image: Sirius,
                    name: 'Sirius',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 60,
                            props: 'Burst'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Iframe, counter, dash, AOE heal'
                        },
                        protection: {
                            rate: 50,
                            props: 'AOE Heal'
                        },
                        control: {
                            rate: 70,
                            props: 'AOE Petrify, weaken, slow'
                        },
                        difficulty: {
                            rate: 40,
                            props: ''
                        },
                    }
                },
                {
                    id: 'taya',
                    video: taya,
                    image: Taya,
                    name: 'Taya',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 90,
                            props: 'Constant damage, burst'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Haste, iframe, dash, shield'
                        },
                        protection: {
                            rate: 60,
                            props: 'iframe, haste'
                        },
                        control: {
                            rate: 30,
                            props: 'Stun, pull, push'
                        },
                        difficulty: {
                            rate: 80,
                            props: ''
                        },
                    }
                },
                {
                    id: 'thorn',
                    video: thorn,
                    image: Thorn,
                    name: 'Thorn',
                    type: 'melee',
                    status: {
                        damages: {
                            rate: 30,
                            props: 'Poke'
                        },
                        survivability: {
                            rate: 60,
                            props: 'Lifesteal, self-healing, iframe, invulnerability shield'
                        },
                        protection: {
                            rate: 50,
                            props: 'iframe, repositioning, invulnerability shield'
                        },
                        control: {
                            rate: 100,
                            props: 'AOE grab, stun, entangled, slow, block projectiles, reflect damages, damage reduction'
                        },
                        difficulty: {
                            rate: 60,
                            props: ''
                        },
                    }
                },
                {
                    id: 'varesh',
                    video: varesh,
                    image: Varesh,
                    name: 'Varesh',
                    type: 'ranged',
                    status: {
                        damages: {
                            rate: 100,
                            props: 'Poke, constant damage, burst'
                        },
                        survivability: {
                            rate: 50,
                            props: 'Lifesteal, shield, counter, iframe'
                        },
                        protection: {
                            rate: 10,
                            props: 'Shield'
                        },
                        control: {
                            rate: 40,
                            props: 'Silence, slow, push, reduce damage and healing'
                        },
                        difficulty: {
                            rate: 90,
                            props: ''
                        },
                    }
                },
                {
                    id: 'zander',
                    video: zander,
                    image: Zander,
                    name: 'Zander',
                    type: 'support',
                    status: {
                        damages: {
                            rate: 50,
                            props: 'Constant damage, Poke, burst'
                        },
                        survivability: {
                            rate: 90,
                            props: 'Self-healing, iframes, dispels, movement speed'
                        },
                        protection: {
                            rate: 60,
                            props: 'Healing, AOE healing, AOE dispel, iframes'
                        },
                        control: {
                            rate: 60,
                            props: 'AOE sheep, increases targets damages, push, invocation block'
                        },
                        difficulty: {
                            rate: 80,
                            props: ''
                        },
                    }
                }
            ],
            champtionId: this.props.location.pathname.split('/champions/')[1],
        }
    }

    render() {
        let champion = this.state.champions.filter(
            champ => {
                return champ.id.toLowerCase().indexOf(this.state.champtionId) !== -1
            }
        )[0]
        return (
            <div className="champion">
                <div className="video-container">
                    <video autoPlay="true" loop src={champion.video} className="champion__video"/>
                </div>
                <div className="container text-light">
                    <div className="row pb-5">
                        <div className="col-4">
                            <ul className="nav text-uppercase h6 font-weight-light">
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
                                    <span className="nav-link text-white">{champion.name}</span>
                                </li>
                            </ul>
                            <div className="text-uppercase h3 align-items-center d-flex font-weight-light">
                                <i className={`fa fa-4x fa-${champion.type}`}/> {champion.type}
                            </div>
                            <h1 className="display-4 text-center text-uppercase text-dark bg-light">
                                {champion.name}
                            </h1>
                        </div>
                        <div className="col-6 offset-2">
                            <div className="damages">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h3 className="text-uppercase mb-0">
                                            Damages
                                        </h3>
                                        <p className="text-uppercase mb-0">
                                            {champion.status.damages.props}
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 font-weight-bold">{champion.status.damages.rate}%</h1>
                                    </div>
                                </div>
                                <div className="progress status-bar mt-2 rounded-0">
                                    <div className="progress-bar bg-light rounded-0" role="progressbar"
                                         style={{width: `${champion.status.damages.rate}%`}}
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
                                            {champion.status.survivability.props}
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 font-weight-bold">{champion.status.survivability.rate}%</h1>
                                    </div>
                                </div>
                                <div className="progress status-bar mt-2 rounded-0">
                                    <div className="progress-bar bg-light rounded-0" role="progressbar"
                                         style={{width: `${champion.status.survivability.rate}%`}}
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
                                            {champion.status.protection.props}
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 font-weight-bold">{champion.status.protection.rate}%</h1>
                                    </div>
                                </div>
                                <div className="progress status-bar mt-2 rounded-0">
                                    <div className="progress-bar bg-light rounded-0" role="progressbar"
                                         style={{width: `${champion.status.protection.rate}%`}}
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
                                            {champion.status.control.props}
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 font-weight-bold">{champion.status.control.rate}%</h1>
                                    </div>
                                </div>
                                <div className="progress status-bar mt-2 rounded-0">
                                    <div className="progress-bar bg-light rounded-0" role="progressbar"
                                         style={{width: `${champion.status.control.rate}%`}}
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
                                            {champion.status.difficulty.props}
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 font-weight-bold">{champion.status.difficulty.rate}%</h1>
                                    </div>
                                </div>
                                <div className="progress status-bar mt-2 rounded-0">
                                    <div className="progress-bar bg-light rounded-0" role="progressbar"
                                         style={{width: `${champion.status.difficulty.rate}%`}}
                                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">



                        </div>
                    </div>
                </div>
                <div id="carouselChampion" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner px-5">
                        <div className="carousel-item active">
                            <blockquote className="blockquote p-5">
                                <p className="mb-0">
                                    Godof is well known in the EU Battlerite scene as one of the best healer players but
                                    is not limited to only the healer role. He has played in many tournaments and
                                    currently resides in team “Impact” alongside “vAgue57” and “Dizzlarn”. He has
                                    reached Grand Champion every season on the ladder and managed to attain 1st place in
                                    3v3 teams during season 1. He has won 575 games with Oldur with only 165 losses.
                                </p>
                                <footer className="blockquote-footer mt-4 d-flex">
                                    <h5 className="font-weight-bold">— Godof</h5> <i className="fa fa-battlerite ml-2 fa-2x" aria-hidden="true"/>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <a className="carousel-control-prev w-5" href="#carouselChampion" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next w-5" href="#carouselChampion" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}