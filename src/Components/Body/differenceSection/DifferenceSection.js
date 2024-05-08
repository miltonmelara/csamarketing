import React from 'react';
import ReactDOM from 'react-dom/client';
import './DifferenceSection.css'
import DifferenceItem from './differenceItems/DifferenceItems';

class DifferenceSection extends React.Component{
    render(){
        return (
            <div className='differencesContainer'>
                <DifferenceItem />
            </div>
        )
    }
}

export default DifferenceSection;