import React, { Component } from 'react';
import '../css/bottom.css'

class Bottom extends Component{
    render () {
        return (
            <section className='bottom'>
                <div className='container'>
                   <div className='columns'>
                        <div className='column is-3'>
                            <h4>About Us</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
                            <p>Pellentesque habitant morbi tristique senectus.</p>
                        </div>
                        <div className='column is-3'>
                            <h4>Company</h4>
                            <div>
                                <ul className="arrow">
                                <li><a href="#">The Company</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Our Partners</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Faq</a></li>
                                <li><a href="#">Conatct Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Copyright</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='column is-3'>
                            <h4>Latest Blog</h4>
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content blogPtxt">
                                        <span className='media-heading'>
                                             <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </span>
                                        <small className="muted">Posted 17 Aug 2013</small>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content blogPtxt">
                                        <span className='media-heading'>
                                             <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </span>
                                        <small className="muted">Posted 17 Aug 2013</small>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content blogPtxt">
                                        <span className='media-heading'>
                                             <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </span>
                                        <small className="muted">Posted 17 Aug 2013</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column is-3'>
                            <h4>Address</h4>
                            <p>Twitter, Inc.
                            795 Folsom Ave, Suite 600
                            San Francisco, CA 94107
                            P: (123) 456-7890</p>
                            <h4>Newsletter</h4>
                             <p className="control gHeadGroup">
                                <input className="input gInput" type="text" placeholder="Text input"/>
                                <span className="block ggroup">
                                    <button className="button is-danger" type="button">Go!</button>
                                </span>
                             </p>
                        </div>
                   </div>
                </div>
            </section>
        )
    }
}

export default Bottom;