import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

import './builds-view.min.css'

export default class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            championName: this.props.match.params.champion,
            builds: []
        }
    }

    render() {
        return (
            <div className="aBuilds mt-3 col-12">
                <div className="row mb-4">
                    <div className="col-12">
                        <Link to={`/admin/builds/${this.state.championName}/create`}
                              className="btn btn-light">Create</Link>
                    </div>
                </div>
                <div className="row">
                    {[1,2,3,4].map((data, key)=>{
                        return <div className="col-3" key={key}>
                            <Link to={`/admin/builds/${this.state.championName}/${data}`} className="build-card p-3">
                                <h3>Basic Loadout</h3>
                                <div className="builds__spell-container">
                                    {[1, 2, 3, 4, 5].map((data, index) => {
                                        return <div className="builds__skill-icons" key={index}>
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/battle-rite.appspot.com/o/champions%2Fashka%2Fspells%2F0?alt=media&token=6a62298b-e9c9-44f5-b639-f4c26ff8cc2f"
                                                alt="" className="w-100"/>
                                            {data}
                                        </div>
                                    })}
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}