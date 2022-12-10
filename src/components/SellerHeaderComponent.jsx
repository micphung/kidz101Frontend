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
                    <nav className="navbar navbar-expand-md" id="loginBox">
                        <div><a href="" className="navbar-brand"><img id="logo" src="/kidzLogo.png" alt="logo" /></a></div>


                        <div className="navbar-nav ml-auto"><a href="http://localhost:3000/consumerLogin" id="headerButton" className="navbar-brand">Market Place</a></div>

                        
                    </nav>
                </header>
            </div>
        )
    }
}

export default SellerHeaderComponent