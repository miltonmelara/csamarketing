import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Nav.css"
import logo from "./logo.png"

class Nav extends React.Component {
    render(){
        return(
            <header className='Nav-container'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <nav>
                    <p id='home'>Home</p>
                    <p id='blog'>Blog</p>
                </nav>
            </header>
        )
    }
}

export default Nav;