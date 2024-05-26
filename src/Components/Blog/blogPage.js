import React from 'react';
import ReactDOM from 'react-dom/client';
import './blogPage.css';
import BlogItem from './blogs/blogs'

class BlogsContainer extends React.Component{
    render(){
        return(
            <div className='blogs'>
                <h2 className='blogs-title'>Recently Written</h2>
                <div className='blogsContainer'>
                    <BlogItem />
                </div>
            </div>
        )
    }
}

export default BlogsContainer;