import React from 'react';
import ReactDOM from 'react-dom/client';
import './closeItems.css';
import diyIcon from '../Icons/DIY.png';
import agencyIcon from '../Icons/Agency.png';
import staffIcon from '../Icons/Staff.png';

const CloseItem = () => {
  // Function to create custom components with different values
  const CustomComponent = ({ icon, className, title, description1, description2 }) => {
    return (
      <div className='closeItem'>
        <img className='icon' src={icon}/>
        <h4>{title}</h4>
        <p className='description'>{description1}</p>
        <p className='description'>{description2}</p>
      </div>
    );
  };

  // Function to generate different instances of CustomComponent
  const GenerateComponents = () => {
    // Define the data for each instance
    const componentData = [
      { 
        title: ' Do Everything Yourself?', 
        description1: "That's fine if you have very little on your plate.", 
        description2: "But if you're pretty swamped already... this isn't a viable option.",
        icon: diyIcon,
       },
      { 
        title: 'New staff?', 
        description1: "Finding good people isn't easy. Training and onboarding staff is costly.", 
        description2: "And even if you do find the perfect man or woman for the position... you're still depending on one person!",
        icon: staffIcon,
      },
      { 
        title: 'Hire an agency?', 
        description1: "Don't have a marketing budget of tens of thousands of euros? Then your account could end up being managed  by the intern of the assistants' assistant.",
        description2: "Not exactly optimal.",
        icon: agencyIcon,
      }
    ];

    // Generate and render each component
    const components = componentData.map((data, index) => (
      <CustomComponent key={index} title={data.title} description1={data.description1} description2={data.description2} icon={data.icon} />
    ));

    return <div className='close-items-container'>{components}</div>;
  };

  return <GenerateComponents />;
};

export default CloseItem;
