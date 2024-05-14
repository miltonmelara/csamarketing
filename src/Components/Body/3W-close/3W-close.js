import React from 'react';
import ReactDOM from 'react-dom/client';
import './3W-close.css';
import CloseItem from '../closeItems/closeItems';

class CloseContainer extends React.Component{
    render(){
        return (
            <div className='close-container'>
                <h2 className='close-title'>So you have three options:</h2>
                <CloseItem />
            </div>
        )
    }
}

export default CloseContainer;