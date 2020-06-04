import React, { Component } from 'react'
import '.././stylesheets/CourseCardStyle.css'

class CourseCard extends Component {
    render() {
        return (
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={this.props.imgsrc} alt="img" className="card-img-top"></img>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.coursename}</h4>
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, possimus optio impedit eum nobis deleniti.
                    </p>
                    <a href="#" className="btn btn-outline-success">Resume Course</a>
                </div>

            </div>
        )
    }
}

export default CourseCard
