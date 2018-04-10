import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'

export default class News extends Component{
    render(){
        return(
            <div className="aNews">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/admin/news/create' className="btn btn-light">Create</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}