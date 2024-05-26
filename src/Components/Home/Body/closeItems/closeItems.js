import React from 'react';
import ReactDOM from 'react-dom/client';
import './closeItems.css';
import diyIcon from '../Icons/DIY.png';
import agencyIcon from '../Icons/Agency.png';
import partnershipIcon from '../Icons/Partnership.png';

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
        description1: "While the DIY approach may seem cost-effective, it's not always feasible when you're juggling multiple responsibilities.", 
        description2: "Your time is precious, and spreading yourself too thin could hinder your business growth.",
        icon: diyIcon,
       },
      { 
        title: 'Hire an Agency?', 
        description1: 'Many agencies promise results, but not all deliver. Generic strategies and lack of personalized attention can leave you feeling disconnected.', 
        description2: 'Plus, exorbitant fees often mean your account is managed by someone far removed from the frontline.',
        icon: agencyIcon,
      },
      { 
        title: 'Our Model', 
        description1: "Partnering with us means more than just another service provider. We become an integral part of your team, understanding your goals intimately.", 
        description2: "As locals, we're embedded in your market, ensuring strategies are tailored and effective.",
        icon: partnershipIcon,
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
