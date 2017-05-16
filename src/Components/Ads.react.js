import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css'
var Carousel = require('react-responsive-carousel').Carousel;

class Ads extends Component {
    render() {
        return(
            <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={require("../assets/1.jpeg")} />
                </div>
                <div>
                    <img src={require("../assets/2.jpeg")} />
                </div>
                <div>
                    <img src={require("../assets/3.jpeg")} />
                </div>
                <div>
                    <img src={require("../assets/4.jpeg")} />
                </div>
                <div>
                    <img src={require("../assets/5.jpeg")} />
                </div>
                <div>
                    <img src={require("../assets/6.jpeg")} />
                </div>
            </Carousel>
        )
    }
}

export default Ads;