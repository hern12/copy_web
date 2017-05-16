import React,{ Component } from 'react';
import ProjectImageListItem from './ProjectImageListItem.react'

class ProjectListItem extends Component{
    render () {
        return (
            <div className='columns'>
                <div className='column is-4'>
                    <h3>Our Latest Project</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <div>
                        <div className="block">
                            <a className="button">
                                <span className="icon is-small">
                                <i className="fa fa-arrow-left"></i>
                                </span>
                            </a>
                            <a className="button">
                                <span className="icon is-small">
                                <i className="fa fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='column is-8'>
                    <div className='columns is-mobile'>
                        <ProjectImageListItem imgSrc='http://shapebootstrap.net/demo/html/flat_theme/images/portfolio/recent/item1.png' txtHead='Flat Theme - Business Theme'/>
                        <ProjectImageListItem imgSrc='http://shapebootstrap.net/demo/html/flat_theme/images/portfolio/recent/item3.png' txtHead='Fornax - Apps site template'/>
                        <ProjectImageListItem imgSrc='http://shapebootstrap.net/demo/html/flat_theme/images/portfolio/recent/item2.png' txtHead='Nova - Corporate site template'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectListItem;