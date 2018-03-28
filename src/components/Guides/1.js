let x = {
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
    ]
},