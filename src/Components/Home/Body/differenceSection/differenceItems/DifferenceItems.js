import React from 'react';
import ReactDOM from 'react-dom/client';
import './DifferenceItems.css';
import guaranteeIcon from '../../Icons/Guarantee.png';
import localIcon from '../../Icons/Local.png';
import specializationIcon from '../../Icons/Specialization.png';
import resultsIcon from '../../Icons/Results.png';


const DifferenceItem = () => {
  // Function to create custom components with different values
  const CustomComponent = ({ icon, title, description1, description2 }) => {
    return (
      <div className='differenceItem'>
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
        title: 'Guarantee', 
        description1: "We believe in shared success. Our 100% ROI guarantee means we only win when you win.", 
        description2:"No more bearing all the risk alone. We're in this together.",
        icon: guaranteeIcon,
      },
      { 
        title: 'Local Expertise', 
        description1: "As locals, we have a deep understanding of your market's nuances.", 
        description2:"We're on the frontline, ensuring your strategies resonate with your target audience.",
        icon: localIcon,
      },
      {
        title: 'Results',
        description1: "Our first priority is to get you results.",
        description2: "Less talking and more doing.",
        icon: resultsIcon,
      },
      { 
        title: 'Specialization', 
        description1: 'We specialize in serving construction businesses, offering tailored solutions that deliver targeted and impactful results.',
        icon: specializationIcon,
      }
    ];

    // Generate and render each component
    const components = componentData.map((data, index) => (
      <CustomComponent key={index} title={data.title} description1={data.description1} description2={data.description2} icon={data.icon}/>
    ));

    return <div className='difference-items-container'>{components}</div>;
  };

  return <GenerateComponents />;
};

export default DifferenceItem;
