import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from 'firebase'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            title: '',
            subTitle: '',
            img: '',
            progressbarImg: 0,
        }
    }

    componentDidMount() {
        // firebase.database().ref('champions').once('value').then(data => console.log(data))
        let id = firebase.database().ref('news').push().key
        this.setState({id})
    }

    render() {
        /**
         *
         * @param event For get obj file from the input
         */
        const uploadMedia = (event) => {
            // Get file
            let file = event.target.files[0]

            // Create a storage ref
            let storageRef = firebase.storage()
                .ref(`news/${this.state.id}/imgs/primary-img`)

            // Upload file
            let task = storageRef.put(file)
            let self = this

            // Update progress bar
            task.on('state_changed',
                /**
                 *
                 * @param snapshot File obj when uploading
                 */
                function progress(snapshot) {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    self.setState({progressbarImg: percentage})
                },

                function error(err) {
                    console.log(err)
                },

                function complete() {
                    self.setState({img: task.snapshot.downloadURL})

                    let newsUploadImg = document.getElementById("newsUploadImg").files[0].name
                    document.getElementById("newsUploadImgLabel").innerText = newsUploadImg
                },
            )
        }

        const saveNews = () => {
            let news = {
                title: this.state.title,
                subTitle: this.state.subTitle,
                img: this.state.img,
            }
            console.log(news)
            firebase.database().ref(`news/${this.state.id}`).set(news);
        }
        return (
            <div className="aChampions col-12 col-md-9 col-xl-10 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="newsTitle"><span className="text-danger mr-1">*</span>Title</label>
                                <input type="text" value={this.state.title}
                                       onChange={e => this.setState({title: e.target.value})} className="form-control"
                                       id="newsTitle"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="newsSubTitle"><span className="text-danger mr-1">*</span>Sub
                                    title</label>
                                <input type="text" value={this.state.subTitle}
                                       onChange={e => this.setState({subTitle: e.target.value})}
                                       className="form-control"
                                       id="newsSubTitle"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="newsUploadImg"><span className="text-danger mr-1">*</span>Img</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <Link to={this.state.img !== '' ? this.state.img : 'javascript:void(0)'}
                                          target="_blank">
                                        <button
                                            className={`btn btn-secondary rounded-left ${this.state.img !== '' ? '' : 'disabled'}`}
                                            type="button">
                                            Show
                                        </button>
                                    </Link>
                                </div>
                                <div className="custom-file">
                                    <input type="file" required className="custom-file-input" accept="image/*"
                                           onChange={e => uploadMedia(e)}
                                           id="newsUploadImg"/>
                                    <label className="custom-file-label" id="newsUploadImgLabel"
                                           htmlFor="newsUploadImg">Upload news image</label>
                                </div>
                            </div>
                            <div className="progress bg-transparent h-25 mb-3 rounded-0">
                                <div
                                    className="progress-bar h-25 progress-bar-striped progress-bar-animated rounded-0"
                                    role="progressbar" style={{width: `${this.state.progressbarImg}%`}}
                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-light" type="submit" onClick={saveNews}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}