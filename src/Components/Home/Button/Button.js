import React from 'react';
import ReactDOM from 'react-dom/client';
import './Button.css'
import { SectionContext } from '../../../SectionContext';

class Button extends React.Component{
    static contextType = SectionContext;

    handleClick = () => {
        const { formRef } = this.context;
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    render(){
        return(
            <div className='buttonHolder'>
                <button className='want-this-button' onClick={this.handleClick}>I want this!</button>
            </div>
        )
    }
}

export default Button;