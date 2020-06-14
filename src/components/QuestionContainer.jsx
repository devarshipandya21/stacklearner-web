import React, { Component } from 'react'
import '../stylesheets/QuestionContainerStyle.css'
import QuestionContainerText from './QuestionContainerText'
import EditorContainer from './EditorContainer'

class QuestionContainer extends Component {
    render() {
        return (
            <div className="sidebar-container col-xs-3">
                <div className="sidebar-header">
                    Module 1
                    </div>
                <div className="sidebar">
                    <QuestionContainerText />
                </div>
            </div>
        )
    }
}

export default QuestionContainer
