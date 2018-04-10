import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min'

import * as firebase from 'firebase'

// CSS
import './Champions.min.css'

export default class Champion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            champions: [
                {
                    id: 'poloma',
                    name: 'Poloma',
                    slogan: 'The Pyschopomp',
                    type: 'support',
                    quotes: [
                        {
                            content: 'Godof is well known in the EU Battlerite scene as one of the best healer players but is not limited to only the healer role. He has played in many tournaments and currently resides in team “Impact” alongside “vAgue57” and “Dizzlarn”. He has reached Grand Champion every season on the ladder and managed to attain 1st place in 3v3 teams during season 1. He has won 575 games with Oldur with only 165 losses.',
                            auth: 'Godof'
                        }
                    ],
                    pros: [
                        'Good supporting kit',
                        'Very good ultimate',
                        'Good damage with Pixie (R)'
                    ],
                    cons: [
                        'Weak without Otherside',
                        'No burst healing'
                    ],
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
                    },
                    spells: [
                        {
                            id: 0,
                            img: 'm1',
                            keyword: 'm1',
                            name: 'Soul Bolt',
                            description: 'Fire a Soul Bolt that deals 10 damage and inflicts Soul Bind on enemy hit. Heals 8 health and applies Spirit Link on ally hit.',
                            details: [
                                {
                                    name: 'Energy Gain',
                                    prop: '6%'
                                },
                                {
                                    name: 'Cooldown',
                                    prop: '0.2s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.3s'
                                }
                            ]
                        },
                        {
                            id: 1,
                            img: 'm2',
                            keyword: 'm2',
                            name: 'Other Side',
                            description: 'Send target ally into the spirit realm making them invulnerable and increases their movement speed by 40%. Heals self and nearby allies for 12 health when the effect ends.',
                            details: [
                                {
                                    name: 'Cooldown',
                                    prop: '12s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.1s'
                                },
                                {
                                    name: 'Duration',
                                    prop: '1.8s'
                                }
                            ]
                        },
                        {
                            id: 2,
                            img: 'space',
                            keyword: 'space',
                            name: 'Spirit Guide',
                            description: 'Summon a Spirit Guide that heals an ally for 16 health or deals 12 damage and knocks an enemy back. Can be cast again to teleport to the spirit.',
                            details: [
                                {
                                    name: 'Energy Gain',
                                    prop: '7%'
                                },
                                {
                                    name: 'Recast Duration',
                                    prop: '3s'
                                },
                                {
                                    name: 'Cooldown',
                                    prop: '8s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.2s'
                                }
                            ]
                        },
                        {
                            id: 3,
                            img: 'q',
                            keyword: 'q',
                            name: 'Spirit Rift',
                            description: 'Opens a rift that interrupts the next ability cast by nearby enemies. Inflicts Panic when an ability is interrupted. The panicked target runs at 15% increased movement speed.',
                            details: [
                                {
                                    name: 'Cooldown',
                                    prop: '10s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.1s'
                                },
                                {
                                    name: 'Interrupt Duration',
                                    prop: '0.5s'
                                }
                            ]
                        },
                        {
                            id: 4,
                            img: 'e',
                            keyword: 'e',
                            name: 'Ghost wolf',
                            description: 'Summon a Ghost Wolf that strikes up to 3 targets. Deals 20/16/12 damage and inflicts Soul Bind on each hit.',
                            details: [
                                {
                                    name: 'Energy Gain',
                                    prop: '/'
                                },
                                {
                                    name: 'Cooldown',
                                    prop: '6s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.7s'
                                }
                            ]
                        },
                        {
                            id: 5,
                            img: 'r',
                            keyword: 'r',
                            name: 'Pixie',
                            description: 'Summon a Pixie that mimics Soul Bolt. Mimicked Soul Bolts deals reduced damage and healing.',
                            details: [
                                {
                                    name: 'Cooldown',
                                    prop: '20s'
                                },
                                {
                                    name: 'Duration',
                                    prop: '4.5s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.1s'
                                },
                                {
                                    name: 'Energy Cost',
                                    prop: '25'
                                }
                            ]
                        },
                        {
                            id: 6,
                            img: 'f',
                            keyword: 'f',
                            name: 'Ancestral Spirit',
                            description: 'Summon an Ancestral Spirit at target location. Deals 12 damage and inflicts Fading Snare to enemies and heals allies for 16 health. The spirit releases a second wave of energy after 2s that deals 36 damage and heals 24 health.',
                            details: [
                                {
                                    name: 'Cooldown',
                                    prop: '1s'
                                },
                                {
                                    name: 'Duration',
                                    prop: '3s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.1s'
                                }
                            ]
                        },
                        {
                            id: 7,
                            img: 'exSpace',
                            keyword: 'exSpace',
                            name: 'Soul Transfer',
                            description: 'Summon a spirit that does 16 damage to enemies or heals 20 health to allies. You and the target swap locations on impact. Can be recast again to teleport to the spirit if no target is hit.',
                            details: [
                                {
                                    name: 'Cooldown',
                                    prop: '8s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.2s'
                                },
                                {
                                    name: 'Recast Duration',
                                    prop: '3s'
                                },
                                {
                                    name: 'Energy Cost',
                                    prop: '25'
                                }
                            ]
                        },
                        {
                            id: 8,
                            img: 'exQ',
                            keyword: 'exQ',
                            name: 'Soul Drain',
                            description: 'Opens a rift that drains 15 health and interrupts the next ability cast by nearby enemies. Inflicts a 1.2s Panic when an interrupt is triggered. The panicked target runs at 15% increased movement speed.',
                            details: [
                                {
                                    name: 'Cooldown',
                                    prop: '10s'
                                },
                                {
                                    name: 'Cast Time',
                                    prop: '0.1s'
                                },
                                {
                                    name: 'Energy Cost',
                                    prop: '25'
                                },
                                {
                                    name: 'Interrupt Duration',
                                    prop: '0.5s'
                                }
                            ]
                        },
                    ],
                    builds: [
                        {
                            id: 0,
                            name: 'Standard build (3v3)',
                            description: 'Great to survive and attack with no commit.',
                            cards: [
                                {
                                    spell: 'm2',
                                    name: 'Into the realm',
                                    type: 'Survival',
                                    description: 'Other Side grants 6 additional healing and cooldown is reduced by 1s.'
                                },
                                {
                                    spell: 'space',
                                    name: 'Phantasm',
                                    type: 'Support',
                                    description: 'Ally affected by Spirit Guide takes 40% less damage and enemy affected by Spirit Guide takes 25% more damage.'
                                },
                                {
                                    spell: 'm1',
                                    name: 'Shimmering bond',
                                    type: 'Support',
                                    description: 'Healing shared by Spirit Link increases to 70% from 50%.'
                                },
                                {
                                    spell: 'e',
                                    name: 'Silver fang',
                                    type: 'Offense',
                                    description: 'Ghost Wolf range increases by 20% and the first hit deals 4 bonus damage.'
                                },
                                {
                                    spell: 'q',
                                    name: 'Spiritual wind',
                                    type: 'Mobility',
                                    description: 'Spirit Rift increases your movement speed by 40% for 3s.'
                                },
                            ]
                        },
                        {
                            id: 1,
                            name: 'Anti-melee or 2v2',
                            description: 'Great against double melee or basically in 2v2 when a melee will rush and chase you to infinity and beyond! ',
                            cards: [
                                {
                                    spell: 'm2',
                                    name: 'Into the realm',
                                    type: 'Survival',
                                    description: 'Other Side grants 6 additional healing and cooldown is reduced by 1s.'
                                },
                                {
                                    spell: 'm2',
                                    name: 'Specter',
                                    type: 'Support',
                                    description: 'Other Side turns the target invisible for 1.5s.'
                                },
                                {
                                    spell: 'space',
                                    name: 'Phantasm',
                                    type: 'Support',
                                    description: 'Ally affected by Spirit Guide takes 40% less damage and enemy affected by Spirit Guide takes 25% more damage.'
                                },
                                {
                                    spell: 'space',
                                    name: 'Vengeful spirit',
                                    type: 'Control',
                                    description: 'Warping to Spirit Guide resets the cooldown of Spirit Rift.'
                                },
                                {
                                    spell: 'q',
                                    name: 'Spiritual wind',
                                    type: 'Mobility',
                                    description: 'Spirit Rift increases your movement speed by 40% for 3s.'
                                },
                            ]
                        },
                    ],
                    beginnerTips: [
                        'Don\'t hesitate to abuse otherside early round since you don\'t have any ultimate to dodge with it. But as the round goes longer, keep it for more important spells or you will get hardly punished.',
                        'Keep in mind that your only way to self sustain is by using your EX-Abilities or ultimate, so manage your energy wisely !',
                        'Don\'t use Q instantly if a melee champ goes on you : it will become very predictable and you will be more vulnerable by playing this way.'
                    ],
                    masteringTips: [
                        {
                            type: 'positioning',
                            name: 'Positioning',
                            description: 'Since Poloma does\'nt have a very reliable selfhealing, it\'s very important to dodge as many projectiles as you can.' +
                            '\n Make sure to position yourself in a way that your opponent isn\'t able to go for you without getting hardly punished.' +
                            '\n Stay close to your teammate versus an aggressive comp not to get isolated (which is the worst scenario as Poloma).'
                        },
                        {
                            type: 'advanced',
                            name: 'Advanced tips',
                            description: 'Don\'t use your ultimate randomly, since the best part of poloma\'s ultimate is the 1 sec invulnerable that you should use to dodge enemies ultimates and then getting a huge tempo swing with the heal combined with their missed ultimates. If the enemies don\'t have any big ultimate combos you need to dodge with it, you shouldn\'t be using your ultimate but spending energy on EX-Abilities to self sustain instead !' +
                            '\n Your EX-Space can be useful in many situations, such as making your ally out of danger, or as putting a vulnerable opponent near your teammate to punish him !'
                        },
                        {
                            type: 'sudden',
                            name: 'Sudden death',
                            description: 'Focus on getting all the green orbs abusing EX-Space, try to avoid too many unnecessary trades. Try to only trade with your opponnent when you have enough energy for EX-Space/EX-Q or with the help of Pixie (R).'
                        },
                        {
                            type: 'orb',
                            name: 'Orb control',
                            description: 'Your wolf is your biggest burst spell (20 damage) combined with an instant Space you can get a 32 damages combo on the orb.' +
                            '\n If you play as a premade team in 3s, some scenarios will allow you to use your ultimate on the orb to secure it.'
                        },
                    ],
                    synergy: []
                }
            ],
            championImg: '',
            data: '',
            spellSelected: 0,
            champtionId: this.props.location.pathname.split('/champions/')[1],
        }
        this.getImage('icon')
    }

    getImage(image) {
        firebase.storage().ref().child(`champions/${this.state.champtionId.toLowerCase()}/${image}.png`).getDownloadURL().then(url => {
            this.setState({championImg: url})
        })
    }

    // Update data to db.
    updateData() {
        // ref like: 'champions/jade
        firebase.database().ref('champions/ashka').set({
            name: 'ahmed'
        });
    }

    componentDidMount() {
        firebase.database().ref('champions')
            .once('value').then(data => {
            console.log(data.val())
            /*this.state.champions = data.val()
            this.setState(this.state)*/
        })
    }

    render() {
        let champion = this.state.champions.filter(
            champ => {
                return champ.id.toLowerCase().indexOf(this.state.champtionId) !== -1
            }
        )[0]
        let spellSelected = champion.spells.filter(
            spell => {
                return spell.id === this.state.spellSelected
            }
        )[0]
        let filteredChampions = this.state.champions.filter(
            data => {
                return data.type.indexOf(champion.type) !== -1 &&
                    data.id.indexOf(champion.id) === -1
            }
        )

        return (
            <div className="champion">
                <div className="video-container d-lg-block d-none">
                    <video autoPlay="true" loop
                           src={`../../../media/champions/${champion.name.toLowerCase()}/video.mp4`}
                           className="champion__video"/>
                </div>
                <div className="container py-5">
                    <div className="row d-lg-none d-block">
                        <div className="col-6 offset-3">
                            <img src={this.state.championImg}
                                 className="w-100 border" alt={`${champion.name.toLowerCase()}-champion`}/>
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
                                    <span className="nav-link text-white">{champion.name}</span>
                                </li>
                            </ul>
                            <div
                                className="text-uppercase h3 align-items-center justify-content-lg-start justify-content-center d-flex font-weight-light">
                                <i className={`fa fa-4x fa-${champion.type}`}/> {champion.type}
                            </div>
                            <h1 className="display-4 text-center text-uppercase text-dark bg-light">
                                {champion.name}
                            </h1>
                            <h6 className="text-center text-uppercase py-1 w-75 mx-auto text-dark bg-light">
                                {champion.slogan}
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
                </div>
                <div id="carouselChampion" className="carousel slide" data-wrap="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        {champion.quotes.map((data, index) => {
                                            return <blockquote className="blockquote p-md-5" key={index}>
                                                <p className="mb-0 text-capitalize">{data.content}</p>
                                                <footer className="blockquote-footer mt-4 d-flex">
                                                    <h5 className="font-weight-bold text-capitalize">— {data.auth}</h5>
                                                    <i
                                                        className="fa fa-battlerite ml-2 fa-2x" aria-hidden="true"/>
                                                </footer>
                                            </blockquote>
                                        })}
                                    </div>
                                </div>
                            </div>
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
                <div className="bg-black py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="font-weight-bold text-uppercase">{champion.name}</h3>
                                <h1 className="display-4 text-uppercase">{champion.slogan}</h1>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h3 className="text-uppercase">Pros</h3>
                                        {champion.pros.map((data, index) => {
                                            return <div className="px-4 py-2 mb-3 bg-success" key={index}>
                                                {data}
                                            </div>
                                        })}
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="text-uppercase">Cons</h3>
                                        {champion.cons.map((data, index) => {
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
                                            {champion.spells.map((data, index) => {
                                                return <div className="col-lg-4 col-sm-6 d-flex justify-content-center"
                                                            key={index}>
                                                    <div
                                                        style={{backgroundImage: `url('../../../media/champions/${champion.name.toLowerCase()}/spells/${data.keyword.toLowerCase()}.png')`}}
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
                <div id="carouselBuilds" className="carousel slide" data-wrap="false">
                    <div className="carousel-inner px-sm-5">
                        <div className="container">
                            {champion.builds.map((data, index) => {
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
                                                    className={`card__build bg-dark2 card__build--${data.type.toLowerCase()} mb-3`}>
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
                </div>
                <div className="bg-black py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="display-4 text-uppercase mb-5">Basic guide</h1>
                                <h4 className="font-weight-bold mb-3 text-uppercase">Beginner tips</h4>
                            </div>
                            {champion.beginnerTips.map((data, index) => {
                                return <div className="col-sm-6" key={index}>
                                    <p className="font-weight-light">{data}</p>
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
                            {champion.masteringTips.map((data, index) => {
                                return <div className="col-sm-6" key={index}>
                                    <h4 className="font-weight-bold mb-2 text-uppercase">
                                        <i className={`fa fa-2x fa-${data.type}`}/>
                                        {data.name}
                                    </h4>
                                    <p className="font-weight-light">{data.description}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="bg-black py-5">
                    <div className="container">
                        {champion.synergy.length !== 0 ?
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
                                <h3 className="text-uppercase mb-0">A video with {champion.name}</h3>
                                <Link className="nav-link p-0" to="/videos">
                                    <p className="text-uppercase font-weight-bold text-secondary">
                                        Show all videos <i className="fa fa-myarrow-right"/>
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                {filteredChampions.map((data, index) => {
                                    return <Link className="guide__container"
                                                 to={`/champions/${data.name.toLowerCase().replace(/\s/g, '')}`}
                                                 key={index}>
                                        <div className="guide__box">
                                            <div className="guide__items"
                                                 style={{backgroundImage: `url('../../../media/champions/${data.name.toLowerCase()}/icon.png')`}}/>
                                        </div>
                                    </Link>
                                })}
                            </div>
                            <div className="col-6">
                                <div className="embed-responsive h-100">
                                    <iframe className="embed-responsive-item" title={`${champion.name} video`}
                                            src="https://www.youtube.com/embed/W4nb08MuJ2Q?rel=0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}