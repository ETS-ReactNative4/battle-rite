import React, {Component} from 'react'

import ChmapionCards from '../../Guides/index.js'

export default class Battlerites extends Component{
    render(){
        return(
            <div className="main-content aBattlerites">
                <ChmapionCards admin={{path:'/admin/battlerites'}}/>
            </div>
        )
    }
}