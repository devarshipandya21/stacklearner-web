import $ from 'jquery'
import 'bootstrap'
import React, { Component } from 'react'
import '../stylesheets/EditorToolbarStyle.css'


class EditorToolbar extends Component {
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    componentDidUpdate() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    render() {
        return (
            <div className="editortoolbar shadow" align="left">
                <button className="runbtn btn">RUN<i class="fa fa-play-circle" aria-hidden="true" style={{ marginLeft: "0.5rem" }}></i></button>
                <button type="button" className="btn btn-dark rounded-0" data-toggle="tooltip" data-placement="top" title="Reset exercise">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-dark ml-5 rounded-0">
                <i class="fa fa-lightbulb-o mr-2" aria-hidden="true"></i>
                View Solution
                </button>
            </div>
        )
    }
}

export default EditorToolbar
