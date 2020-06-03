import React from 'react'

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: "fixed", top: 0, width: "100%", zIndex: 100}}>
        <a className="navbar-brand" href="#">stacklearner</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link pr-4" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pr-4" href="#">Catalog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
            </ul>
        </div>
        <div>
            <button className="btn btn-dark pr-4">Log in</button>
            <button className="btn btn-primary">Sign up</button>
        </div>
    </nav>
)

export default NavigationBar