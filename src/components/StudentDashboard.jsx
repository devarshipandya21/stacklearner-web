import React, { Component } from 'react'
import CourseCard from './CourseCard'
import python_card from '.././images/python_card.jpg'
import javascript_card from '.././images/javascript_card.jpg'
import cpp_card from '.././images/cpp_card.jpg'

class StudentDashboard extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center" style={{ position: "absolute", top: "10rem" }}>
                <div className="row">
                    <div className="col-md-4">
                        <CourseCard imgsrc={python_card} coursename="Python 3.6 for Absolute Beginners"/>
                    </div>
                    <div className="col-md-4">
                        <CourseCard imgsrc={javascript_card} coursename="Modern JavaScript from Scratch"/>
                    </div>
                    <div className="col-md-4">
                        <CourseCard imgsrc={cpp_card} coursename="C++: From Beginner to Expert"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentDashboard
