import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

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