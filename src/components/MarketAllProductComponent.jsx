import React, { Component } from 'react'
import ProductService from '../services/ProductService'

import ConsumerService from '../services/ConsumerService'


import { Image } from 'react';

class MarketAllProductComponent extends Component {
     constructor(props) {
        super(props)

        
        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                products: [],
                cId:this.props.match.params.cId,
                query:''
        }
       
        // this.changecIdHandler= this.changecIdHandler.bind(this);
        // this.myProduct=this.myProduct.bind(this);
        this.mySearchHandler=this.mySearchHandler.bind(this);
    }

   
  

    componentDidMount(){

        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
     }

     // addCartProduct(id){
     //    this.props.history
     // }

    // changesIdHandler= (event) => {
    //         this.setState({cId: event.target.value});
    //     }
    mySearchHandler= (event) => {
        this.setState({query: event.target.value});
    }

   // myCart(){
            // console.log(SID);
            // console.log( typeof( SID ));
            // this.props.history.push(`/my-product/${this.state.sId}`);
        //}
  

     mySearch= () => {
            //console.log("query" + this.state.query);
            
            this.props.history.push(`/search-market-products/${this.state.cId}/${this.state.query}`);

        }

     addCartProduct(){

     }

    render() {
        return (
           
            <div className= "scrollbar-ripe-malinka">
                 <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Kidz101</h2>
    
                
                    <div className = "form-group">
                    <label> Your ID </label>
                    <br></br>
                    <input name="cId"
                        value={this.state.cId}/>
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
                   <button className="btn btn-primary" id="btn" onClick={this.myProduct}> My Cart</button>
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
                                    <th> Actions</th>
                                 
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
                                             <td className = "centerButton">
                                                <button onClick={()=> this.addCartProduct(product.id)} className="btn btn-info">Add</button>
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
export default MarketAllProductComponent