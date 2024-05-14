import React from 'react';
import ReactDOM from 'react-dom/client';
import './closeItems.css';

const CloseItem = () => {
  // Function to create custom components with different values
  const CustomComponent = ({ className, title, description }) => {
    return (
      <div className='closeItem'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  // Function to generate different instances of CustomComponent
  const GenerateComponents = () => {
    // Define the data for each instance
    const componentData = [
      { title: 'Component 1', description: 'Description for Component 1' },
      { title: 'Component 2', description: 'Description for Component 2' },
      { title: 'Component 3', description: 'Description for Component 3' }
    ];

    // Generate and render each component
    const components = componentData.map((data, index) => (
      <CustomComponent key={index} title={data.title} description={data.description} />
    ));

    return <div className='close-items-container'>{components}</div>;
  };

  return <GenerateComponents />;
};

export default CloseItem;
