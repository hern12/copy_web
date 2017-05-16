import React, { Component } from 'react';

class ProjectImageListItem extends Component {
    render () {
        return (
            <div className='column is-4'>
                <div className='itme-inner'>
                    <img className="img-responsive" src={this.props.imgSrc} alt=""/>
                    <h5>{this.props.txtHead}</h5>
                </div>
            </div>
        )
    }
}

export default ProjectImageListItem;