import React, { Component } from 'react'

class MainHeaderComponent extends Component {
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
                    <div><a href=""className="navbar-brand">Kidz101 Market Place</a></div>

                    <div className="offset-md-8"><a href="http://localhost:3000/sellers" className="navbar-brand">Seller Portal</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default MainHeaderComponent