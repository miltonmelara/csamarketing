import React from 'react';
import ReactDOM from 'react-dom/client';
import './closeItems.css';

const CloseItem = () => {
  // Function to create custom components with different values
  const CustomComponent = ({ className, title, description }) => {
    return (
      <div className='closeItem'>
        <h4>{title}</h4>
        <p className='description'>{description}</p>
      </div>
    );
  };

  // Function to generate different instances of CustomComponent
  const GenerateComponents = () => {
    // Define the data for each instance
    const componentData = [
      { title: ' Do Everything Yourself?', description: "While the DIY approach may seem cost-effective, it's not always feasible when you're juggling multiple responsibilities. Your time is precious, and spreading yourself too thin could hinder your business growth." },
      { title: 'Hire an Agency?', description: 'Many agencies promise results, but not all deliver. Generic strategies and lack of personalized attention can leave you feeling disconnected. Plus, exorbitant fees often mean your account is managed by someone far removed from the frontline.' },
      { title: 'Our Model', description: "Partnering with us means more than just another service provider. We become an integral part of your team, understanding your goals intimately. As locals, we're embedded in your market, ensuring strategies are tailored and effective." }
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
