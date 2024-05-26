import React from "react";
import Header from './header/header';
import Button from './Button/Button'
import Body from './Body/Body';
import ApplicationForm from './Form/Form';

class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <Header />
                <Button />
                <Body />
                <ApplicationForm />
            </div>
        )
    }
}

export default Home;