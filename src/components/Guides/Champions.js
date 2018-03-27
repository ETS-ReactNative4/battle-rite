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
                    },
                    spells: [
                        {
                            id: 0,
                            img: '',
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
                            img: '',
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
                            img: '',
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
                            img: '',
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
                            img: '',
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
                            img: '',
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
                            img: '',
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
                            img: '',
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
                            img: '',
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
                                    img: '',
                                    name: 'Into the realm',
                                    type: 'Survival',
                                    description: 'Other Side grants 6 additional healing and cooldown is reduced by 1s.'
                                },
                                {
                                    img: '',
                                    name: 'Phantasm',
                                    type: 'Support',
                                    description: 'Ally affected by Spirit Guide takes 40% less damage and enemy affected by Spirit Guide takes 25% more damage.'
                                },
                                {
                                    img: '',
                                    name: 'Shimmering bond',
                                    type: 'Support',
                                    description: 'Healing shared by Spirit Link increases to 70% from 50%.'
                                },
                                {
                                    img: '',
                                    name: 'Silver fang',
                                    type: 'Offense',
                                    description: 'Ghost Wolf range increases by 20% and the first hit deals 4 bonus damage.'
                                },
                                {
                                    img: '',
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
                                    img: '',
                                    name: 'Into the realm',
                                    type: 'Survival',
                                    description: 'Other Side grants 6 additional healing and cooldown is reduced by 1s.'
                                },
                                {
                                    img: '',
                                    name: 'Specter',
                                    type: 'Support',
                                    description: 'Other Side turns the target invisible for 1.5s.'
                                },
                                {
                                    img: '',
                                    name: 'Phantasm',
                                    type: 'Support',
                                    description: 'Ally affected by Spirit Guide takes 40% less damage and enemy affected by Spirit Guide takes 25% more damage.'
                                },
                                {
                                    img: '',
                                    name: 'Vengeful spirit',
                                    type: 'Control',
                                    description: 'Warping to Spirit Guide resets the cooldown of Spirit Rift.'
                                },
                                {
                                    img: '',
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
            spellSelected: 0,
            champtionId: this.props.location.pathname.split('/champions/')[1],
        }
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
                <div className="d-lg-block d-none">
                    <video autoPlay="true" loop src={champion.video} className="champion__video"/>
                </div>
                <div className="row d-lg-none d-block pt-5">
                    <div className="col-6 offset-3">
                        <img src={Poloma} className="w-100 border" alt={`${champion.name} image`}/>
                    </div>
                </div>
                <div className="row p-5">
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
                        <div className="text-uppercase h3 align-items-center justify-content-lg-start justify-content-center d-flex font-weight-light">
                            <i className={`fa fa-4x fa-${champion.type}`}/> {champion.type}
                        </div>
                        <h1 className="display-4 text-center text-uppercase text-dark bg-light">
                            {champion.name}
                        </h1>
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
                <div id="carouselChampion" className="carousel slide" data-wrap="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <blockquote className="blockquote p-md-5">
                                            <p className="mb-0">
                                                Godof is well known in the EU Battlerite scene as one of the best healer
                                                players but
                                                is not limited to only the healer role. He has played in many
                                                tournaments and
                                                currently resides in team “Impact” alongside “vAgue57” and “Dizzlarn”.
                                                He has
                                                reached Grand Champion every season on the ladder and managed to attain
                                                1st place in
                                                3v3 teams during season 1. He has won 575 games with Oldur with only 165
                                                losses.
                                            </p>
                                            <footer className="blockquote-footer mt-4 d-flex">
                                                <h5 className="font-weight-bold">— Godof</h5> <i
                                                className="fa fa-battlerite ml-2 fa-2x" aria-hidden="true"/>
                                            </footer>
                                        </blockquote>
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
                                <h3 className="font-weight-bold text-uppercase">Poloma</h3>
                                <h1 className="display-4 text-uppercase">The Psychopomp</h1>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h3 className="text-uppercase">Pros</h3>
                                        <div className="px-4 py-2 mb-3 bg-success">
                                            Good supporting kit
                                        </div>
                                        <div className="px-4 py-2 mb-3 bg-success">
                                            Very good ultimate
                                        </div>
                                        <div className="px-4 py-2 mb-3 bg-success">
                                            Good damage with Pixie (R)
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="text-uppercase">Cons</h3>
                                        <div className="px-4 py-2 mb-3 bg-danger">
                                            Weak without Otherside
                                        </div>
                                        <div className="px-4 py-2 mb-3 bg-danger">
                                            No burst healing
                                        </div>
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
                                                        className={`spell ${index === this.state.spellSelected ? 'active' : ''}`}
                                                        onClick={() => this.setState({spellSelected: index})}>
                                                        <p className="text-uppercase mb-0 text-center font-weight-bold">{data.keyword}</p>
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
                                return <div className={`carousel-item p-md-5 px-sm-0 p-4 ${index === 0 ? 'active' : ''}`}
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
                                                    className={`card__build card__build--${data.type.toLowerCase()} mb-3`}>
                                                    <div className="d-flex">
                                                        <img src=""
                                                             className={`card__img card__img--${data.type.toLowerCase()}`}
                                                             alt=""/>
                                                        <div>
                                                            <small className="text-light">{data.type}</small>
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
                        <div className="row mb-5">
                            <div className="col-12">
                                <h1 className="display-4 mb-3 text-uppercase">Synergy & Match-up</h1>
                                <div className="bg-light text-dark d-inline-block px-2">
                                    <small className="text-uppercase font-weight-bold">We are actually updating Synergy
                                        and Match-ups.
                                    </small>
                                </div>
                            </div>
                        </div>
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
                                                 style={{backgroundImage: `url(${data.image})`}}/>
                                        </div>
                                    </Link>
                                })}
                            </div>
                            <div className="col-6">
                                <div className="embed-responsive h-100">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/W4nb08MuJ2Q?rel=0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}