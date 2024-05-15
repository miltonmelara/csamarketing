import React from 'react';
import ReactDOM from 'react-dom/client';
import './DifferenceItems.css';

const DifferenceItem = () => {
  // Function to create custom components with different values
  const CustomComponent = ({ className, title, description }) => {
    return (
      <div className='differenceItem'>
        <h4>{title}</h4>
        <p className='description'>{description}</p>
      </div>
    );
  };

  // Function to generate different instances of CustomComponent
  const GenerateComponents = () => {
    // Define the data for each instance
    const componentData = [
      { title: 'Guarantee', description: "We believe in shared success. Our 100% ROI guarantee means we only win when you win. No more bearing all the risk alone. We're in this together." },
      { title: 'Local Expertise', description: "As locals, we have a deep understanding of your market's nuances. We're on the frontline, ensuring your strategies resonate with your target audience." },
      { title: 'Specialization', description: 'We specialize in serving construction businesses, offering tailored solutions that deliver targeted and impactful results.' }
    ];

    // Generate and render each component
    const components = componentData.map((data, index) => (
      <CustomComponent key={index} title={data.title} description={data.description} />
    ));

    return <div className='difference-items-container'>{components}</div>;
  };

  return <GenerateComponents />;
};

export default DifferenceItem;
