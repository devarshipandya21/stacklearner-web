import NavigationBar from './NavigationBar'
import Signup from './Signup'
import stacklearner from '.././images/stacklearner.png'

import React from 'react'

function LandingPage() {
    return (
        <div className="m-0">
            <div className="row justify-content-around">
                <div className="col-md-4 col-sm-12">
                    <img src={stacklearner} width="500px" className="img-fluid" style={{ position: "relative", top: "4rem" }}></img>
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4 col-sm-12 align-self-center">
                    <Signup from="LandingPage"></Signup>
                </div>

            </div>

        </div>
    )
}

export default LandingPage
