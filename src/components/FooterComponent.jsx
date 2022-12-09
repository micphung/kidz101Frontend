import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="fixed-bottom">
                <footer id="footer" className="footer">
                    <span className="text-muted">All Rights Reserved 2022 <p>Copyright &copy; Kidz101 </p></span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent