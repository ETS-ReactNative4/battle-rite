import React, {Component} from 'react'

// Components
import Champions from './Champions/Champions'
import Builds from './Builds/Builds'
import Battlerites from './Battlerites/Battlerites'
import News from './News/News'

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: {
                'champions': Champions,
                'builds': Builds,
                'battlerites': Battlerites,
                'news': News
            },
        }
    }

    render() {
        let Section = this.state.sections[this.props.match.params.sectionName]
        return (
            <main className="main-content aContainer col-12">
                <Section/>
            </main>
        )
    }
}