import React, {Component} from 'react'

import ChmapionCards from '../../../components/Guides/Guides.js'

export default class Battlerites extends Component{
    render(){
        return(
            <div className="aBattlerites">
                <ChmapionCards admin={{path:'/admin/battlerites'}}/>
            </div>
        )
    }
}