import React, {Component} from 'react'

// Components
import Champions from './Champions/Champions'
import Builds from './Builds/Builds'
import News from './News/News'

const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: [Champions, Builds, News]
        }
    }

    render() {
        return (
            <main className="aContainer col-12 col-md-9 col-xl-10 py-4">
                {this.state.sections.map((Section, key) => {
                    return <div key={key}>
                        {capitalizeFirstLetter(this.props.match.params.sectionName) === Section.name?
                            <Section/>
                            :''}
                    </div>
                })}
            </main>
        )
    }
}