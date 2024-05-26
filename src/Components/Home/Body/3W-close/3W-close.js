import React from 'react';
import ReactDOM from 'react-dom/client';
import './3W-close.css';
import CloseItem from '../closeItems/closeItems';

class CloseContainer extends React.Component{
    render(){
        return (
            <div className='close-container'>
                <h3 className='close-title'>So How Do You Get the Most Out of Your Marketing?</h3>
                <CloseItem />
            </div>
        )
    }
}

export default CloseContainer;