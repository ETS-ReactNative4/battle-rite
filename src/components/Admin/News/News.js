import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import NewsCards from '../../News/index'

export default class News extends Component{
    render(){
        return(
            <div className="main-content aNews">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/admin/news/create' className="btn btn-light">Create</Link>
                        </div>
                    </div>
                </div>
                <NewsCards admin={{path:'/admin/news/edit'}}/>
            </div>
        )
    }
}