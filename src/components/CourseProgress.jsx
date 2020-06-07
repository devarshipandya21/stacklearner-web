import React, { Component } from 'react'
import '.././stylesheets/ProgressBarStyle.css'

class CourseProgress extends Component {
    render() {
        return (
            <div className="progress">
                <div className="progress-bar bg-success" style={{width: this.props.prgval + "%"}}></div>
            </div>
        )
    }
}

export default CourseProgress
