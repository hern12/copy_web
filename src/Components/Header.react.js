import React, { Component } from 'react';
import '../css/Header.css'

class Header extends Component {
 render() {
     return(
         <div className='header-box nav has-shadow nav-fixed-top'>
            <div className='container'>
                <div className="nav-left">
                    <a className="nav-item">
                        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
                    </a>
                </div>
                <div className="nav-right nav-menu">
                    <a className="nav-item">
                     Home
                    </a>
                    <a className="nav-item">
                     About Us
                    </a>
                    <a className="nav-item">
                     Services
                    </a>
                    <a className="nav-item">
                     Portfolio
                    </a>
                    <a className="nav-item">
                     Pages
                    </a>
                    <a className="nav-item">
                     Blog
                    </a>
                    <a className="nav-item">
                     Contact
                    </a>
                </div>
            </div>
         </div>
     )
 }

}

export default Header;