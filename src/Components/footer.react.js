import React,{ Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
    render () {
        return (
            <footer id='footer' className='midnight-blue'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-6'>
                            <div className='nav-left'>
                             <div className='nav-item'>   
                                © 2013 ShapeBootstrap. All Rights Reserved.
                             </div>
                            </div>
                        </div>
                        <div className='column is-6'>
                            <ul className='nav-right nav-menu'>
                                <li className='nav-item'><a href="#">Home</a></li>
                                <li className='nav-item'><a href="#">About Us</a></li>
                                <li className='nav-item'><a href="#">Faq</a></li>
                                <li className='nav-item'><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;