import React, { Component } from 'react'
import QuestionContainer from './QuestionContainer'
import EditorContainer from './EditorContainer'

class CourseStartPage extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <QuestionContainer />
                <EditorContainer />
            </div>
        )
    }
}

export default CourseStartPage
