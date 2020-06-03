import NavigationBar from './NavigationBar'
import Signup from './Signup'
import stacklearner from '.././images/stacklearner.png'

import React from 'react'

function LandingPage() {
    return (
        <div>
            <img src={stacklearner} width="500px" style={{ position: "absolute", top: 60, left: 0 }}></img>
            <Signup xpos="1000" ypos="200"></Signup>
        </div>
    )
}

export default LandingPage
