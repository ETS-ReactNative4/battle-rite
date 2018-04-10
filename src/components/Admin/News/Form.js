import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from 'firebase'

import {Editor} from '@tinymce/tinymce-react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            author: '',
            permalink: '',
            title: '',
            subTitle: '',
            img: '',
            content: '',
            progressbarImg: 0,

            editNews: this.props.match.params.news,
        }
    }

    componentDidMount() {
        if (this.state.editNews === undefined) {
            // Get id for a new news
            let id = firebase.database().ref('news').push().key

            // Get user info
            let user = firebase.auth().currentUser

            this.setState({id, author: user.uid})
        } else {
            firebase.database().ref(`news/${this.state.editNews}`)
                .once('value').then(data => {
                console.log(data.val().id)
                let news = {
                    id: data.val().id,
                    author: data.val().author,
                    permalink: data.val().permalink,
                    title: data.val().title,
                    subTitle: data.val().subTitle,
                    img: data.val().img,
                    content: data.val().content,
                }
                this.setState(news)
                console.log(data.val())
            })
        }
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
                id: this.state.id,
                permalink: this.state.permalink,
                title: this.state.title,
                subTitle: this.state.subTitle,
                img: this.state.img,
                author: this.state.author,
                content: this.state.content,
                data: (new Date()).toString()
            }
            firebase.database().ref(`news/${this.state.permalink}`).set(news);
        }
        return (
            <div className="aNews col-12 col-md-9 col-xl-10 py-4">
                {this.state.id !== 0 && this.state.editNews !== '' ?
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="newsPermalink"><span className="text-danger mr-1">*</span>Permalink</label>
                                        <input type="text" required value={this.state.permalink}
                                               onChange={e => this.setState({permalink: e.target.value})}
                                               className="form-control"
                                               id="newsPermalink"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="newsTitle"><span
                                            className="text-danger mr-1">*</span>Title</label>
                                        <input type="text" required value={this.state.title}
                                               onChange={e => this.setState({title: e.target.value})}
                                               className="form-control"
                                               id="newsTitle"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="newsSubTitle"><span className="text-danger mr-1">*</span>Sub
                                            title</label>
                                        <input type="text" required value={this.state.subTitle}
                                               onChange={e => this.setState({subTitle: e.target.value})}
                                               className="form-control"
                                               id="newsSubTitle"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="newsUploadImg"><span
                                        className="text-danger mr-1">*</span>Img</label>
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
                                    <label><span className="text-danger mr-1">*</span>Content</label>
                                    <Editor
                                        initialValue={this.state.content}
                                        init={{
                                            plugins: 'link image code',
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                        }}
                                        onChange={e => this.setState({content: e.target.getContent()})}
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <button className="btn btn-light" type="submit" onClick={saveNews}>Save</button>
                                </div>
                            </div>
                        </div>
                    </form> :
                    ''}
            </div>
        )
    }
}