import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'


import { Image } from 'react';

class MyCartComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                cartItems: [], 


                cId: this.props.match.params.cId
              
        }


        // this.addProduct = this.addProduct.bind(this);
        // this.editProduct = this.editProduct.bind(this);
        // this.deleteProduct = this.deleteProduct.bind(this);
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

   // deleteProduct(id){
   //  ProductService.deleteProduct(id).then( res => {
   //      this.setState({products: this.state.products.filter(product => product.id !== id)});
   //  });
   //  }
    
   //  editProduct(id){
   //      this.props.history.push(`/update-product/${id}`);
   //  }

    render() {
        return (
           
            <div className= "scrollbar-ripe-malinka">
                 <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Product List</h2>
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
                                
                                    <th> Price</th>
                                    <th> Image URL</th>
                                    <th> Quantity</th>
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
                                             <td className = "centerButton">
                                                <button onClick={()=> this.editProduct(cartItem.ciId)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(cartItem.ciId)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <br></br><br></br><br></br><br></br>
            </div>

        )
    }
}

export default MyCartComponent