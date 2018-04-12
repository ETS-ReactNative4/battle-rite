import React, {Component} from 'react'
import {Link} from '../../../../node_modules/react-router-dom/umd/react-router-dom.min'
import * as firebase from 'firebase'

import {Editor} from '@tinymce/tinymce-react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            permalink: '',
            title: '',
            subTitle: '',
            img: '',
            content: '',
            progressbarImg: 0,

            permalinksFirebase: [],
            editNews: this.props.match.params.news,
        }
    }

    componentDidMount() {
        if (this.state.editNews === undefined) {
            // Get user info
            let user = firebase.auth().currentUser

            this.setState({author: user.uid})
        } else {
            firebase.database().ref(`news/${this.state.editNews}`)
                .once('value').then(data => {
                let news = {
                    author: data.val().author,
                    permalink: data.val().permalink,
                    title: data.val().title,
                    subTitle: data.val().subTitle,
                    img: data.val().img,
                    content: data.val().content,
                }
                this.setState(news)
            })
        }

        // Get permalink from Firebase to check by the array when saving
        firebase.database().ref('news').once('value').then(data => {
            let news = Object.values(data.val())
            let permalinks = []
            for (let v of news) if (this.state.permalink !== v.permalink) permalinks.push(v.permalink)
            this.setState({permalinksFirebase: permalinks})
        })
    }

    /**
     *
     * @param event For get obj file from the input
     */
    uploadMedia = (event) => {
        if (this.state.permalink === '') {
            alert('You should insert Permalink first.')
            return false
        }

        // Get file
        let file = event.target.files[0]

        // Create a storage ref
        let storageRef = firebase.storage()
            .ref(`news/${this.state.permalink}/imgs/primary-img`)

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

    deleteNews = () => {
        let result = window.confirm('Are you sure?')
        if (!result) return false
        firebase.database().ref(`news/${this.state.permalink}`).remove()
        this.props.history.goBack()
    }

    saveNews = () => {
        // Check using unique permalink
        for (let permalink of this.state.permalinksFirebase) {
            if (this.state.permalink === permalink) {
                alert('Permalink is exist.')
                return false
            }
        }

        // Check the require inputs
        const inputs = document.getElementsByTagName('input')
        for (let input of inputs) {
            if (input.value === '' && input.getAttribute('required') !== null) {
                return false
            } else if (this.state.content === '') {
                alert('Please add content.')
                return false
            }
        }

        let news = {
            permalink: this.state.permalink,
            title: this.state.title,
            subTitle: this.state.subTitle,
            img: this.state.img,
            author: this.state.author,
            content: this.state.content,
            date: (new Date()).toISOString()
        }
        firebase.database().ref(`news/${this.state.permalink}`).set(news);
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="aNews col-12 col-md-9 col-xl-10 py-4">
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
                                        <input type="file" required={this.state.img === '' ? 'required' : null}
                                               className="custom-file-input" accept="image/*"
                                               onChange={e => this.uploadMedia(e)}
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
                                <button className="btn btn-light" type="submit" onClick={this.saveNews}>Save</button>
                                {this.state.editNews !== undefined ?
                                    <button className="btn btn-outline-danger ml-3" type="button"
                                            onClick={this.deleteNews}>Delete</button> : ''
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}