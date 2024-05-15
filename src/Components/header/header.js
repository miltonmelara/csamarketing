import React from 'react';
import ReactDOM from 'react-dom/client';
import './header.css'

class Header extends React.Component {
    render(){
        return (
            <div className='header-contaniner'>
                <h1>More Growth. More Customers.</h1>
                <h1><em>Guaranteed.</em></h1>
            </div>
        )
    }
}

export default Header;