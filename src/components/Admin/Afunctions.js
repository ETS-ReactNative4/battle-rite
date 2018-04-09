import React, {Component} from 'react'

import Form from './Champions/Form'

export default class Afunctions extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="aContainer col-12 col-md-9 col-xl-8 py-5 pl-md-5">
                <Form champion={this.props.match.params.champion}/>
            </div>
        )
    }
}