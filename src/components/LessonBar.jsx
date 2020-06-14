import React, { Component } from 'react'
import '../stylesheets/LessonBarStyle.css'
import lessonicon from '../images/lesson-icon.png'
import { Link } from 'react-router-dom'

class LessonBar extends Component {
    render() {
        return (
            <div className="lessonbar">
                <div className="lessonbarcontent">
                    <img src={lessonicon} alt="icon" width="30px" style={{ marginLeft: "1rem" }} />
                    <Link to="/course-page">
                        <a href="#"><span className="lessontext">Lesson</span>
                            <span className="lessontext">Lorem ipsum dolor sit</span></a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LessonBar
