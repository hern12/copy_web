import React,{ Component }  from 'react';

class ContentItem extends Component {
    render() {
        return (
            <div className='content-item column is-4'>
                 <div className="">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <h3>{this.props.ddHead}</h3>
                                <p>{this.props.ddBody}</p>
                            </div>
                        </div>
                    </article>
                 </div>
            </div>
        )
    }
}

export default ContentItem;