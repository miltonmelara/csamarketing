import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Nav.css"
import logo from "./logo.png"
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render(){
        return(
            <header className='Nav-container'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt='logo'/>
                </div>
                <nav>
                    <ul>
                        <li id='home'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li id='blog'>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav;