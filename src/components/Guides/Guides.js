import React, {Component} from 'react'
import {Link} from '../../../node_modules/react-router-dom/umd/react-router-dom.min.js'

// CSS
import './Guides.min.css'

export default class Guides extends Component {
    constructor(props) {
        super(props)
        this.state = {
            champions: [
                {
                    id: 'alysia',
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
                    name: 'Poloma',
                    slogan: 'The Pyschopomp',
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
                },
                {
                    id: 'raigon',
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
                                return <Link className="guide__container"
                                             to={`/champions/${data.name.toLowerCase().replace(/\s/g, '')}`}
                                             key={index}>
                                    <div className="guide__box">
                                        <div className="guide__items"
                                             style={{backgroundImage: `url('../../../media/champions/${data.name.toLowerCase().replace(/\s/g, '')}/icon.png')`}}>
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