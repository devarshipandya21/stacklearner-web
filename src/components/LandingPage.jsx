import NavigationBar from './NavigationBar'
import Signup from './Signup'
import stacklearner from '.././images/stacklearner.png'

import React from 'react'

function LandingPage() {
    return (
        <div>
            <img src={stacklearner} width="500px" style={{ position: "absolute", top: "4rem", left: "3rem" }}></img>
            <Signup xpos="60" ypos="10" from="LandingPage"></Signup>
        </div>
    )
}

export default LandingPage
