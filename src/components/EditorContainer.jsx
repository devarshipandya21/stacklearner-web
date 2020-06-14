import React, { Component } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import EditorToolbar from './EditorToolbar'

class EditorContainer extends Component {
    render() {
        return (
            <div style={{height: "100%", marginLeft: "30%"}}>
                <AceEditor theme="monokai" mode="javascript" height="600px" width="35rem" fontSize="16px"/>
                <EditorToolbar />
            </div>
        )
    }
}

export default EditorContainer
