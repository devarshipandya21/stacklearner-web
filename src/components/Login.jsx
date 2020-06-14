import React, { Component } from 'react'
import google_icon from '.././images/google-icon.png'
import fb_icon from '.././images/facebook-icon.png'
import linkedin_icon from '.././images/linkedin-icon.png'
import github_icon from '.././images/github-icon.png'
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            emailErrorMsg: ""
        }

    }

    validateEmail = (email) => {
        if (email.length === 0) {
            return ("")
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return ("")
        }
        return ("Enter a valid email address.")
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
            emailErrorMsg: this.validateEmail(event.target.value)
        })
    }

    handlePassChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div align="left" style={{ position: "absolute", left: this.props.xpos + "%", top: this.props.ypos + "%", width: "25rem", transform: "translate(-50%, -50%)" }}>
                <h4 className="h4">Log In to StackLearner</h4>
                <br />
                <form className="form-group">
                    <div>
                        <label className="label label-default font-weight-bold">Email</label>
                        <br />
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}></input>
                        <small className="text-danger">{this.state.emailErrorMsg}</small>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label className="label label-default font-weight-bold">Password</label>
                        <br />
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange}></input>
                        <br />
                    </div>
                    <a href="#" className="text-muted font-weight-bold">I forgot my password</a>
                    <br /><br />
                    <Link to="/student-dashboard">
                        <input type="submit" className="btn btn-primary w-100" style={{ height: "3rem", fontSize: "1.25rem" }} value="Log in"></input>
                    </Link>
                </form>
                <p className="font-weight-bold">Login with another account</p>
                <div className="row" style={{ width: "16rem" }}>
                    <button className="btn btn-default col col-xs-4"><img src={google_icon} /></button>
                    <button className="btn btn-default col col-xs-4"><img src={fb_icon} /></button>
                    <button className="btn btn-default col col-xs-4"><img src={linkedin_icon} /></button>
                    <button className="btn btn-default col col-xs-4"><img src={github_icon} /></button>
                </div>
            </div>
        )
    }

}

export default Login



