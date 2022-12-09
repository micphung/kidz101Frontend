import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import background from "./bluebackgroundColor.jpeg";


import { Image } from 'react';

class SearchProductComponent extends Component {
    constructor(props) {
        super(props)


        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
            products: [],


            sId: this.props.match.params.sId,
            query: this.props.match.params.query


        }



        this.allProduct = this.allProduct.bind(this);
        this.mySearchHandler = this.mySearchHandler.bind(this);
    }




    componentDidMount() {
        let sId = this.state.sId;
        let query = this.state.query;
        ProductService.searchProductsByQuery(query).then((res) => {
            this.setState({ products: res.data });
        });
    }

    mySearchHandler = (event) => {
        this.setState({ query: event.target.value });
    }
    allProduct() {
        // console.log(SID);
        // console.log( typeof( SID ));
        this.props.history.push(`/products/${this.state.sId}`);
    }

    mySearch = () => {
        //console.log("query" + this.state.query);

        this.props.history.push(`/search-products/${this.state.sId}/${this.state.query}`);

    }

    render() {
         const myStyle={
        backgroundImage: 
 `url(${background})` ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    
        height: '100vh'
    };

        return (
  
            <div id="allProducts" className="scrollbar-ripe-malinka">
          


                <div id="test4">
                    <div id="headerImage">
                        <div id="header">
                        <h2 id="idHeader"><img id="logo" src="/smallLogo.png" alt="logo" /> RESULTS&nbsp;&nbsp;</h2>
                            
                            <div id="searchBar" className="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                    aria-describedby="search-addon" value={this.state.query} onChange={this.mySearchHandler} />
                                <button id="searchButton" className="btn btn-primary" onClick={this.mySearch}>Find</button>
                                {/* <span class="input-group-text border-0" id="search-addon">
                                            <i class="fas fa-search"></i>
                                        </span> */}
                            </div>
                        </div>

                        <div id="btnCart5">
                            <button className="btn btn-primary offset-md-11" onClick={this.allProduct}> All Products</button>
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
            </div>

        )
    }
}

export default SearchProductComponent