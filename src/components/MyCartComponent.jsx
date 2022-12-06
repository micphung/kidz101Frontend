import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'
import ProcessedCartItemService from '../services/ProcessedCartItemService'
import MarketHeaderComponent from './MarketHeaderComponent'




import { Image } from 'react';

class MyCartComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                cartItems: [], 
                oId: this.props.match.params.oId,
                
                cId: this.props.match.params.cId
              
        }


        this.confirmOrderHandler = this.confirmOrderHandler.bind(this);
        this.editCartItem = this.editCartItem.bind(this);
        this.deleteCartItemHandler = this.deleteCartItemHandler.bind(this);
        this.backToMarketHandler = this.backToMarketHandler.bind(this);
    }

   
  

    componentDidMount(){
        let cId = this.state.cId;

        CartItemService.searchcIdItemsByQuery(cId).then((res) => {
            this.setState({ cartItems: res.data});
        });

         // CartItemService.totalBycIdQuery(cId).then((res) => {
         //    this.setState({ total: res.data});
        // });
     }

   confirmOrderHandler(){
      
        this.props.history.push(`/checkout/${this.state.cId}/${this.state.oId}`);
    }

    backToMarketHandler(){
        this.props.history.push(`/market/${this.state.cId}`);
    }

   deleteCartItemHandler(ciId){
    // CartItemService.getCartItemById(ciId).then( res => 
    //     this.setState({cartItem: res.data});
    ProcessedCartItemService.deleteCartItemByCiId(ciId);
    CartItemService.deleteCartItem(ciId).then( res => {
        this.setState({cartItems: this.state.cartItems.filter(cartItem => cartItem.ciId !== ciId)});
    });


    CartItemService.totalBycIdQuery(this.state.cId).then((res) => {
            this.setState({ total: this.state.total});
        });
    }
    
    editCartItem(ciId){
        this.props.history.push(`/update-cart-item/${ciId}/${this.state.cId}`);
    }

    render() {
        return (
           <div>
           <MarketHeaderComponent/>
            <div className= "scrollbar-ripe-malinka">
                 <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Your Cart</h2>
                 <div className = "form-group">
                    <label> Your ID </label>
                    <br></br>
                    <input name="cId"
                        value={this.state.cId}/>

                </div>
                
                
                 <br></br>
                 <div>
                   <button className="btn btn-primary" id="btn" onClick={this.backToMarketHandler}> Back to Market</button>
                   
                                                <button onClick={()=> this.confirmOrderHandler(this.state.cId)} className="btn btn-primary  offset-md-9">Confirm Order</button>
                                                
                                             
                 </div>

                 <div className = "row">
                      


                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> Product Name</th>
                                
                                    <th> Unit Price</th>
                                    <th> Image URL</th>
                                    <th> Quantity</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                         
                                {
                                    // we are doing to iterate array products
                                    this.state.cartItems.map( 
                                        cartItem => 
                                        
                                        <tr key = {cartItem.ciId}>

                                             
                                             <td> {cartItem.iName} </td>   
                                            
                                             <td> {cartItem.iPrice}</td>
                                             <td> <img src= {cartItem.iUrl}  width="200" height="200" /></td>
                                             <td> {cartItem.qty}</td>
                                             <td>  {(cartItem.qty * cartItem.iPrice)}</td>
                                             <td className = "centerButton">
                                                <button onClick={()=> this.editCartItem(cartItem.ciId)} className="btn btn-info">Edit </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCartItemHandler(cartItem.ciId)} className="btn btn-danger">Remove </button>
                                             </td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>
                        

                 </div>
                
                 <br></br><br></br><br></br><br></br>
            </div>
            </div>

        )
    }
}

export default MyCartComponent