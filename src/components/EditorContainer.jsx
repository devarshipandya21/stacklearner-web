import React, { Component } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import EditorToolbar from './EditorToolbar'

class EditorContainer extends Component {
    text = "// Sample hello world function\nfunction helloWorld() {\ndocument.getElementById(\"demo\")\n\t\t.innerHTML = \"Hello World!\";\n}\n\nhelloWorld();";
    render() {
        return (
            <div style={{height: "100%"}}>
                <AceEditor theme="monokai" mode="javascript" height="80rem" width="35rem" fontSize="16px" defaultValue={this.text}/>
                <EditorToolbar />
            </div>
        )
    }
}

export default EditorContainer
