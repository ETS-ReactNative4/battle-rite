import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

import ChmapionCards from '../../../components/Guides/Guides.js'

export default class Champions extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
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