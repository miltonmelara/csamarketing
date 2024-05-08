import React from "react";
import ReactDOM from 'react-dom/client';
import CloseContainer from "./3W-close/3W-close";
import DifferenceSection from "./differenceSection/DifferenceSection";
import './Body.css'

class Body extends React.Component{
    render(){
        return(
            <div className="body-container">
                <p>Problem highlight</p>
                <CloseContainer />
                <h2>What makes us different?</h2>
                <DifferenceSection />
                <p>Time travel and CTA</p>
            </div>
        )
    }
}

export default Body;