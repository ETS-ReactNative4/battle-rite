import React, {Component} from 'react'
import * as firebase from "firebase";

export default class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: {}
        }
    }

    componentDidMount() {
        firebase.database().ref(`news/${this.props.match.params.news}`).once('value').then(data => {
            this.setState({news: data.val()})
        })
    }
    /***
     *
     * @param date Take a new Date
     * @returns {string}
     */
    formatDate = date => {
        let revertToDate = new Date(date)
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        let day = revertToDate.getDate();
        let monthIndex = revertToDate.getMonth();
        let year = revertToDate.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    render() {
        return (
            <div className="bg-light">
                <div className="d-flex justify-content-end flex-column p-5"
                     style={{
                         backgroundImage: `url('${this.state.news.img}')`,
                         minHeight: '600px'
                     }}>
                    <div className="display-2">{this.state.news.title}</div>
                    <h5>{this.state.news.subTitle}</h5>
                    <h5>{this.formatDate(this.state.news.date)}</h5>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content py-3" dangerouslySetInnerHTML={{__html: this.state.news.content}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



