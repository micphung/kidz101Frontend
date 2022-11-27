import React, { Component } from 'react'
import ProductService from '../services/ProductService'


import { Image } from 'react';

class ListSellerProductFilterComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                products: [], 


                sId: this.props.match.params.sId,
                query: this.props.match.params.query
            
                 
        }


        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.allProduct = this.allProduct.bind(this);
        this.mySearchHandler=this.mySearchHandler.bind(this);
    }

   
  

    componentDidMount(){
        let sId = this.state.sId;
        let query = this.state.query;
        ProductService.searchProductsByQuery(query).then((res) => {
            this.setState({ products: res.data});
        });

        
        let results = this.state.products.filter(function(product){
            return product.sId = this.state.sId;
        })

    }

    mySearchHandler= (event) => {
        this.setState({query: event.target.value});
    }
   allProduct(){
        // console.log(SID);
        // console.log( typeof( SID ));
        this.props.history.push(`/products/${this.state.sId}`);
    }

    addProduct(){
        this.props.history.push(`/add-product/${this.state.sId}`);
    }

   deleteProduct(id){
    ProductService.deleteProduct(id).then( res => {
        this.setState({products: this.state.products.filter(product => product.id !== id)});
    });
    }
    
    editProduct(id){
        this.props.history.push(`/update-product/${id}`);
    }
     mySearch= () => {
            //console.log("query" + this.state.query);
            
            this.props.history.push(`/search-products/${this.state.sId}/${this.state.query}`);
            
        }

    render() {
        return (
           
            <div className= "scrollbar-ripe-malinka">
                    <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Product List</h2>
    
                
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
                   <button className="btn btn-primary" id="btn" onClick={this.addProduct}> Add Product</button>
                   <button className="btn btn-primary offset-md-9" id="btn" onClick={this.allProduct}> All Products</button>
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


                                    this.state.results.map( 
                                        product => 
                                        
                                        <tr key = {product.id}>

                                             
                                             <td> {product.pName} </td>   
                                             <td> {product.department}</td>
                                             <td> {product.price}</td>
                                             <td> <img src= {product.imageUrl}  width="200" height="200" /></td>
                                             <td> {product.quantity}</td>
                                             <td className = "centerButton">
                                                <button onClick={()=> this.editProduct(product.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
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

export default ListSellerProductFilterComponent