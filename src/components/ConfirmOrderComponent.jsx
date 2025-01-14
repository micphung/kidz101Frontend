import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'
import ProcessedCartItemService from '../services/ProcessedCartItemService'
import OrderService from '../services/OrderService'
import MarketHeaderComponent from './MarketHeaderComponent'


import { Image } from 'react';

class ConfirmOrderComponent extends Component {
     constructor(props) {
        super(props)

        
        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                cartItems: [], 
                total:'',
                finalTotal:'',
                cardNumber:'',
                street:'',
                state:'',
                city:'',
                zip:'',

                oId: this.props.match.params.oId,
                cId: this.props.match.params.cId
        }
       
        this.myCartHandler= this.myCartHandler.bind(this);
        this.changeCardNumberHandler=this.changeCardNumberHandler.bind(this);
         this.changeStreetHandler=this.changeStreetHandler.bind(this);
          this.changeCityHandler=this.changeCityHandler.bind(this);
           this.changeStateHandler=this.changeStateHandler.bind(this);
            this.changeZipHandler=this.changeZipHandler.bind(this);
             
        //this.confirmPaymentHandler=this.confirmPaymentHandler.bind(this);
    }

    componentDidMount(){
          let cId = this.state.cId;
           CartItemService.totalBycIdQuery(cId).then((res) => {
            this.setState({ total: res.data});
        });

        // CartItemService.searchcIdItemsByQuery(cId).then((res) => {
        //     this.setState({ cartItems: res.data});
        // });
     }

   //   addCartProduct(id){
   //      this.props.history.push(`/add-cart-item/${id}/${this.state.cId}`);
   //   }

    changeCardNumberHandler= (event) => {
            this.setState({cardNumber: event.target.value});
        }
      changeStreetHandler= (event) => {
            this.setState({street: event.target.value});
        }
      changeCityHandler= (event) => {
            this.setState({city: event.target.value});
        }
      changeStateHandler= (event) => {
            this.setState({state: event.target.value});
        }
      changeZipHandler= (event) => {
            this.setState({zip: event.target.value});
        }

   //  mySearchHandler= (event) => {
   //      this.setState({query: event.target.value});
   //  }

   myCartHandler(){
            this.props.history.push(`/my-cart/${this.state.cId}/${this.state.oId}`);
        }
  

     confirmPaymentHandler= () => {
            this.state.finalTotal = ((this.state.total) + ((this.state.total)*(0.0725)) + 10) ;
            let order= {cId: this.state.cId, oId: this.state.oId, total: this.state.finalTotal, paymentCard: this.state.paymentCard, street: this.state.street, city: this.state.city, state: this.state.state, zip: this.state.zip }

            console.log('order=> ' +JSON.stringify(order));
            OrderService.createOrder(order);
            CartItemService.deleteAllCartItembyCID(this.state.cId);
            this.props.history.push(`/market/${this.state.cId}`);
        

            // let finalTotal = ((this.state.total) + ((this.state.total)*(0.0725)) + 10);
            // console.log(this.state.finalTotal);

             // this.state.cartItems.map( 
             //                            cartItem => ProcessedCartItemService.createItem(cartItem));

            // for each cart item by cid get info crete processed object and create prcessed object 
            
            //this.props.history.push(`/search-market-products/${this.state.cId}/${this.state.query}`);

        }



    render() {
        return (
           
            <div className= "scrollbar-ripe-malinka">
            <MarketHeaderComponent/>
                 <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Kidz101</h2>
    
                
                    <div className = "form-group">
                    <label> Your ID </label>
                    <br></br>
                    <input name="cId"
                        value={this.state.cId}/>
                    </div>
                    
                 <br></br><br></br>                 
                 <div>
                   <button className="btn btn-primary" id="btn" onClick={this.myCartHandler}> My Cart</button>
                 </div>
                 
                 <div className = "row">
                      

 <br></br><br></br>
                 <div className = "row">
                 
                      <table className = "table table-striped table-bordered">
                          <tr>
                              <th>Order Details</th>
                              <th>  </th>
                          </tr>
                            <tr>
                              <th>Subtotal</th>
                              <th> {this.state.total} </th>
                          </tr>
                           <tr>
                              <th>Tax 7.25 %</th>
                              <th> {((this.state.total)*(0.0725)).toFixed(2)} </th>
                          </tr>
                           <tr>
                              <th>Shipping Fee</th>
                              <th> 10 </th>
                          </tr>
                          <tr>
                              <th>Total</th>
                              <th> {((this.state.total) + ((this.state.total)*(0.0725)) + 10) } </th>
                          </tr>
                      </table>

                      <div className = "card-body">
                                    <form>

                                       <div className = "form-group">
                                            <label> Payment Card: </label>
                                            <input placeholder="Enter Card Number" name="cardNumber" className="form-control" 
                                                value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label> Street Address: </label>
                                            <input placeholder="Enter your street addressr" name="street" className="form-control" 
                                                value={this.state.street} onChange={this.changeStreetHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="City name here" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label> State: </label>
                                            <input placeholder="Example: CA " name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label> Zip: </label>
                                            <input placeholder="Enter zip number here" name="zip" className="form-control" 
                                                value={this.state.zip} onChange={this.changeZipHandler}/>
                                        </div>
                                        <div className = "centerButton">
                                            <button className="btn btn-success" onClick={this.confirmPaymentHandler}>Confirm Order</button>
                                        </div>
                                        </form>
                      </div>

                                       
                                        


                 </div>

                        

                 </div>
                 
                 <br></br><br></br><br></br><br></br>
            </div>

        )
    }
}
export default ConfirmOrderComponent 

















