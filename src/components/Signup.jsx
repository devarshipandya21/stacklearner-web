import React, { Component } from 'react'
import google_icon from '.././images/google-icon.png'
import fb_icon from '.././images/facebook-icon.png'
import linkedin_icon from '.././images/linkedin-icon.png'
import github_icon from '.././images/github-icon.png'


class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePassChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        var headerMessage, btnText;        
        if(this.props.from === "SignupPage") {
            headerMessage = "Get Started for Free"
            btnText = "Start coding now"
        }
        else if(this.props.from === "LandingPage") {
            headerMessage = "Get Started"
            btnText = "Sign up for free"
        }
        return (
            <div align="left" style={{ position: "absolute", left: this.props.xpos + "rem", top: this.props.ypos + "rem", width: "25rem" }}>
                <h4 className="h4">{headerMessage}</h4>
                <br />
                <form className="form-group">
                    <div>
                        <label className="label label-default font-weight-bold">Email</label>
                        <br />
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label className="label label-default font-weight-bold">Password</label>
                        <br />
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange}></input>
                        <br />
                    </div>
                    <input type="submit" className="btn btn-primary w-100" style={{height: "3rem", fontSize: "1.25rem"}} value={btnText}></input>
                </form>
                <p className="text-muted">By signing up for StackLearner, you agree to <br />StackLearner's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.</p>
                <p className="font-weight-bold">Or, use another account</p>
                <div className="row" style={{width: "16rem"}}>
                    <button className="btn btn-default col col-xs-4"><img src={google_icon} /></button>
                    <button className="btn btn-default col col-xs-4"><img src={fb_icon} /></button>
                    <button className="btn btn-default col col-xs-4"><img src={linkedin_icon} /></button>
                    <button className="btn btn-default col col-xs-4"><img src={github_icon} /></button>
                </div>

            </div>
        )
    }

}

export default Signup


//Class component- rce
//Function component- rfce
//console.log - clg
//constructor - rconst


