import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="fixed-top">
                <header>
                    <nav className="navbar navbar-expand-md">
                        <div><a href="" className="navbar-brand"><img id="logo" src="/kidzLogo.png" alt="logo" /></a></div>

                        <div className="navbar-nav ml-auto"><a href="http://localhost:3000/" id="headerButton" className="navbar-brand">Sign Out</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent