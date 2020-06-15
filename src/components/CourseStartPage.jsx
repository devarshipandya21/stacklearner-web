import React, { Component } from 'react'
import QuestionContainer from './QuestionContainer'
import EditorContainer from './EditorContainer'
import OutputContainer from './OutputContainer'
import '../stylesheets/CoursePageStyle.css'

class CourseStartPage extends Component {
    render() {
        return (
            <div className="main-wrapper row">
                <div className="col-md-4 col-sm-12 col-xs-12 p-0">
                    <QuestionContainer />
                </div>
                <div className="screenhide">
                    <div className="col-md-4 p-0">
                        <EditorContainer />
                    </div>
                    <div className="col-md-4 p-0">
                        <OutputContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseStartPage
