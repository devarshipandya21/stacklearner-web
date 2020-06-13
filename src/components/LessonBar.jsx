import React, { Component } from 'react'
import '../stylesheets/LessonBarStyle.css'
import lessonicon from '../images/lesson-icon.png'

class LessonBar extends Component {
    render() {
        return (
            <div className="lessonbar">
                <div className="lessonbarcontent">
                    <img src={lessonicon} alt="icon" width="30px" style={{ marginLeft: "1rem" }} />
                    <a href="#"><span className="lessontext">Lesson</span>
                        <span className="lessontext">Welcome to StackLearner</span></a>
                </div>
            </div>
        )
    }
}

export default LessonBar
