

import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'
import ProcessedCartItemService from '../services/ProcessedCartItemService'
import OrderService from '../services/OrderService'
import MarketHeaderComponent from './MarketHeaderComponent'




import { Image } from 'react';



class ConsumerOrdersDetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            processedCartItems: [],
            oId: this.props.match.params.oId,
            cId: this.props.match.params.cId,
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
        ProcessedCartItemService.listItemsByoId(this.state.oId).then((res) => {
            this.setState({ processedCartItems: res.data });

        });

    }





    // changeQuantityHandler= (event) => {
    //     this.setState({qty: event.target.value});
    // }

    cancel() {
        this.props.history.push(`/my-orders/${this.state.cId}`)
    }


    //   onValueChange= (event) => {
    //   this.setState({
    //     selectedOption: event.target.value
    //   });
    // }


    render() {
        return (
            <div>
                <MarketHeaderComponent />
                <div className="scrollbar-ripe-malinka">
                    <br></br><br></br><br></br><br></br>
                    <h2 className="text-center">Order Details</h2>
                    <div className="form-group">
                        <label> Order # </label>
                        <br></br>
                        <input name="oId"
                            value={this.state.oId} />

                    </div>


                    <br></br>
                    <div>
                        <button className="btn btn-primary" id="btn" onClick={this.cancel}>All Orders</button>




                    </div>

                    <div className="row">



                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>

                                    <th> Product Name</th>

                                    <th> Unit Price</th>
                                    <th> Image URL</th>
                                    <th> Quantity</th>
                                    <th> Price</th>

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

export default ConsumerOrdersDetailsComponent