import React from "react";
import ReactDOM from 'react-dom/client';
import CloseContainer from "./3W-close/3W-close";
import DifferenceSection from "./differenceSection/DifferenceSection";
import './Body.css'

class Body extends React.Component{
    render(){
        return(
            <div className="body-container">
                <div className="problem-highlight-container">
                    <p className="problem-highlight">Marketing is crucial, but it often gets buried under everything else you've got going on. As a business owner, you know how hectic things can get.</p>
                </div>
                <CloseContainer />
                <h3 className="difference-title">"Okay... But What Makes You Different?"</h3>
                <DifferenceSection />
                <p className="CTA">Time travel and CTA</p>
            </div>
        )
    }
}

export default Body;