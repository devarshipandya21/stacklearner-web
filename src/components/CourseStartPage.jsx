import React, { Component } from 'react'
import QuestionContainer from './QuestionContainer'
import EditorContainer from './EditorContainer'
import OutputContainer from './OutputContainer'

class CourseStartPage extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <QuestionContainer />
                <EditorContainer />
                <OutputContainer />
            </div>
        )
    }
}

export default CourseStartPage
