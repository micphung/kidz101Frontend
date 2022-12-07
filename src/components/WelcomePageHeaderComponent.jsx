import React, { Component } from 'react'

class WelcomePageHeaderComponent extends Component {
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


                    </nav>
                </header>
            </div>
        )
    }
}

export default WelcomePageHeaderComponent