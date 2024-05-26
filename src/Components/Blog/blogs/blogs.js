import React from 'react';
import ReactDOM from 'react-dom/client';
import './blogs.css';
import businessGrowthImage from './images/businessGrowthImage.png'

const BlogItem = () => {
  // Function to create custom components with different values
  const CustomComponent = ({ author, date, readTime, title, description, image}) => {
    return (
      <div className='blogItem'>
        <div className='image-holder'>
          <img src={image} />
        </div>
        <div className='info-holder'>
          <p className='author'>{author}</p>
          <span className='date'>{date}</span>
          <span className='readTime'>{readTime}</span>
          <h4>{title}</h4>
          <p className='blog-description'>{description}</p>
        </div>
        
      </div>
    );
  };

  // Function to generate different instances of CustomComponent
  const GenerateComponents = () => {
    // Define the data for each instance
    const componentData = [
      {
        author: 'Milton Melara', 
        date: 'May 26', 
        readTime: '3 min', 
        title: 'How to scale your business', 
        description:'Ever wondered how businesses know what to do to become the best of the best? Wonder no more, inside you will find the keys on becoming a top 1% business in your industry',
        image: businessGrowthImage
      }
    ];

    // Generate and render each component
    const components = componentData.map((data, index) => (
      <CustomComponent key={index} title={data.title} description={data.description} author={data.author} date={data.date} readTime={data.readTime} image={data.image}/>
    ));

    return <div className='blog-items-container'>{components}</div>;
  };

  return <GenerateComponents />;
};

export default BlogItem;
