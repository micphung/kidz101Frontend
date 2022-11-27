import React, { Component } from 'react'

class SellerHeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="fixed-top">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href=""className="navbar-brand">Kidz101 Seller Portal</a></div>

                    <div className="offset-md-8"><a href="http://localhost:3000/" className="navbar-brand">Market Place</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default SellerHeaderComponent