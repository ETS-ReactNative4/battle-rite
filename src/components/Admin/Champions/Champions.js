import React, {Component} from 'react'
import {NavLink, Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

import * as firebase from 'firebase'

import './champion.min.css'

export default class Champions extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
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
                    details: [
                        {
                            name: '',
                            prop: ''
                        },
                        {
                            name: '',
                            prop: ''
                        },
                    ]
                }
            ],
            tempPros: '',
            tempCons: '',
            tempMasteringGuideTitle: '',
            tempMasteringGuideDescription: '',
            tempBasicGuideTitle: '',
            tempBasicGuideDescription: '',
            tempComboProgressbar: [0],
            tempSpellProgressbar: [0],
            tempCombos: {
                video: '',
                difficulty: 0,
                skillCombo: '',
                description: '',
            },
            tempSpells: {
                name: '',
                description: '',
                img: '',
                keyword: '',
                details: [
                    {
                        name: '',
                        prop: ''
                    },
                    {
                        name: '',
                        prop: ''
                    },
                ]
            },
            progressbarIcon: 0,
            progressbarAvatar: 0,
            progressbarVideo: 0,
        }
    }

    render() {

        // Pros
        const setPros = () => {
            if (this.state.tempPros === '') return false
            let pros = this.state.pros
            pros.push(this.state.tempPros)
            this.setState({
                tempPros: '',
                pros
            })
        }

        // Cons
        const setCons = () => {
            if (this.state.tempCons === '') return false
            let cons = this.state.cons
            cons.push(this.state.tempCons)
            this.setState({
                tempCons: '',
                cons
            })
        }

        // Mastering guide
        const setMasteringGuide = () => {
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
        const setBasicGuide = () => {
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
        const setStatus = (event, obj, subType) => {
            let status = this.state.status
            status[obj][subType] = event.target.value
            this.setState(status)
        }

        /**
         *
         * @param event For get obj file from the input
         * @param type File extension like icon, video
         * @param typePath Path of obj like : /combos
         * @param num Number of cards meaning obj number
         */
        const uploadMedia = (event, type, typePath = '', num) => {
            console.log(event.target.value)
            // Get file
            let file = event.target.files[0]

            // Create a storage ref
            let storageRef = firebase.storage()
                .ref(`champions/${this.state.name ? this.state.name : 'none'}${typePath}/${
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
                            case 'icon': // Spells
                                let tempSpellProgressbar = self.state.tempSpellProgressbar
                                tempSpellProgressbar[num] = 0

                                let spells = self.state.spells
                                spells[num].img = task.snapshot.downloadURL
                                self.setState({spells, tempSpellProgressbar})

                                let spellIcon = document.getElementById(`spellIcon-${num}`).files[0].name
                                document.getElementById(`spellIconLabel-${num}`).innerText = spellIcon
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
        const setCombo = (target, obj, num) => {
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
         * @param key Difficulty rate from 0 ~ 4
         * @param num Number of the obj
         */
        const difficultyRate = (key, num) => {
            let combos = this.state.combos
            combos[num].difficulty = key
            this.setState({combos})
        }

        const addComboCard = () => {
            let arr = this.state.combos
            let tempCombos = Object.assign({}, this.state.tempCombos)
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
        const setSpell = (event, obj, num, detailsType, detailsIndex) => {
            let spells = this.state.spells
            if (detailsType === undefined) {
                spells[num][obj] = event.target.value
            } else {
                spells[num][obj][detailsIndex][detailsType] = event.target.value
            }
            this.setState(spells)
        }

        const addSpell = () => {
            let arr = this.state.spells
            let tempSpells = Object.assign({}, this.state.tempSpells)
            arr.push(tempSpells)
            this.setState({spells: arr})
        }

        /**
         *
         * @param num Number of cards meaning obj number
         */
        const addSpellDetails = num => {
            let arr = this.state.spells
            let details = {
                name: '',
                prop: ''
            }
            arr[num].details.push(details)
            this.setState({spells: arr})
        }
        /*** Spells ***/

        const saveChampion = () => {
            console.log(this.state)
        }
        return (
            <div className="aChampions">
                {/*<button className="btn btn-light">Create Champion</button>*/}
                <form onSubmit={e => e.preventDefault()}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-9">
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
                                               onChange={e => uploadMedia(e, 'icon')}
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
                                               onChange={e => uploadMedia(e, 'video')}
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
                                               onChange={e => uploadMedia(e, 'avatar')}
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
                                                        onClick={setPros}>+
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
                                                                    return <li key={key}>{data}</li>
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
                                                        onClick={setCons}>+
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
                                                                    return <li key={key}>{data}</li>
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
                                    <textarea id="champBio" className="form-control" value={this.state.bio} cols="30"
                                              rows="5"
                                              onChange={e => this.setState({bio: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card bg-dark border border-secondary mt-3 text-light">
                                    <div className="card-body">
                                        <h5 className="card-title">Mastering Guide</h5>
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
                                                    onClick={setMasteringGuide}>Add
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
                                                                <h4 className="text-uppercase">{data.title}</h4>
                                                                <p className="font-weight-light text-capitalize">
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
                                        <h5 className="card-title">Basic Guide</h5>
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
                                                    onClick={setBasicGuide}>Add
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
                                                                <h4 className="text-uppercase">{data.title}</h4>
                                                                <p className="font-weight-light text-capitalize">
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
                                    <h5 className="mb-3">Status</h5>
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
                                                           onChange={e => setStatus(e, 'damages', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusDamagesRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusDamagesRate"
                                                           className="form-control"
                                                           value={this.state.status.damages.rate}
                                                           onChange={e => setStatus(e, 'damages', 'rate')}/>
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
                                                           onChange={e => setStatus(e, 'survivability', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusSurvivabilityRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusSurvivabilityRate"
                                                           className="form-control"
                                                           value={this.state.status.survivability.rate}
                                                           onChange={e => setStatus(e, 'survivability', 'rate')}/>
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
                                                           onChange={e => setStatus(e, 'protection', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusProtectionRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusProtectionRate"
                                                           className="form-control"
                                                           value={this.state.status.protection.rate}
                                                           onChange={e => setStatus(e, 'protection', 'rate')}/>
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
                                                           onChange={e => setStatus(e, 'control', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusControlRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusControlRate"
                                                           className="form-control"
                                                           value={this.state.status.control.rate}
                                                           onChange={e => setStatus(e, 'control', 'rate')}/>
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
                                                           onChange={e => setStatus(e, 'difficulty', 'props')}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusDifficultyRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusDifficultyRate"
                                                           className="form-control"
                                                           value={this.state.status.difficulty.rate}
                                                           onChange={e => setStatus(e, 'difficulty', 'rate')}/>
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
                                <h5 className="mb-0">Combos</h5>
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
                                                <video autoPlay="true" loop className="rounded-top w-100 h-100 bg-dark2"
                                                       src={this.state.combos[key].video}/> :
                                                <div
                                                    className="d-flex justify-content-center flex-column align-items-center">
                                                        <span
                                                            className="font-weight-bold text-uppercase">No video</span>
                                                    <small>Click to upload one...</small>
                                                </div>
                                            }
                                            <input type="file" id={`combosFile-${key}`} accept="video/*"
                                                   onChange={e => uploadMedia(e, 'video', '/combos', key)}
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
                                                    <div className="difficultyBox">
                                                        <input type="radio" onChange={() => {
                                                            difficultyRate(0, key)
                                                        }} name={`difficukty-${key}`}/>
                                                        <span className='difficultyCircle'/>
                                                    </div>
                                                    <div className="difficultyBox">
                                                        <input type="radio" onChange={() => {
                                                            difficultyRate(1, key)
                                                        }} name={`difficukty-${key}`}/>
                                                        <span className='difficultyCircle'/>
                                                    </div>
                                                    <div className="difficultyBox">
                                                        <input type="radio" onChange={() => {
                                                            difficultyRate(2, key)
                                                        }} name={`difficukty-${key}`}/>
                                                        <span className='difficultyCircle'/>
                                                    </div>
                                                    <div className="difficultyBox">
                                                        <input type="radio" onChange={() => {
                                                            difficultyRate(3, key)
                                                        }} name={`difficukty-${key}`}/>
                                                        <span className='difficultyCircle'/>
                                                    </div>
                                                    <div className="difficultyBox">
                                                        <input type="radio" onChange={() => {
                                                            difficultyRate(4, key)
                                                        }} name={`difficukty-${key}`}/>
                                                        <span className='difficultyCircle'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="champCombosSkillCombo">Skill Combo</label>
                                                <input type="text" id="champCombosSkillCombo" className="form-control"
                                                       onChange={e => setCombo(e, 'skillCombo', key)}
                                                       value={this.state.combos[key].skillCombo}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="champCombosDescription">Description</label>
                                                <textarea id="champCombosDescription" className="form-control" cols="30"
                                                          rows="5" onChange={e => setCombo(e, 'description', key)}
                                                          value={this.state.combos[key].description}/>
                                            </div>

                                        </div>
                                        <div className="card-footer pt-0 d-flex">
                                            <button className="btn bg-transparent ml-auto text-light"
                                                    onClick={addComboCard}>Add another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h5 className="mb-0">Spells</h5>
                            </div>
                            {this.state.spells.map((data, key) => {
                                return <div className="col-12 mt-3" key={key}>
                                    <div className="card border-light rounded bg-dark text-light">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="spellName"><span
                                                            className="text-danger mr-1">*</span>Name
                                                            & keyword</label>
                                                        <div className="input-group">
                                                            <input type="text" id="spellName" placeholder="Name..."
                                                                   value={data.name}
                                                                   onChange={e => setSpell(e, 'name', key)}
                                                                   className="form-control w-75"/>
                                                            <input type="text" id="spellKeyword" placeholder="Key..."
                                                                   value={data.keyword}
                                                                   onChange={e => setSpell(e, 'keyword', key)}
                                                                   className="form-control w-25"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <label htmlFor="spellDetailsName">
                                                            <span className="text-danger mr-1">*</span>
                                                            Names & props
                                                        </label>
                                                        {data.details.map((data, index) => {
                                                            return <div className="input-group mb-2"
                                                                        key={index}>
                                                                <input type="text" id="spellDetailsName"
                                                                       placeholder="Name..."
                                                                       value={data.name}
                                                                       onChange={e => setSpell(e, 'details', key, 'name', index)}
                                                                       className="form-control w-75"/>
                                                                <input type="text" id="spellDetailsProp"
                                                                       placeholder="Prop..."
                                                                       value={data.prop}
                                                                       onChange={e => setSpell(e, 'details', key, 'prop', index)}
                                                                       className="form-control w-25"/>
                                                            </div>
                                                        })}
                                                    </div>
                                                    <button className="btn btn-sm rounded"
                                                            onClick={() => addSpellDetails(key)}
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
                                                                <input type="file" className="custom-file-input"
                                                                       id={`spellIcon-${key}`} accept="image/*"
                                                                       onChange={e => uploadMedia(e, 'icon', '/spells', key)}/>
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
                                                        <label htmlFor="spellDescription"><span
                                                            className="text-danger mr-1">*</span>Description</label>
                                                        <textarea id="spellDescription" value={data.description}
                                                                  onChange={e => setSpell(e, 'description', key)}
                                                                  className="form-control"
                                                                  cols="30" rows="3"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card-footer pt-0 d-flex">
                                            <button className="btn bg-transparent ml-auto text-light"
                                                    onClick={addSpell}>Add another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <button className="btn btn-light" type="submit" onClick={saveChampion}>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}