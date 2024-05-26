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
                <br />
                <div className="CTA-container">
                    <h3 className="CTA-title">So...</h3>
                    <p className="CTA">Are you ready to grow your business? Right now, you have two options:</p>
                    <br />
                    <p className="CTA">You can take action and watch your business soar,</p>
                    <br />
                    <p className="CTA">Or you can stay where you are, making excuses for why things aren't changing.</p>
                    <br />
                    <p className="CTA">If you're serious about growth, I believe you know what your best move is:</p>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default Body;