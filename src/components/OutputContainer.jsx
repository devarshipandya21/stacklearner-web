import React, { Component } from 'react'
import '../stylesheets/OutputContainerStyle.css'
import emptystate from '../images/empty-state-2.png'

class OutputContainer extends Component {
    render() {
        return (
            <div className="outputwindow">
                <div className="outputheader">
                    Output
                </div>
                <img src={emptystate} alt="no output" width="500px" style={{position: "relative", top: "10rem"}}/>
                <p className="text-muted" style={{position: "relative", top: "7rem"}}>
                    <span className="font-weight-bold" style={{fontSize: "1.3rem"}}>Nothing to display!</span> <br />
                    Run the program to see the output.
                </p>
            </div>
        )
    }
}

export default OutputContainer
