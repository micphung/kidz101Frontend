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
            sId: this.props.match.params.sId,
            query: ''
        }

        this.changesIdHandler = this.changesIdHandler.bind(this);
        this.myProduct = this.myProduct.bind(this);
        this.mySearchHandler = this.mySearchHandler.bind(this);
    }




    componentDidMount() {

        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data });
        });
    }

    changesIdHandler = (event) => {
        this.setState({ sId: event.target.value });
    }
    mySearchHandler = (event) => {
        this.setState({ query: event.target.value });
    }

    myProduct() {
        // console.log(SID);
        // console.log( typeof( SID ));
        this.props.history.push(`/my-product/${this.state.sId}`);
    }

    // mySearch(){
    //         //console.log("query" + this.state.query);

    //         this.props.history.push(`/search-products/${this.state.sId}/${this.state.query}`);

    mySearch = () => {
        //console.log("query" + this.state.query);

        this.props.history.push(`/search-products/${this.state.sId}/${this.state.query}`);

    }

    render() {
        return (

            <div id="allProducts" className="scrollbar-ripe-malinka">
                <div id="test4">
                    <div id="headerImage">
                        <div id="header">
                            <h2 id="idHeader"><img id="logo" src="/smallLogo.png" alt="logo" /> ID:{this.state.sId} &nbsp;&nbsp;</h2>
                            <div id="searchBar" className="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                    aria-describedby="search-addon" value={this.state.query} onChange={this.mySearchHandler} />
                                <button className="btn btn-primary" onClick={this.mySearch}>Find</button>
                                {/* <span class="input-group-text border-0" id="search-addon">
                                            <i class="fas fa-search"></i>
                                        </span> */}
                            </div>
                        </div>


                        <div>
                            <button className="btn btn-primary" id="btnCart" onClick={this.myProduct}> My Products</button>
                        </div>
                    </div>

                    <table id="table" className="table table-striped">

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
            </div>

        )
    }
}
export default ListAllProductComponent