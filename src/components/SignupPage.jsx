import React, { Component } from 'react'
import signupimage from ".././images/signup_image.png"
import Signup from './Signup'

export class SignupPage extends Component {
    render() {
        return (
            <div>
                <img src={signupimage} width="500px" style={{ position: "absolute", top: "5rem", left: "7rem" }}></img>
                <Signup xpos="60" ypos="10" from="SignupPage"/>
            </div>
        )
    }
}

export default SignupPage
