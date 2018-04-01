import React, {Component} from 'react'
import {NavLink} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

export default class Champions extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            slogan: '',
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
            tempPros: '',
            tempCons: '',
            tempMasteringGuideTitle: '',
            tempMasteringGuideDescription: '',
            tempBasicGuideTitle: '',
            tempBasicGuideDescription: '',
        }
    }

    render() {
        const setPros = () => {
            if (this.state.tempPros === '') return false
            let pros = this.state.pros
            pros.push(this.state.tempPros)
            this.setState({
                tempPros: '',
                pros
            })
        }
        const setCons = () => {
            if (this.state.tempCons === '') return false
            let cons = this.state.cons
            cons.push(this.state.tempCons)
            this.setState({
                tempCons: '',
                cons
            })
        }
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
                                            className="btn btn-block border btn-light dropdown-toggle"
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
                                        Solgan</label>
                                    <input type="text" id="champSolgan" value={this.state.slogan}
                                           onChange={e => this.setState({slogan: e.target.value})}
                                           className="form-control" placeholder="Champion slogan"/>
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
                                                <button className="btn font-weight-bold input-group-text"
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
                                                <button className="btn font-weight-bold input-group-text"
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
                        <div className="row mt-5">
                            <div className="col-12">
                                <div className="p-4 rounded border border-secondary text-dark bg-light">
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
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {
                                                                       ...this.state.status.damages,
                                                                       props: e.target.value
                                                                   },
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {...this.state.status.protection},
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusDamagesRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusDamagesRate"
                                                           className="form-control"
                                                           value={this.state.status.damages.rate}
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {
                                                                       ...this.state.status.damages,
                                                                       rate: e.target.value
                                                                   },
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {...this.state.status.protection},
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
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
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {
                                                                       ...this.state.status.survivability,
                                                                       props: e.target.value
                                                                   },
                                                                   protection: {...this.state.status.protection},
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusSurvivabilityRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusSurvivabilityRate"
                                                           className="form-control"
                                                           value={this.state.status.survivability.rate}
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {
                                                                       ...this.state.status.survivability,
                                                                       rate: e.target.value
                                                                   },
                                                                   protection: {...this.state.status.protection},
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
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
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {
                                                                       ...this.state.status.protection,
                                                                       props: e.target.value
                                                                   },
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusProtectionRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusProtectionRate"
                                                           className="form-control"
                                                           value={this.state.status.protection.rate}
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {
                                                                       ...this.state.status.protection,
                                                                       rate: e.target.value
                                                                   },
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
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
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {...this.state.status.protection},
                                                                   control: {
                                                                       ...this.state.status.control,
                                                                       props: e.target.value
                                                                   },
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusControlRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusControlRate"
                                                           className="form-control"
                                                           value={this.state.status.control.rate}
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {...this.state.status.protection},
                                                                   control: {
                                                                       ...this.state.status.control,
                                                                       rate: e.target.value
                                                                   },
                                                                   difficulty: {...this.state.status.difficulty},
                                                               }
                                                           })}/>
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
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {...this.state.status.protection},
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {
                                                                       ...this.state.status.difficulty,
                                                                       rate: e.target.value
                                                                   },
                                                               }
                                                           })}/>
                                                </div>
                                                <div className="form-group mb-0 ml-4 mt-3">
                                                    <label htmlFor="champStatusDifficultyRate">Rate</label>
                                                    <input type="number" min="0" max="100" step="5"
                                                           id="champStatusDifficultyRate"
                                                           className="form-control"
                                                           value={this.state.status.difficulty.rate}
                                                           onChange={e => this.setState({
                                                               status: {
                                                                   damages: {...this.state.status.damages},
                                                                   survivability: {...this.state.status.survivability},
                                                                   protection: {...this.state.status.protection},
                                                                   control: {...this.state.status.control},
                                                                   difficulty: {
                                                                       ...this.state.status.difficulty,
                                                                       rate: e.target.value
                                                                   },
                                                               }
                                                           })}/>
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