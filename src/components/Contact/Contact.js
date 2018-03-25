import React from 'react'

const Contact = () => (
    <div className="contact py-3">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-2">
                    <h3 className="text-uppercase">contact us</h3>
                </div>
            </div>
            <form action="">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Battlerite pseudo"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="The name of clip or link"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" cols="8" rows="10" placeholder="Your message"/>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block text-uppercase">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)

export default Contact