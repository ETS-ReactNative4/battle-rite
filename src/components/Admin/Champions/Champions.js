import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ChmapionCards from '../../Guides/index.js'

export default class Champions extends Component{
    render(){
        return(
            <div className="aChampions">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12">
                            <Link to='/admin/champions/create' className="btn btn-light">Create</Link>
                        </div>
                    </div>
                </div>
                <ChmapionCards admin={{path:'/admin/champions/edit'}}/>
            </div>
        )
    }
}