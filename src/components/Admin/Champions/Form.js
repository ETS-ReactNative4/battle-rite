import React, {Component} from 'react'
import {NavLink, Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

import * as firebase from 'firebase'

import './champion.min.css'

import uploadIcon from '../../../../src/images/icons/upload.svg'
import playIcon from '../../../../src/images/icons/play.svg'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            hp: '',
            slogan: '',
            avatar: '',
            video: '',
            icon: '',
            type: 'melee',
            pros: [],
            cons: [],
            bio: '',
            masteringGuide: [],
            basicGuide: [],
            status: {
                damages: {
                    props: '',
                    rate: 0
                },
                survivability: {
                    props: '',
                    rate: 0
                },
                protection: {
                    props: '',
                    rate: 0
                },
                control: {
                    props: '',
                    rate: 0
                },
                difficulty: {
                    props: '',
                    rate: 0
                },
            },
            combos: [
                {
                    video: '',
                    difficulty: 0,
                    skillCombo: '',
                    description: ''
                },
                {
                    video: '',
                    difficulty: 0,
                    skillCombo: '',
                    description: ''
                },
            ],
            spells: [
                {
                    name: '',
                    description: '',
                    img: '',
                    keyword: '',
                    type: [],
                    cost: '',
                    details: [
                        {
                            name: '',
                            prop: ''
                        },
                    ]
                }
            ],
            battlerites: [
                {
                    name: '',
                    description: '',
                    img: '',
                    keyword: '',
                    type: '',
                    ex: false,
                },
                {
                    name: '',
                    description: '',
                    img: '',
                    keyword: '',
                    type: '',
                    ex: false,
                },
            ],
            quotes: [
                {
                    name: '',
                    sound: ''
                },
            ],

            battleriteTypes: ['offense', 'survival', 'mixed', 'Control', 'utility', 'mobility', 'support',],
            spellTypes: ['mobility', 'reflect', 'cloak', 'channel', 'aoe', 'projectile', 'wall', 'shield', 'melee', 'block',
                'counter', 'debuff', 'self buff', 'buff', 'heal', 'dispel', 'summon', 'cleave',],

            // Temp objects
            tempPros: '',
            tempCons: '',
            tempMasteringGuideTitle: '',
            tempMasteringGuideDescription: '',
            tempBasicGuideTitle: '',
            tempBasicGuideDescription: '',

            // Progress bars
            progressbarIcon: 0,
            progressbarAvatar: 0,
            progressbarVideo: 0,
            tempComboProgressbar: [0],
            tempSpellProgressbar: [0],
            tempBattleriteProgressbar: [0],
            tempQuotesProgressbar: [0],

            editChampion: this.props.match.params.champion,
        }
    }

    componentDidMount() {
        window.onbeforeunload = e => {
            e = e || window.event
            console.log(window.event)
            if (e) e.returnValue = 'Sure?'
            return 'Sure?'
        }
        try {
            let champion = this.state.editChampion.toLowerCase().replace(/\s/g, '')
            firebase.database().ref(`champions/${champion}`)
                .once('value').then(data => {
                this.setState(data.val())
                console.log(data.val())
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    // Pros
    setPros = () => {
        if (this.state.tempPros === '') return false
        let pros = this.state.pros
        pros.push(this.state.tempPros)
        this.setState({
            tempPros: '',
            pros
        })
    }

    // Cons
    setCons = () => {
        if (this.state.tempCons === '') return false
        let cons = this.state.cons
        cons.push(this.state.tempCons)
        this.setState({
            tempCons: '',
            cons
        })
    }

    // Mastering guide
    setMasteringGuide = () => {
        if (this.state.tempMasteringGuideTitle === '' && this.state.tempMasteringGuideDescription === '') return false
        let masteringGuide = this.state.masteringGuide
        masteringGuide.push({
            title: this.state.tempMasteringGuideTitle,
            description: this.state.tempMasteringGuideDescription
        })
        this.setState({
            tempMasteringGuideTitle: '',
            tempMasteringGuideDescription: '',
            masteringGuide
        })
    }

    // Basic guide
    setBasicGuide = () => {
        if (this.state.tempBasicGuideTitle === '' && this.state.tempBasicGuideDescription === '') return false
        let basicGuide = this.state.basicGuide
        basicGuide.push({
            title: this.state.tempBasicGuideTitle,
            description: this.state.tempBasicGuideDescription
        })
        this.setState({
            tempBasicGuideTitle: '',
            tempBasicGuideDescription: '',
            basicGuide
        })
    }

    /**
     *
     * @param event For get obj file from the input
     * @param obj State name using to know what is the state wanna edit
     * @param subType Child state like: parent:{child:0}
     */
    setStatus = (event, obj, subType) => {
        let status = this.state.status
        status[obj][subType] = event.target.value
        this.setState({status})
    }

    /**
     *
     * @param event For get obj file from the input
     * @param type File extension like icon, video
     * @param typePath Path of obj like : /combos
     * @param num Number of cards meaning obj number
     */
    uploadMedia = (event, type, typePath = '', num) => {
        // Get file
        let file = event.target.files[0]
        let champion = this.state.name.toLowerCase().replace(/\s/g, '')

        // Create a storage ref
        let storageRef = firebase.storage()
            .ref(`champions/${champion}${typePath}/${
                num !== undefined ? num : type
                }`)

        // Upload file
        let task = storageRef.put(file)
        let self = this

        // Update progress bar
        task.on('state_changed',
            /**
             *
             * @param snapshot File obj when uploading
             */
            function progress(snapshot) {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                switch (type) {
                    case 'icon':
                        if (num !== undefined) {
                            let tempSpellProgressbar = self.state.tempSpellProgressbar
                            tempSpellProgressbar[num] = percentage
                            self.setState(tempSpellProgressbar)
                        } else {
                            self.setState({progressbarIcon: percentage})
                        }
                        break
                    case 'avatar':
                        self.setState({progressbarAvatar: percentage})
                        break
                    case 'video':
                        if (num !== undefined) {
                            let tempComboProgressbar = self.state.tempComboProgressbar
                            tempComboProgressbar[num] = percentage
                            self.setState(tempComboProgressbar)
                        } else {
                            self.setState({progressbarVideo: percentage})
                        }
                        break
                    case 'sound':
                        let tempQuotesProgressbar = self.state.tempQuotesProgressbar
                        tempQuotesProgressbar[num] = percentage
                        self.setState(tempQuotesProgressbar)
                        break
                    default:
                        break
                }
            },

            function error(err) {
                console.log(err)
            },

            function complete() {
                if (num !== undefined) {
                    switch (type) {
                        case 'video': // Combos
                            let tempComboProgressbar = self.state.tempComboProgressbar
                            tempComboProgressbar[num] = 0

                            let combos = self.state.combos
                            combos[num].video = task.snapshot.downloadURL
                            self.setState({combos, tempComboProgressbar: tempComboProgressbar})
                            break
                        case 'icon': // Spells & battlerites
                            if (typePath === '/spells') {
                                let tempSpellProgressbar = self.state.tempSpellProgressbar
                                tempSpellProgressbar[num] = 0

                                let spells = self.state.spells
                                spells[num].img = task.snapshot.downloadURL
                                self.setState({spells, tempSpellProgressbar})

                                let spellIcon = document.getElementById(`spellIcon-${num}`).files[0].name
                                document.getElementById(`spellIconLabel-${num}`).innerText = spellIcon
                            } else if (typePath === '/battlerites') {
                                let tempBattleriteProgressbar = self.state.tempBattleriteProgressbar
                                tempBattleriteProgressbar[num] = 0

                                let battlerites = self.state.battlerites
                                battlerites[num].img = task.snapshot.downloadURL
                                self.setState({battlerites, tempBattleriteProgressbar})

                                let battleriteIcon = document.getElementById(`battleriteIcon-${num}`).files[0].name
                                document.getElementById(`battleriteIconLabel-${num}`).innerText = battleriteIcon
                            }
                            break
                        case 'sound': // Quotes
                            let tempQuotesProgressbar = self.state.tempQuotesProgressbar
                            tempQuotesProgressbar[num] = 0

                            let quotes = self.state.quotes
                            quotes[num].sound = task.snapshot.downloadURL
                            self.setState({quotes, tempQuotesProgressbar})
                            break
                        default:
                            //
                            break
                    }
                } else {
                    switch (type) {
                        case 'video':
                            self.setState({video: task.snapshot.downloadURL})

                            let champUploadVideoLabel = document.getElementById("champUploadVideo").files[0].name
                            document.getElementById("champUploadVideoLabel").innerText = champUploadVideoLabel
                            break
                        case 'icon':
                            self.setState({icon: task.snapshot.downloadURL})

                            let champUploadIcon = document.getElementById("champUploadIcon").files[0].name
                            document.getElementById("champUploadIconLabel").innerText = champUploadIcon
                            break
                        case 'avatar':
                            self.setState({avatar: task.snapshot.downloadURL})

                            let champUploadAvatar = document.getElementById("champUploadAvatar").files[0].name
                            document.getElementById("champUploadAvatarLabel").innerText = champUploadAvatar
                            break
                        default:
                            //
                            break
                    }
                }
            },
        )
    }

    /*** Combos ***/
    /**
     *
     * @param target For get obj file from the input || value directly like difficulty rates
     * @param obj State name using to know what is the state wanna edit
     * @param num Number of cards meaning obj number
     */
    setCombo = (target, obj, num) => {
        let combos = this.state.combos
        if (obj === 'difficulty') {
            combos[num][obj] = target
        } else {
            combos[num][obj] = target.target.value
        }
        this.setState({combos})
    }

    /**
     *
     * @param key Difficulty rate from 1 ~ 5
     * @param num Number of the obj
     */
    difficultyRate = (key, num) => {
        let combos = this.state.combos
        combos[num].difficulty = key
        this.setState({combos})
    }

    addCombo = () => {
        let arr = this.state.combos
        let tempCombos = {
            video: '',
            difficulty: 0,
            skillCombo: '',
            description: '',
        }
        arr.push(tempCombos)
        this.setState({combos: arr})
    }
    /*** Combos ***/

    /*** Spells ***/
    /**
     *
     * @param event For get obj file from the input
     * @param obj State name using to know what is the state wanna edit
     * @param num Number of cards meaning obj number
     * @param detailsType Child state like: parent:{child:0}
     * @param detailsIndex Number of obj in details array
     */
    setSpell = (event, obj, num, detailsType, detailsIndex) => {
        let spells = this.state.spells
        if (obj === 'type') {
            spells[num][obj] = this.getSelectValues(event)
        } else if (obj === 'cost') {
            spells[num][obj] = event
        } else {
            if (detailsType === undefined) {
                spells[num][obj] = event.target.value
            } else {
                spells[num][obj][detailsIndex][detailsType] = event.target.value
            }
        }
        this.setState({spells})
    }

    /** Catch values from multiple select
     *
     * @param select Taking the select element
     * @returns {Array} Return array of values
     */
    getSelectValues = select => {
        let result = []
        for (let option of select && select.options) {
            if (option.selected) result.push(option.value || option.text)
        }
        return result
    }

    /** Delete details inputs (name, prop) in spell
     *
     * @param key Obj number
     * @param index details index
     */
    deleteSpellDetails = (key, index) => {
        let spells = this.state.spells
        let arr = new Set(spells[key].details)
        arr.forEach(element => {
            if (this.state.spells[key].details[index] === element) arr.delete(element)
        })
        spells[key].details = [...arr]
        this.setState({spells})
    }

    addSpell = () => {
        let arr = this.state.spells
        let tempSpells = {
            name: '',
            description: '',
            img: '',
            keyword: '',
            type: [],
            cost: '',
            details: [
                {
                    name: '',
                    prop: ''
                },
            ]
        }
        arr.push(tempSpells)
        this.setState({spells: arr})
    }

    /**
     *
     * @param num Number of cards meaning obj number
     */
    addSpellDetails = num => {
        let arr = this.state.spells
        let details = {
            name: '',
            prop: ''
        }
        arr[num].details.push(details)
        this.setState({spells: arr})
    }
    /*** Spells ***/

    /*** Battlerites ***/
    /**
     *
     * @param event For get obj file from the input
     * @param obj State name using to know what is the state wanna edit
     * @param num Number of cards meaning obj number
     */
    setBattlerite = (event, obj, num) => {
        let battlerites = this.state.battlerites
        if (obj === 'type') {
            battlerites[num][obj] = event
        } else if (obj === 'ex') {
            battlerites[num][obj] = event.target.checked
        } else {
            battlerites[num][obj] = event.target.value
        }
        this.setState({battlerites})
    }

    addBattlerite = () => {
        let arr = this.state.battlerites
        let tempBattlerites = {
            name: '',
            description: '',
            img: '',
            keyword: '',
            type: '',
            ex: false,
        }
        arr.push(tempBattlerites)
        this.setState({battlerites: arr})
    }
    /*** Battlerites ***/

    /*** Quotes ***/
    /**
     *
     * @param event For get obj file from the input
     * @param obj State name using to know what is the state wanna edit
     * @param num Number of cards meaning obj number
     */
    setQuote = (event, obj, num) => {
        let quotes = this.state.quotes
        quotes[num][obj] = event.target.value
        this.setState({quotes})
    }

    addQuoteSound = () => {
        let arr = this.state.quotes
        arr.push({
            name: '',
            sound: ''
        })
        this.setState({quotes: arr})
    }
    /*** Quotes ***/

    /**
     *
     * @param key Obj number
     * @param obj State name using to know what is the state wanna edit
     */
    removeElement = (key, obj) => {
        let arr = new Set(this.state[obj])
        arr.forEach(element => {
            if (this.state[obj][key] === element) arr.delete(element)
        })
        this.setState({[obj]: [...arr]})
    }

    deleteChampion = () => {
        let result = window.confirm('Are you sure?')
        if (!result) return false
        firebase.database().ref(`champions/${this.state.editChampion}`).remove()
        this.props.history.goBack()
    }

    saveChampion = () => {
        let champion = this.state.name.toLowerCase().replace(/\s/g, '')
        let champions = {
            name: this.state.name,
            slogan: this.state.slogan,
            avatar: this.state.avatar,
            hp: this.state.hp,
            video: this.state.video,
            icon: this.state.icon,
            type: this.state.type,
            pros: this.state.pros,
            cons: this.state.cons,
            bio: this.state.bio,
            masteringGuide: this.state.masteringGuide,
            basicGuide: this.state.basicGuide,
            status: this.state.status,
            combos: this.state.combos,
            spells: this.state.spells,
            battlerites: this.state.battlerites,
            quotes: this.state.quotes,
        }
        try {
            firebase.database().ref(`champions/${champion}`).set(champions).then(
                // this.props.history.goBack()
            )
        } catch (e) {
            console.log(e.message)
            console.log(`Champions: ${champions}`)
        }
    }

    render() {
        return (
            <div className="main-content aChampions col-12 py-4">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-6">
                                <div className="form-group">
                                    <label htmlFor="champName">
                                        <small className="text-danger mr-1">*</small>
                                        Name</label>
                                    <input type="text" id="champName" value={this.state.name}
                                           onChange={e => this.setState({name: e.target.value})}
                                           className="form-control" placeholder="Champion name"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3">
                                <div className="form-group">
                                    <label htmlFor="champHP">
                                        <small className="text-danger mr-1">*</small>
                                        HP</label>
                                    <input type="text" id="champHP" value={this.state.hp}
                                           onChange={e => this.setState({hp: e.target.value})}
                                           className="form-control" placeholder="Champion HP"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3">
                                <label htmlFor="champType">
                                    <small className="text-danger mr-1">*</small>
                                    Type</label>
                                <div className="btn-group w-100">
                                    <button type="button" id="champType"
                                            className="btn btn-block rounded border btn-light dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                        {this.state.type}
                                    </button>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item"
                                                onClick={() => this.setState({type: 'melee'})}>Melee
                                        </button>
                                        <button className="dropdown-item"
                                                onClick={() => this.setState({type: 'support'})}>Support
                                        </button>
                                        <button className="dropdown-item"
                                                onClick={() => this.setState({type: 'ranged'})}>Ranged
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="champSolgan">
                                        <small className="text-danger mr-1">*</small>
                                        Slogan</label>
                                    <input type="text" id="champSolgan" value={this.state.slogan}
                                           onChange={e => this.setState({slogan: e.target.value})}
                                           className="form-control" placeholder="Champion slogan"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="champUploadIcon"><span className="text-danger mr-1">*</span>Icon</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <Link to={this.state.icon !== '' ? this.state.icon : 'javascript:void(0)'}
                                              target="_blank">
                                            <button
                                                className={`btn btn-secondary rounded-left ${this.state.icon !== '' ? '' : 'disabled'}`}
                                                type="button">
                                                Show
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" accept="image/*"
                                               onChange={e => this.uploadMedia(e, 'icon')}
                                               id="champUploadIcon"/>
                                        <label className="custom-file-label" id="champUploadIconLabel"
                                               htmlFor="champUploadIcon">Upload champion
                                            icon</label>
                                    </div>
                                </div>
                                <div className="progress bg-transparent h-25 mb-3 rounded-0">
                                    <div
                                        className="progress-bar h-25 progress-bar-striped progress-bar-animated rounded-0"
                                        role="progressbar" style={{width: `${this.state.progressbarIcon}%`}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="champUploadIcon"><span
                                    className="text-danger mr-1">*</span>Video</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <Link to={this.state.video !== '' ? this.state.video : 'javascript:void(0)'}
                                              target="_blank">
                                            <button
                                                className={`btn btn-secondary rounded-left ${this.state.video !== '' ? '' : 'disabled'}`}
                                                type="button">
                                                Show
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" accept="video/*"
                                               onChange={e => this.uploadMedia(e, 'video')}
                                               id="champUploadVideo"/>
                                        <label className="custom-file-label" id="champUploadVideoLabel"
                                               htmlFor="champUploadVideo">Upload champion
                                            video</label>
                                    </div>
                                </div>
                                <div className="progress bg-transparent h-25 mb-3 rounded-0">
                                    <div
                                        className="progress-bar h-25 progress-bar-striped progress-bar-animated rounded-0"
                                        role="progressbar" style={{width: `${this.state.progressbarVideo}%`}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="champUploadIcon"><span
                                    className="text-danger mr-1">*</span>Avatar</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <Link to={this.state.avatar !== '' ? this.state.avatar : 'javascript:void(0)'}
                                              target="_blank">
                                            <button
                                                className={`btn btn-secondary rounded-left ${this.state.avatar !== '' ? '' : 'disabled'}`}
                                                type="button">
                                                Show
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" accept="image/*"
                                               onChange={e => this.uploadMedia(e, 'avatar')}
                                               id="champUploadAvatar"/>
                                        <label className="custom-file-label" id="champUploadAvatarLabel"
                                               htmlFor="champUploadAvatar">Upload champion
                                            avatar</label>
                                    </div>
                                </div>
                                <div className="progress bg-transparent h-25 mb-3 rounded-0">
                                    <div
                                        className="progress-bar h-25 progress-bar-striped progress-bar-animated rounded-0"
                                        role="progressbar" style={{width: `${this.state.progressbarAvatar}%`}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex">
                                    <div className="form-group w-100">
                                        <label htmlFor="champPros">
                                            <small className="text-danger mr-1">*</small>
                                            Pros</label>
                                        <div className="input-group">
                                            <input type="text" id="champPros" value={this.state.tempPros}
                                                   onChange={e => this.setState({tempPros: e.target.value})}
                                                   className="form-control"
                                                   placeholder="Pros"/>
                                            <div className="input-group-append">
                                                <button className="btn font-weight-bold rounded-right input-group-text"
                                                        onClick={this.setPros}>+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-self-end mb-3">
                                        {this.state.pros.length !== 0 ?
                                            <div className="modal fade" id="prosModal" role="dialog">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content bg-dark">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Pros</h5>
                                                            <button type="button" className="close text-light"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <ul>
                                                                {this.state.pros.map((data, key) => {
                                                                    return <li key={key}>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            {data}
                                                                            <button type="button"
                                                                                    onClick={() => this.removeElement(key, 'pros')}
                                                                                    className="btn btn-sm badge badge-danger"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close"
                                                                                    title="Delete!">Delete
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-light"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : ''}
                                        <button
                                            className={`btn btn-secondary border-secondary border ml-4 ${this.state.pros.length !== 0 ? '' : 'disabled'}`}
                                            data-toggle="modal" data-target="#prosModal">Show
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex">
                                    <div className='form-group w-100'>
                                        <label htmlFor="champCons">
                                            <small className="text-danger mr-1">*</small>
                                            Cons</label>
                                        <div className="input-group">
                                            <input type="text" id="champCons" value={this.state.tempCons}
                                                   onChange={e => this.setState({tempCons: e.target.value})}
                                                   className="form-control"
                                                   placeholder="Cons"/>
                                            <div className="input-group-append">
                                                <button className="btn font-weight-bold rounded-right input-group-text"
                                                        onClick={this.setCons}>+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-self-end mb-3">
                                        {this.state.cons.length !== 0 ?
                                            <div className="modal fade" id="consModal" role="dialog">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content bg-dark">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Cons</h5>
                                                            <button type="button" className="close text-light"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <ul>
                                                                {this.state.cons.map((data, key) => {
                                                                    return <li key={key}>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            {data}
                                                                            <button type="button"
                                                                                    onClick={() => this.removeElement(key, 'cons')}
                                                                                    className="btn btn-sm badge badge-danger"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close"
                                                                                    title="Delete!">Delete
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-light"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : ''}
                                        <button
                                            className={`btn btn-secondary border-secondary border ml-4 ${this.state.cons.length !== 0 ? '' : 'disabled'}`}
                                            data-toggle="modal" data-target="#consModal">Show
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="champBio">
                                        <small className="text-danger mr-1">*</small>
                                        Bio</label>
                                    <textarea id="champBio" className="form-control" value={this.state.bio}
                                              cols="30"
                                              rows="5"
                                              onChange={e => this.setState({bio: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card bg-dark border border-secondary mt-3 text-light">
                                    <div className="card-body">
                                        <h4 className="card-title" data-anchor="link" id="masteringGuide">Mastering
                                            Guide
                                            <Link className="anchorjs-link" to="#masteringGuide"
                                                  aria-label="Anchor">#</Link>
                                        </h4>
                                        <div className="d-flex flex-column">
                                            <div className="form-group w-100">
                                                <label htmlFor="champMasteringGuideTitle">Title</label>
                                                <input type="text" id="champMasteringGuideTitle"
                                                       value={this.state.tempMasteringGuideTitle}
                                                       onChange={e => this.setState({tempMasteringGuideTitle: e.target.value})}
                                                       className="form-control"
                                                       placeholder="Mastering Guide Title"/>

                                            </div>
                                            <div className="form-group w-100">
                                                <label htmlFor="champMasteringGuideDescription">Description</label>
                                                <textarea id="champMasteringGuideDescription"
                                                          value={this.state.tempMasteringGuideDescription}
                                                          onChange={e => this.setState({tempMasteringGuideDescription: e.target.value})}
                                                          className="form-control"
                                                          placeholder="Mastering Guide Description" cols="30" rows="5"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn bg-transparent text-light"
                                                    onClick={this.setMasteringGuide}>Add
                                            </button>
                                            <button
                                                className={`btn btn-secondary ${this.state.masteringGuide.length !== 0 ? '' : 'disabled'}`}
                                                data-toggle="modal" data-target="#masteringGuideModal">Show
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {this.state.masteringGuide.length !== 0 ?
                                    <div className="modal fade" id="masteringGuideModal" role="dialog">
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="modal-content bg-dark">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Mastering Guide</h5>
                                                    <button type="button" className="close text-light"
                                                            data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        {this.state.masteringGuide.map((data, key) => {
                                                            return <div className="col-lg-6" key={key}>
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center">
                                                                    <h4 className="text-uppercase">{data.title}</h4>
                                                                    <button type="button"
                                                                            onClick={() => this.removeElement(key, 'masteringGuide')}
                                                                            className="btn btn-sm badge badge-danger"
                                                                            data-dismiss="modal" aria-label="Close"
                                                                            title="Delete!">Delete
                                                                    </button>
                                                                </div>
                                                                <p className="font-weight-light text-capitalize"
                                                                   style={{whiteSpace: 'pre-wrap'}}>
                                                                    {data.description}
                                                                </p>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-light"
                                                            data-dismiss="modal">Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''}
                            </div>
                            <div className="col-lg-6">
                                <div className="card bg-dark border border-secondary mt-3 text-light">
                                    <div className="card-body">
                                        <h4 className="card-title" data-anchor="link" id="basicGuide">Basic Guide
                                            <Link className="anchorjs-link" to="#basicGuide" aria-label="Anchor"
                                            >#</Link>
                                        </h4>
                                        <div className="d-flex flex-column">
                                            <div className="form-group w-100">
                                                <label htmlFor="champBasicGuideTitle">Title</label>
                                                <input type="text" id="champBasicGuideTitle"
                                                       value={this.state.tempBasicGuideTitle}
                                                       onChange={e => this.setState({tempBasicGuideTitle: e.target.value})}
                                                       className="form-control"
                                                       placeholder="Basic Guide Title"/>

                                            </div>
                                            <div className="form-group w-100">
                                                <label htmlFor="champBasicGuideDescription">Description</label>
                                                <textarea id="champBasicGuideDescription"
                                                          value={this.state.tempBasicGuideDescription}
                                                          onChange={e => this.setState({tempBasicGuideDescription: e.target.value})}
                                                          className="form-control"
                                                          placeholder="Basic Guide Description" cols="30" rows="5"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn bg-transparent text-light"
                                                    onClick={this.setBasicGuide}>Add
                                            </button>
                                            <button
                                                className={`btn btn-secondary ${this.state.basicGuide.length !== 0 ? '' : 'disabled'}`}
                                                data-toggle="modal" data-target="#basicGuideModal">Show
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {this.state.basicGuide.length !== 0 ?
                                    <div className="modal fade" id="basicGuideModal" role="dialog">
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="modal-content bg-dark">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Basic Guide</h5>
                                                    <button type="button" className="close text-light"
                                                            data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        {this.state.basicGuide.map((data, key) => {
                                                            return <div className="col-lg-6" key={key}>
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center">
                                                                    <h4 className="text-uppercase">{data.title}</h4>
                                                                    <button type="button"
                                                                            onClick={() => this.removeElement(key, 'basicGuide')}
                                                                            className="btn btn-sm badge badge-danger"
                                                                            data-dismiss="modal" aria-label="Close"
                                                                            title="Delete!">Delete
                                                                    </button>
                                                                </div>
                                                                <p className="font-weight-light text-capitalize"
                                                                   style={{whiteSpace: 'pre-wrap'}}>
                                                                    {data.description}
                                                                </p>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-light"
                                                            data-dismiss="modal">Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="p-4 rounded border border-secondary text-dark bg-light">
                                    <h4 className="mb-3" data-anchor="link" id="status">Status
                                        <Link className="anchorjs-link" to="#status" aria-label="Anchor">#</Link>
                                    </h4>
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <NavLink className="nav-item nav-link text-dark active"
                                                     id="status-damages-tab"
                                                     data-toggle="tab"
                                                     to="#damages-nav" role="tab" aria-controls="damages-nav"
                                                     aria-selected="true">
                                                Damages
                                            </NavLink>
                                            <NavLink className="nav-item nav-link text-dark"
                                                     id="status-survivability-tab"
                                                     data-toggle="tab"
                                                     to="#survivability-nav" role="tab"
                                                     aria-controls="survivability-nav"
                                                     aria-selected="true">
                                                Survivability
                                            </NavLink>
                                            <NavLink className="nav-item nav-link text-dark" id="status-protection-tab"
                                                     data-toggle="tab"
                                                     to="#protection-nav" role="tab" aria-controls="protection-nav"
                                                     aria-selected="true">
                                                Protection
                                            </NavLink>
                                            <NavLink className="nav-item nav-link text-dark" id="status-control-tab"
                                                     data-toggle="tab"
                                                     to="#control-nav" role="tab" aria-controls="control-nav"
                                                     aria-selected="true">
                                                Control
                                            </NavLink>
                                            <NavLink className="nav-item nav-link text-dark" id="status-difficulty-tab"
                                                     data-toggle="tab"
                                                     to="#difficulty-nav" role="tab" aria-controls="difficulty-nav"
                                                     aria-selected="true">
                                                Difficulty
                                            </NavLink>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="status-tabContent">
                                        <div className="tab-pane fade show active" id="damages-nav" role="tabpanel"
                                             aria-labelledby="status-damages-tab">
                                            <div className="d-flex">
                                                <div className="form-group mb-0 w-100 mt-3">
                                                    <label htmlFor="champStatusDamagesProp">Prop</label>
                                                    <input type="text" id="champStatusDamagesProp"
                                                           className="form-control"
                                                           value={this.state.status.damages.props}
                                                           onChange={e => this.setStatus(e, 'damages', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusDamagesRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusDamagesRate"
                                                           className="form-control"
                                                           value={this.state.status.damages.rate}
                                                           onChange={e => this.setStatus(e, 'damages', 'rate')}/>
                                                </div>
                                            </div>
                                            <div className="progress mt-2 rounded-0">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated rounded-0"
                                                    role="progressbar"
                                                    style={{width: `${this.state.status.damages.rate}%`}}
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="survivability-nav" role="tabpanel"
                                             aria-labelledby="nav-survivability-tab">
                                            <div className="d-flex">
                                                <div className="form-group mb-0 w-100 mt-3">
                                                    <label htmlFor="champStatusSurvivabilityProp">Prop</label>
                                                    <input type="text" id="champStatusSurvivabilityProp"
                                                           className="form-control"
                                                           value={this.state.status.survivability.props}
                                                           onChange={e => this.setStatus(e, 'survivability', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusSurvivabilityRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusSurvivabilityRate"
                                                           className="form-control"
                                                           value={this.state.status.survivability.rate}
                                                           onChange={e => this.setStatus(e, 'survivability', 'rate')}/>
                                                </div>
                                            </div>
                                            <div className="progress mt-2 rounded-0">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated rounded-0"
                                                    role="progressbar"
                                                    style={{width: `${this.state.status.survivability.rate}%`}}
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="protection-nav" role="tabpanel"
                                             aria-labelledby="status-protection-tab">
                                            <div className="d-flex">
                                                <div className="form-group mb-0 w-100 mt-3">
                                                    <label htmlFor="champStatusProtectionProp">Prop</label>
                                                    <input type="text" id="champStatusProtectionProp"
                                                           className="form-control"
                                                           value={this.state.status.protection.props}
                                                           onChange={e => this.setStatus(e, 'protection', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusProtectionRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusProtectionRate"
                                                           className="form-control"
                                                           value={this.state.status.protection.rate}
                                                           onChange={e => this.setStatus(e, 'protection', 'rate')}/>
                                                </div>
                                            </div>
                                            <div className="progress mt-2 rounded-0">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated rounded-0"
                                                    role="progressbar"
                                                    style={{width: `${this.state.status.protection.rate}%`}}
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="control-nav" role="tabpanel"
                                             aria-labelledby="status-control-tab">
                                            <div className="d-flex">
                                                <div className="form-group mb-0 w-100 mt-3">
                                                    <label htmlFor="champStatusControlProp">Prop</label>
                                                    <input type="text" id="champStatusControlProp"
                                                           className="form-control"
                                                           value={this.state.status.control.props}
                                                           onChange={e => this.setStatus(e, 'control', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusControlRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusControlRate"
                                                           className="form-control"
                                                           value={this.state.status.control.rate}
                                                           onChange={e => this.setStatus(e, 'control', 'rate')}/>
                                                </div>
                                            </div>
                                            <div className="progress mt-2 rounded-0">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated rounded-0"
                                                    role="progressbar"
                                                    style={{width: `${this.state.status.control.rate}%`}}
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="difficulty-nav" role="tabpanel"
                                             aria-labelledby="status-difficulty-tab">
                                            <div className="d-flex">
                                                <div className="form-group mb-0 w-100 mt-3">
                                                    <label htmlFor="champStatusDifficultyProp">Prop</label>
                                                    <input type="text" id="champStatusDifficultyProp"
                                                           className="form-control"
                                                           value={this.state.status.difficulty.props}
                                                           onChange={e => this.setStatus(e, 'difficulty', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusthis.difficultyRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusthis.difficultyRate"
                                                           className="form-control"
                                                           value={this.state.status.difficulty.rate}
                                                           onChange={e => this.setStatus(e, 'difficulty', 'rate')}/>
                                                </div>
                                            </div>
                                            <div className="progress mt-2 rounded-0">
                                                <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated rounded-0"
                                                    role="progressbar"
                                                    style={{width: `${this.state.status.difficulty.rate}%`}}
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h4 className="mb-0" data-anchor="link" id="combos">Combos
                                    <Link className="anchorjs-link" to="#combos" aria-label="Anchor">#</Link>
                                </h4>
                            </div>
                            {this.state.combos.map((data, key) => {
                                return <div className="col-lg-6 mt-3" key={key}>
                                    <div className="card border-light rounded bg-dark text-light">
                                        {/*<img className="card-img-top" src="" alt="Card image cap"/>*/}
                                        <div
                                            className="bg-light d-flex justify-content-center text-dark align-items-center"
                                            style={{height: '11em'}}
                                            onClick={() => document.getElementById(`combosFile-${key}`).click()}>
                                            {this.state.combos[key].video !== '' ?
                                                <video autoPlay="true" loop className="rounded-top w-100 h-100 bg-black"
                                                       src={this.state.combos[key].video}/> :
                                                <div
                                                    className="d-flex justify-content-center flex-column align-items-center">
                                                        <span
                                                            className="font-weight-bold text-uppercase">No video</span>
                                                    <small>Click to upload one...</small>
                                                </div>
                                            }
                                            <input type="file" id={`combosFile-${key}`} accept="video/*"
                                                   onChange={e => this.uploadMedia(e, 'video', '/combos', key)}
                                                   className="d-none"/>
                                        </div>
                                        <div className="progress bg-transparent h-100 rounded-0">
                                            <div
                                                className="progress-bar progress-bar-animated rounded-0"
                                                role="progressbar"
                                                style={{
                                                    height: '5px',
                                                    width: `${this.state.tempComboProgressbar[key]}%`
                                                }}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                        <div className="card-body pb-0">
                                            <div className="d-flex">
                                                <label htmlFor="">Difficulty:</label>
                                                <div className="difficulty d-flex align-items-center">
                                                    {[1, 2 ,3, 4, 5].map((number)=> {
                                                        return <div className="difficultyBox">
                                                            <input type="radio" checked={number === data.difficulty} onChange={() => {
                                                                this.difficultyRate(number, key)
                                                            }} name={`difficukty-${key}`}/>
                                                            <span className='difficultyCircle'/>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={`champCombosSkillCombo-${key}`}>Skill Combo</label>
                                                <input type="text" id={`champCombosSkillCombo-${key}`}
                                                       className="form-control"
                                                       onChange={e => this.setCombo(e, 'skillCombo', key)}
                                                       value={this.state.combos[key].skillCombo}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={`champCombosDescription-${key}`}>Description</label>
                                                <textarea id={`champCombosDescription-${key}`} className="form-control"
                                                          cols="30"
                                                          rows="5" onChange={e => this.setCombo(e, 'description', key)}
                                                          value={this.state.combos[key].description}/>
                                            </div>

                                        </div>
                                        <div className="card-footer pt-0 d-flex">
                                            {this.state.combos.length > 1 ?
                                                <button className="btn btn-danger mr-auto"
                                                        onClick={() => this.removeElement(key, 'combos')}>Delete
                                                </button> : ''}
                                            <button className="btn bg-transparent ml-auto text-light"
                                                    onClick={this.addCombo}>Add another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h4 className="mb-0" data-anchor="link" id="spells">Spells
                                    <Link className="anchorjs-link" to="#spells" aria-label="Anchor">#</Link>
                                </h4>
                            </div>
                            {this.state.spells.map((data, key) => {
                                return <div className="col-12 mt-3" key={key}>
                                    <div className="card border-light rounded bg-dark text-light">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor={`spellName-${key}`}><span
                                                            className="text-danger mr-1">*</span>Name
                                                            & keyword</label>
                                                        <div className="input-group">
                                                            <input type="text" id={`spellName-${key}`}
                                                                   placeholder="Name..."
                                                                   value={data.name}
                                                                   onChange={e => this.setSpell(e, 'name', key)}
                                                                   className="form-control w-75"/>
                                                            <input type="text" id={`spellKeyword-${key}`}
                                                                   placeholder="Key..."
                                                                   value={data.keyword}
                                                                   onChange={e => this.setSpell(e, 'keyword', key)}
                                                                   className="form-control w-25"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor={`spellDetailsType-${key}`}>Type & cost</label>
                                                        <div className="input-group">
                                                            <div className="btn-group w-75">
                                                                <button type="button" id={`spellDetailsType-${key}`}
                                                                        className="btn btn-block rounded-left border btn-light dropdown-toggle"
                                                                        data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false">
                                                                    {this.state.spells[key].type ? this.state.spells[key].type.map((type, index) => {
                                                                        return <span className="text-capitalize mr-2"
                                                                                     key={index}>{type}</span>
                                                                    }) : 'Select a type'}
                                                                </button>
                                                                <div className="dropdown-menu" style={{right: '0'}}>
                                                                    <div className="d-flex flex-wrap">
                                                                        <select className="custom-select my-1 mx-2"
                                                                                onChange={e => this.setSpell(e.target, 'type', key)}
                                                                                id={`spellDetailsTypeSelect-${key}`}
                                                                                multiple={true}>
                                                                            {this.state.spellTypes.map((spell, index) => {
                                                                                return <option value={spell}
                                                                                               key={index}>
                                                                                    {spell}
                                                                                </option>
                                                                            })}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="btn-group w-25">
                                                                <button type="button" id={`spellDetailsType-${key}`}
                                                                        className="btn btn-block rounded-right text-capitalize border btn-light dropdown-toggle"
                                                                        data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false">
                                                                    {this.state.spells[key].cost !== '' || this.state.spells[key].cost !== undefined ? this.state.spells[key].cost : 'Select a cost'}
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <button className="dropdown-item"
                                                                            onClick={() => this.setSpell(1, 'cost', key)}>1
                                                                    </button>
                                                                    <button className="dropdown-item"
                                                                            onClick={() => this.setSpell(2, 'cost', key)}>2
                                                                    </button>
                                                                    <button className="dropdown-item"
                                                                            onClick={() => this.setSpell(3, 'cost', key)}>3
                                                                    </button>
                                                                    <button className="dropdown-item"
                                                                            onClick={() => this.setSpell(4, 'cost', key)}>4
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <label htmlFor={`spellDetailsName-${key}-0`}>
                                                            Names & props
                                                        </label>
                                                        {data.details.map((data, index) => {
                                                            return <div className="input-group mb-2"
                                                                        key={index}>
                                                                {index > 0 ? <div
                                                                    className="deleteNameAndPropsSpell"
                                                                    onClick={()=>this.deleteSpellDetails(key, index)}>
                                                                    &times;</div> : ''}
                                                                <input type="text"
                                                                       id={`spellDetailsName-${key}-${index}`}
                                                                       placeholder="Name..."
                                                                       value={data.name}
                                                                       onChange={e => this.setSpell(e, 'details', key, 'name', index)}
                                                                       className="form-control w-75"/>
                                                                <input type="text"
                                                                       id={`spellDetailsProp-${key}-${index}`}
                                                                       placeholder="Prop..."
                                                                       value={data.prop}
                                                                       onChange={e => this.setSpell(e, 'details', key, 'prop', index)}
                                                                       className="form-control w-25"/>
                                                            </div>
                                                        })}
                                                    </div>
                                                    <button className="btn btn-sm rounded"
                                                            onClick={() => this.addSpellDetails(key)}
                                                            type="button">Add +
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                    <div>
                                                        <label htmlFor="spellIcon"><span
                                                            className="text-danger mr-1">*</span>Icon</label>
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <Link
                                                                    to={data.img !== '' ? data.img : 'javascript:void(0)'}
                                                                    target="_blank">
                                                                    <button
                                                                        className={`btn btn-secondary rounded-left ${data.img !== '' ? '' : 'disabled'}`}
                                                                        type="button">
                                                                        Show
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                            <div className="custom-file">
                                                                <input type="file"
                                                                       className="custom-file-input"
                                                                       id={`spellIcon-${key}`} accept="image/*"
                                                                       onChange={e => this.uploadMedia(e, 'icon', '/spells', key)}/>
                                                                <label className="custom-file-label"
                                                                       id={`spellIconLabel-${key}`}
                                                                       htmlFor={`spellIcon-${key}`}>Upload
                                                                    spell
                                                                    icon</label>
                                                            </div>
                                                        </div>
                                                        <div className="progress bg-transparent rounded-0">
                                                            <div
                                                                className="progress-bar progress-bar-animated rounded-0"
                                                                role="progressbar"
                                                                style={{
                                                                    height: '5px',
                                                                    width: `${this.state.tempSpellProgressbar[key]}%`
                                                                }}
                                                                aria-valuenow="25" aria-valuemin="0"
                                                                aria-valuemax="100"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor={`spellDescription-${key}`}><span
                                                            className="text-danger mr-1">*</span>Description</label>
                                                        <textarea id={`spellDescription-${key}`}
                                                                  value={data.description}
                                                                  onChange={e => this.setSpell(e, 'description', key)}
                                                                  className="form-control"
                                                                  cols="30" rows="4"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card-footer pt-0 d-flex">
                                            {this.state.spells.length > 1 ?
                                                <button className="btn btn-danger mr-auto"
                                                        onClick={() => this.removeElement(key, 'spells')}>Delete
                                                </button> : ''}
                                            <button className="btn bg-transparent ml-auto text-light"
                                                    onClick={this.addSpell}>Add another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h4 className="mb-0" data-anchor="link" id="battlerites">Battlerites
                                    <Link className="anchorjs-link" to="#battlerites" aria-label="Anchor">#</Link>
                                </h4>
                            </div>
                            {this.state.battlerites.map((data, key) => {
                                return <div className="col-6 mt-3" key={key}>
                                    <div className="card border-light rounded bg-dark text-light">
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor={`battleriteName-${key}`}><span
                                                    className="text-danger mr-1">*</span>Name</label>
                                                <input type="text" id={`battleriteName-${key}`}
                                                       placeholder="Name..."
                                                       value={data.name}
                                                       onChange={e => this.setBattlerite(e, 'name', key)}
                                                       className="form-control"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor={`battleriteType-${key}`}><span
                                                            className="text-danger mr-1">*</span>Type</label>
                                                        <button type="button" id={`battleriteType-${key}`}
                                                                className="btn btn-block rounded border btn-light dropdown-toggle"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                            {data.type === '' ? this.state.battleriteTypes[0] : data.type}
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <div className="d-flex flex-row">
                                                                {this.state.battleriteTypes.map((data, index) => {
                                                                    return <button
                                                                        className="dropdown-item text-capitalize"
                                                                        onClick={() => this.setBattlerite(data, 'type', key)}
                                                                        key={index}
                                                                        style={{maxWidth: '120px'}}>{data}</button>
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex">
                                                    <div className="form-group">
                                                        <label htmlFor={`battleriteKeyword-${key}`}>Keyword</label>
                                                        <input type="text" id={`battleriteKeyword-${key}`}
                                                               placeholder="Key..."
                                                               value={data.keyword}
                                                               onChange={e => this.setBattlerite(e, 'keyword', key)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="form-group ml-4">
                                                        <label htmlFor={`battleriteEX-${key}`}>EX</label>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" defaultChecked={data.ex}
                                                                   onChange={e => this.setBattlerite(e, 'ex', key)}
                                                                   className="custom-control-input"
                                                                   id={`battleriteEX-${key}`}/>
                                                            <label className="custom-control-label"
                                                                   htmlFor={`battleriteEX-${key}`}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="battleriteIcon"><span
                                                    className="text-danger mr-1">*</span>Icon</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <Link
                                                            to={data.img !== '' ? data.img : 'javascript:void(0)'}
                                                            target="_blank">
                                                            <button
                                                                className={`btn btn-secondary rounded-left ${data.img !== '' ? '' : 'disabled'}`}
                                                                type="button">
                                                                Show
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input"
                                                               id={`battleriteIcon-${key}`} accept="image/*"
                                                               onChange={e => this.uploadMedia(e, 'icon', '/battlerites', key)}/>
                                                        <label className="custom-file-label"
                                                               id={`battleriteIconLabel-${key}`}
                                                               htmlFor={`battleriteIcon-${key}`}>
                                                            Upload battlerite icon</label>
                                                    </div>
                                                </div>
                                                <div className="progress bg-transparent rounded-0">
                                                    <div
                                                        className="progress-bar progress-bar-animated rounded-0"
                                                        role="progressbar"
                                                        style={{
                                                            height: '5px',
                                                            width: `${this.state.tempBattleriteProgressbar[key]}%`
                                                        }}
                                                        aria-valuenow="25" aria-valuemin="0"
                                                        aria-valuemax="100"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={`battleriteDescription-${key}`}><span
                                                    className="text-danger mr-1">*</span>Description</label>
                                                <textarea id={`battleriteDescription-${key}`}
                                                          value={data.description}
                                                          onChange={e => this.setBattlerite(e, 'description', key)}
                                                          className="form-control"
                                                          cols="30" rows="3"/>
                                            </div>
                                        </div>
                                        <div className="card-footer pt-0 d-flex">
                                            {this.state.battlerites.length > 1 ?
                                                <button className="btn btn-danger mr-auto"
                                                        onClick={() => this.removeElement(key, 'battlerites')}>Delete
                                                </button> : ''}
                                            <button className="btn bg-transparent ml-auto text-light"
                                                    onClick={this.addBattlerite}>Add another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h4 className="mb-0" data-anchor="link" id="quotes">Quotes
                                    <Link className="anchorjs-link" to="#quotes" aria-label="Anchor">#</Link>
                                </h4>
                            </div>
                            <div className="col-6 mt-3">
                                <div className="card border-light rounded bg-dark text-light">
                                    <div className="card-body">
                                        {this.state.quotes.map((data, key) => {
                                            return <div className="form-group" key={key}>
                                                <div className="input-group">
                                                    <input type="text" value={this.state.quotes[key].name}
                                                           onChange={e => this.setQuote(e, 'name', key)}
                                                           placeholder="Name..."
                                                           className="form-control" id={`quoteName-${key}`}/>
                                                    <div className="input-group-append">
                                                        <Link
                                                            to={data.sound !== '' ? data.sound : 'javascript:void(0)'}
                                                            target="_blank">
                                                            <button
                                                                className={`btn ${data.sound !== '' ? '' : 'disabled'}`}
                                                                type="button">
                                                                <img src={playIcon} style={{width: '20px'}}
                                                                     alt="Play icon"/>
                                                            </button>
                                                        </Link>
                                                        <label htmlFor={`quoteSound-${key}`}
                                                               className="btn font-weight-bold rounded-right input-group-text">
                                                            <img src={uploadIcon} style={{width: '20px'}}
                                                                 alt="Upload icon"/>
                                                        </label>
                                                        <input type="file" className="d-none"
                                                               id={`quoteSound-${key}`} accept=".mp3 .wav"
                                                               onChange={e => this.uploadMedia(e, 'sound', '/quotes', key)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                        <button className="btn btn-sm rounded"
                                                onClick={() => this.addQuoteSound()}
                                                type="button">Add +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <button className="btn btn-light" type="submit" onClick={this.saveChampion}>Save
                                </button>
                                {this.state.editChampion !== undefined ?
                                    <button className="btn btn-danger ml-3" type="button"
                                            onClick={this.deleteChampion}>Delete</button> : ''
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};