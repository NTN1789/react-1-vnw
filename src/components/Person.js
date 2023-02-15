import React from "react"
class Person extends React.Component {
    constructor({fullName, img, address}) {
        super({fullName, img, address});
        this.state = {
            fullName: fullName,
            img: img,
            address: address
        }
    }
    render() {
        return (
            <figure className="person-card">
                <img src={this.state.img} alt={this.state.fullName} />
                <figcaption>{this.state.fullName} lives at {this.state.address}.</figcaption>
            </figure>
        )
    }
}

export default Person