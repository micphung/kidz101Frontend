
import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'
import ProcessedCartItemService from '../services/ProcessedCartItemService'
import OrderService from '../services/OrderService'
import MarketHeaderComponent from './MarketHeaderComponent'




import { Image } from 'react';



class SellerOrdersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            processedCartItems: [],
            oId: this.props.match.params.oId,
            sId: this.props.match.params.sId,
            piName: '',
            piUrl: '',
            pQty: '',
            piPrice: '',
            pciId: ''




        }
        // this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        //   this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        //   this.changePriceHandler = this.changePriceHandler.bind(this);
        //   this.changeImageHandler = this.changeImageHandler.bind(this);
        // this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        // this.updateCartItemHandler = this.updateCartItemHandler.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {
        ProcessedCartItemService.listItemsBysId(this.state.sId).then((res) => {
            this.setState({ processedCartItems: res.data });

        });

    }





    // changeQuantityHandler= (event) => {
    //     this.setState({qty: event.target.value});
    // }

    cancel() {
        this.props.history.push(`/products/${this.state.sId}`)
    }


    //   onValueChange= (event) => {
    //   this.setState({
    //     selectedOption: event.target.value
    //   });
    // }


    render() {
        return (
            <div id="allProducts" className="scrollbar-ripe-malinka">
                <MarketHeaderComponent />
                <div id="test4" className="scrollbar-ripe-malinka">
                    <div id="headerImage">
                        <div id="header">
                        <h2 id="idHeader"><img id="logo" src="/smallLogo.png" alt="logo" /> YOUR SOLD PRODUCTS &nbsp;&nbsp;</h2>
                            
                        </div>
                        <div id="btnCart5">
                            <button className="btn btn-primary" id="btn" onClick={this.cancel}>Back</button>
                        </div>
                    </div>
                    <div className="row">


                        <table id="table" className="table table-striped table-bordered">

                            <thead>
                                <tr>

                                    <th> Product Name</th>

                                    <th> Unit Price</th>
                                    <th> Image URL</th>
                                    <th> Quantity</th>
                                    <th> Total</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    // we are doing to iterate array products
                                    this.state.processedCartItems.map(
                                        processedCartItem =>

                                            <tr key={processedCartItem.pciId}>


                                                <td> {processedCartItem.piName} </td>

                                                <td> {processedCartItem.piPrice}</td>
                                                <td> <img src={processedCartItem.piUrl} width="200" height="200" /></td>
                                                <td> {processedCartItem.pQty}</td>
                                                <td>  {(processedCartItem.pQty * processedCartItem.piPrice)}</td>

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

export default SellerOrdersComponent