import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'
import MarketHeaderComponent from './MarketHeaderComponent'




import { Image } from 'react';

class MyCartComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                cartItems: [], 
                qTotal:'',


                cId: this.props.match.params.cId
              
        }


        // this.addProduct = this.addProduct.bind(this);
        this.editCartItem = this.editCartItem.bind(this);
        this.deleteCartItemHandler = this.deleteCartItemHandler.bind(this);
        // this.allProduct = this.allProduct.bind(this);
    }

   
  

    componentDidMount(){
        let cId = this.state.cId;

        CartItemService.searchcIdItemsByQuery(cId).then((res) => {
            this.setState({ cartItems: res.data});
        });
     }

   // allProduct(){
   //      // console.log(SID);
   //      // console.log( typeof( SID ));
   //      this.props.history.push(`/products/${this.state.sId}`);
   //  }

   //  addProduct(){
   //      this.props.history.push(`/add-product/${this.state.sId}`);
   //  }

   deleteCartItemHandler(ciId){
    CartItemService.deleteCartItem(ciId).then( res => {
        this.setState({cartItems: this.state.cartItems.filter(cartItem => cartItem.ciId !== ciId)});
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