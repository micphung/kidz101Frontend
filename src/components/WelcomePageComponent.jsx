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




    toConsumerLoginHandler= (event) => {
this.props.history.push(`/consumerLogin`);   
 }

    toSellerLoginHandler= (event) => {
this.props.history.push(`/sellers`); 
   }
    
   

    render() {
        return (
                    
                   <div>
                   <WelcomePageHeaderComponent />
                        <div className = "row">
                            <div className = "card col-md-10 ">
                            <br></br><br></br><br></br><br></br>
                                <h1 className="text-center">Welcome to Kidz101</h1>
                                <div className = "row">
                                 
                                  <div className="card col-md-10 offset-md-1">
                                    <form>
                                     <div className = "centerButton">
                                            
                                             <button className="btn btn-outline-primary mr-1" onClick={this.toConsumerLoginHandler}>Consumer Marketplace</button>
                                             &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-primary col-sm-3" onClick={this.toSellerLoginHandler}>Seller Portal</button>


                                        </div>
                                    
                                    </form>
                                </div>

                                      

                                </div>


                            </div>
                        </div>
                    </div>
         
        )
    }
}

export default WelcomePageComponent