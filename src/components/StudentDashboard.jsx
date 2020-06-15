import React, { Component } from 'react'
import CourseCard from './CourseCard'
import python_card from '.././images/python_card.jpg'
import javascript_card from '.././images/javascript_card.jpg'
import cpp_card from '.././images/cpp_card.jpg'
import GoPremium from './GoPremium'
import WelcomeCard from './WelcomeCard'
import PracticeCard from './PracticeCard'
import { findByLabelText } from '@testing-library/react'
import KitCard from './KitCard'
import kitimg1 from '../images/kit-img-1.png'
import kitimg2 from '../images/kit-img-2.png'
import kitimg3 from '../images/kit-img-3.png'

class StudentDashboard extends Component {
    render() {
        return (
            <div style={{ position: "relative", top: "1rem", margin: "auto", width: "90%" }}>
                <div style={{ position: "relative", top: "5rem", margin: "1rem" }}><GoPremium /></div>
                <div className="container-fluid d-flex" style={{ display: "flex", position: "relative", top: "5rem", margin: "1rem" }}>
                    <WelcomeCard />
                    <PracticeCard />
                </div>

                <div className="flex" style={{ marginBottom: "2rem", position: "relative", top: "7rem" }}>
                    <p className="font-weight-bold text-left margin-left: 1rem" style={{ position: "relative", top: "0rem", fontSize: "1.5rem" }}>Starter Kit</p>
                    <div className="container-fluid d-flex" style={{ display: "grid", gridGap: "2rem", position: "relative", top: "0rem", margin: "0rem", justifyContent: "space-between"}}>
                        <KitCard img={kitimg1} bgcolor="#5F4B8BFF" txt="Take our Starter Quiz" />
                        <KitCard img={kitimg2} bgcolor="#696667FF" txt="Introduce yourself to our community" />
                        <KitCard img={kitimg3} bgcolor="#97BC62FF" txt="Start the 7-Day challenge" />
                    </div>
                </div>

                <div className="flex" style={{ position: "relative", top: "7rem", margin: "1rem" }}>
                    <p className="font-weight-bold text-left margin-left: 1rem" style={{ position: "relative", top: "1rem", fontSize: "1.5rem", textAlign: "center" }}>My Courses</p>
                    <div className="container-fluid d-flex flex-wrap" style={{ display: "grid", gridGap: "3rem", position: "relative", top: "0rem", margin: "0rem", justifyContent: "flex-start"}}>
                        <CourseCard imgsrc={python_card} coursename="Python 3.6 for Absolute Beginners" />
                        <CourseCard imgsrc={javascript_card} coursename="Modern JavaScript from Scratch" />
                        <CourseCard imgsrc={cpp_card} coursename="C++: From Beginner to Expert" />
                    </div>
                </div>


            </div>

        )
    }
}

export default StudentDashboard
