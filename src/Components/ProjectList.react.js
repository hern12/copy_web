import React, { Component } from 'react';
import '../css/project.css'
import ProjectListItem from './ProjectListItem.react';

class ProjectList extends Component{
    render() {
        return (
            <section className='project-list'>
                <div className='container'>
                    <div>
                        <ProjectListItem />
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectList;