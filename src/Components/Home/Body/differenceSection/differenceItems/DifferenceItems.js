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
        description1: "We only win if you win. That's the basis for a good partnership.",
        description2:"You won't carry all the risk, we'll share it.",
        icon: guaranteeIcon,
      },
      {
        title: 'Results',
        description1: "Our first priority is to get you results.",
        description2: "Less talk, more walk.",
        icon: resultsIcon,
      },
      { 
        title: 'Local Expertise', 
        description1: "We're not tucked away in some anonymous call center.",
        description2: "We're a local company, so you'll be able to reach us when you need us.",
        icon: localIcon,
      },
      { 
        title: 'Specialization', 
        description1: 'Jack of all trades... master of none. Specialization works',
        description2: "That's why we work with industries we know, so we can guarantee results.",
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
