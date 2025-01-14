import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import SellerService from '../services/SellerService'

import { Image } from 'react';

class ListAllProductComponent extends Component {
     constructor(props) {
        super(props)

        
        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                products: [],
                sId:this.props.match.params.sId,
                query:''
        }
       
        this.changesIdHandler= this.changesIdHandler.bind(this);
        this.myProduct=this.myProduct.bind(this);
        this.mySearchHandler=this.mySearchHandler.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

   
  

    componentDidMount(){

        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
     }

    changesIdHandler= (event) => {
            this.setState({sId: event.target.value});
        }
    mySearchHandler= (event) => {
        this.setState({query: event.target.value});
    }

    myProduct(){
            // console.log(SID);
            // console.log( typeof( SID ));
            this.props.history.push(`/my-product/${this.state.sId}`);
        }
  
    // mySearch(){
    //         //console.log("query" + this.state.query);
            
    //         this.props.history.push(`/search-products/${this.state.sId}/${this.state.query}`);

     mySearch= () => {
            //console.log("query" + this.state.query);
            
            this.props.history.push(`/search-products/${this.state.sId}/${this.state.query}`);

        }
    handleClick() {
           
        this.props.history.push(`/seller-orders/${this.state.sId}`);
  }

    render() {
        return (
           
            <div className= "scrollbar-ripe-malinka">
                 <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Product List</h2>
                  <div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Orders</button>
                   
                </div>
    
                
                    <div className = "form-group">
                    <label> Your Seller ID </label>
                    <br></br>
                    <input name="sId"
                        value={this.state.sId}/>
                    </div>
                    <div className = "form-group">
                        <label> Search:  </label>
                    <br></br>
                    <input name="query"
                        value={this.state.query} onChange={this.mySearchHandler}/>
                        <br></br><br></br>
                         <button className="btn btn-primary" onClick={this.mySearch}>Find</button>

                </div>
                
                 <br></br><br></br>                 
                 <div>
                   <button className="btn btn-primary" id="btn" onClick={this.myProduct}> My Products</button>
                 </div>
                 
                 <div className = "row">
                      


                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> Product Name</th>
                                    <th> Department</th>
                                    <th> Price</th>
                                    <th> Image URL</th>
                                    <th> Quantity</th>
                                 
                                </tr>
                            </thead>
                            <tbody>
                         
                                {
                                    // we are doing to iterate array products
                                    this.state.products.map( 
                                        product => 
                                        
                                        <tr key = {product.id}>

                                             
                                             <td> {product.pName} </td>   
                                             <td> {product.department}</td>
                                             <td> {product.price}</td>
                                             <td> <img src= {product.imageUrl}  width="200" height="200" /></td>
                                             <td> {product.quantity}</td>
                                             
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
export default ListAllProductComponent