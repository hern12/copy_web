import React,{ Component }  from 'react';
import ContentItem from './ContentItem.react';
import '../css/content.css';
class ContentList extends Component {

    render() {
        let data = {
            body1:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.',
            body2:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.',
            body3:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.'
        };
        return (
            <section className='content-list'>
                <div className='container'>
                    <div className='columns'>
                        <ContentItem ddHead='Twitter Marketing' ddBody={data.body1}/>
                        <ContentItem ddHead='Facebook Marketing' ddBody={data.body2}/>
                        <ContentItem ddHead='Google Plus Marketing' ddBody={data.body3}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentList;