import React, { Component } from 'react'
import ProductService from '../services/ProductService'


import { Image } from 'react';

class ListSellerProductComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
            products: [],


            sId: this.props.match.params.sId

        }


        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.allProduct = this.allProduct.bind(this);
    }




    componentDidMount() {
        let sId = this.state.sId;
        ProductService.searchsIdProductsByQuery(sId).then((res) => {
            this.setState({ products: res.data });
        });
    }

    allProduct() {
        // console.log(SID);
        // console.log( typeof( SID ));
        this.props.history.push(`/products/${this.state.sId}`);
    }

    addProduct() {
        this.props.history.push(`/add-product/${this.state.sId}`);
    }

    deleteProduct(id) {
        ProductService.deleteProduct(id).then(res => {
            this.setState({ products: this.state.products.filter(product => product.id !== id) });
        });
    }

    editProduct(id) {
        this.props.history.push(`/update-product/${id}`);
    }

    render() {
        return (


            <div id="allProducts">

                <div id="test4" className="scrollbar-ripe-malinka">
                    <div id="headerImage">
                        <div id="header">
                            <h2 id="idHeader">Products List — User ID:{this.state.sId}</h2>

                            <div id="btnCart2">
                                <button className="btn btn-primary" id="btn" onClick={this.addProduct}> Add Product</button>
                                <button className="btn btn-primary" id="btn" onClick={this.allProduct}> All Products</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">



                        <table id="table" className="table table-striped table-bordered">

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

                                            <tr key={product.id}>


                                                <td> {product.pName} </td>
                                                <td> {product.department}</td>
                                                <td> {product.price}</td>
                                                <td> <img src={product.imageUrl} width="200" height="200" /></td>
                                                <td> {product.quantity}</td>
                                                <td className="centerButton">
                                                    <button onClick={() => this.editProduct(product.id)} className="btn btn-info">Update</button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                                </td>
                                            </tr>

                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        )
    }
}

export default ListSellerProductComponent