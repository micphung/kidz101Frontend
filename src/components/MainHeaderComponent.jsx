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
                    <nav className="navbar navbar-expand-md" id="loginBox">
                        <div><a href="" className="navbar-brand"><img id="logo" src="/kidzLogo.png" alt="logo" /></a></div>

                        <div className="navbar-nav ml-auto"><a href="http://localhost:3000/sellers" className="navbar-brand ms-auto">Seller Portal</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default MainHeaderComponent