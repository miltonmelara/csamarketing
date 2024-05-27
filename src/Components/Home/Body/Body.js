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
                    <h2 className="problem-highlight-title">Marketing is important...</h2>
                    <p className="problem-highlight-paragraph">...but there are already 101 things on your to-do list. And they are all important too!</p>
                </div>
                <CloseContainer />
                <h3 className="difference-title">"Okay... But What Makes You Different?"</h3>
                <DifferenceSection />
                <br />
                <br />
            </div>
        )
    }
}

export default Body;