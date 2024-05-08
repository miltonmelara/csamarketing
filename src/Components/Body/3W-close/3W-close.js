import React from 'react';
import ReactDOM from 'react-dom/client';
import './3W-close.css'
import CloseItem from '../closeItems/closeItems';

class CloseContainer extends React.Component{
    render(){
        return (
            <div className='closeContainer'>
                <CloseItem />
            </div>
        )
    }
}

export default CloseContainer;