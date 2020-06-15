import React, { Component } from 'react'
import '../stylesheets/WelcomeCardStyle.css'
import LessonBar from './LessonBar'

class WelcomeCard extends Component {
    render() {
        return (
            <div className="container p-0">
                <p className="font-weight-bold text-left" style={{ position: "relative", top: "0.5rem", fontSize: "1.5rem" }}>Learn</p>
                <div className="card text-left welcomestyle">
                    <div className="card-body text-dark">
                        <h4 className="card-title">Welcome to StackLearner</h4>
                        <p className="card-text font-weight-bold text-left">
                            Currently on StackLearner
                    </p>
                        <div className="row ml-1">
                            <LessonBar />
                            <LessonBar />
                            <LessonBar />
                            <LessonBar />
                        </div>
                        <a href="#" className="font-weight-bold text-right" style={{ fontSize: "1.2rem", color: "black" }}>
                            Start<i className="fa fa-arrow-circle-right" style={{ marginLeft: "0.5rem" }}>
                            </i></a>
                    </div>
                </div>
            </div>

        )
    }
}

export default WelcomeCard
