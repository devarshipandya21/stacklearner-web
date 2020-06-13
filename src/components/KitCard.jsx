import React, { Component } from 'react'
import '../stylesheets/KitCardStyle.css'

class KitCard extends Component {
    render() {
        return (
                <div className="card shadow kitcardcontainer" style={{ position: "relative", backgroundColor: this.props.bgcolor, display: "grid"}}>
                    <div className="card-body text-dark kitcard">
                        <img src={this.props.img} alt="illustration" width="100 px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                        <h5 className="card-title" style={{color: "white", marginTop: "1.5rem"}}>{this.props.txt}</h5>
                    </div>
                </div>
        )
    }
}

export default KitCard
