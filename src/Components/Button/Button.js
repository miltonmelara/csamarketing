import React from 'react';
import ReactDOM from 'react-dom/client';
import './Button.css'

class Button extends React.Component{
    render(){
        return(
            <div className='buttonHolder'>
                <button>I want this!</button>
            </div>
        )
    }
}

export default Button;