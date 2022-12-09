import React, { Component } from 'react'

import WelcomePageHeaderComponent from './WelcomePageHeaderComponent'

class WelcomePageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.toConsumerLoginHandler = this.toConsumerLoginHandler.bind(this);
        this.toSellerLoginHandler = this.toSellerLoginHandler.bind(this);


    }




    toConsumerLoginHandler = (event) => {
        this.props.history.push(`/consumerLogin`);
    }

    toSellerLoginHandler = (event) => {
        this.props.history.push(`/sellers`);
    }



    render() {
        return (

            <div id="loginContainer2" class="justify-content-center">
                <WelcomePageHeaderComponent />
                <div id="loginContainer" className="row">

                    <div id="welcomePage" className="card col-md-10 ">
                        <h1 className="text-center">Welcome to Kidz101</h1>
                        <hr />
                        <form>
                            <div id="welcomeButtons">

                                <button className="btn btn-outline-primary mr-1" onClick={this.toConsumerLoginHandler}>Consumer Marketplace</button>

                                <button className="btn btn-outline-primary col-sm-3" onClick={this.toSellerLoginHandler}>Seller Portal</button>


                            </div>

                        </form>
                    </div>
                </div>
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
                <div class="circle5"></div>
                <div class="circle6"></div>
            </div>

        )
    }
}

export default WelcomePageComponent