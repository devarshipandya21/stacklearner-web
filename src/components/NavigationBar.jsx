import React from 'react'
import logo from '../images/logo192.png'

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow" style={{ position: "fixed", top: "0px", width: "100%", zIndex: 100, height: "5rem" }}>
        <img src={logo} width="30" height="30" alt="logo" style={{ marginRight: "1rem" }}></img>
        <a className="navbar-brand" href="#">stacklearner</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link pr-5 pl-5" href="#">Home</a>
                    {/* <span className="sr-only">(current)</span> */}
                </li>
                <li className="nav-item">
                    <a className="nav-link pr-5" href="#">Catalog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active pr-5" href="#">Log in</a>
                </li>
                <li className="nav-item">
                    <button className="btn btn-primary">Sign up</button>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavigationBar