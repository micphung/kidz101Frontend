import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import SellerService from '../services/SellerService'

import { Image } from 'react';

class AllListProductComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
            products: [],
            sId: ''
        }

        this.changesIdHandler = this.changesIdHandler.bind(this);
        this.myProductHandler = this.myProductHandler.bind(this);
    }




    // componentDidMount(){
    //     ProductService.getProducts().then((res) => {
    //         this.setState({ products: res.data});
    //     });
    //  }

    changesIdHandler = (event) => {
        this.setState({ sId: event.target.value });
    }

    // myProductHandler = (e) => {
    //     e.preventDefault();
    //     // let product = {sId: this.state.sId, pName: this.state.pName, department: this.state.department, price: this.state.price, imageUrl: this.state.imageUrl, quantity: this.state.quantity}
    //     // console.log('product => ' +JSON.stringify(product));

    //     let sId ={sId: this.state.sId}
    //     console.log('sId => ' +JSON.stringify(sId));
    //     ProductService.searchsIdProductsByQuery(sId).then(res =>{
    //         this.setState({ products: res.data});
    //     });

    // }


    // myProductHandler = (e) => {
    //   console.log("Gradebook.fetchGrades");

    //   fetch(`http://localhost:8080/api/v1/products/searchsId/${this.state.sId}`, 
    //     {  
    //       method: 'GET', 
    //       mode: 'cors',
    //       credentials: 'include',
    //     } )
    //   .then((response) => response.json()) 
    //   .then((responseData) => { 

    //       this.setState({ 
    //         products: responseData.data
    //         })
    //       });
    // }



    render() {
        return (

            <div className="scrollbar-ripe-malinka">
                <br></br><br></br><br></br><br></br>
                <h2 className="text-center">Product List</h2>


                <br></br>
                <div class="col-sm-3">
                    <label>Personal List  </label>
                    <input placeholder="Enter seller id here" name="sId" className="form-control"
                        value={this.state.sId} onChange={this.changesIdHandler} />
                </div>

                <br></br>
                <div>
                    <button className="btn btn-primary" id="btn" onClick={this.myProductHandler}> My Products</button>
                </div>

                <div className="row">



                    <table className="table table-striped table-bordered">

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

                                        <tr key={product.id}>


                                            <td> {product.pName} </td>
                                            <td> {product.department}</td>
                                            <td> {product.price}</td>
                                            <td> <img src={product.imageUrl} width="200" height="200" /></td>
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
export default AllListProductComponent