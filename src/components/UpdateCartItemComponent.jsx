import React, { Component } from 'react'
import CartItemService from '../services/CartItemService'
import ProcessedCartItemService from '../services/ProcessedCartItemService'
import MarketHeaderComponent from './MarketHeaderComponent'




import { Image } from 'react';



class UpdateCartItemComponent extends Component {
  constructor(props) {
        super(props)

        this.state = {
          
            ciId: this.props.match.params.ciId,
            cId:this.props.match.params.cId,
            iName: '',
            iPrice: '',
            iUrl: '',
            qty: '',
            pciId:'',
            sId:'',
            oId:'',
            pId:'',
            piName:'',
            piUrl:'',
            piPrice:'',
            pQty:''

                 
        }
      // this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
      //   this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
      //   this.changePriceHandler = this.changePriceHandler.bind(this);
      //   this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.updateCartItemHandler = this.updateCartItemHandler.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    componentDidMount(){
        CartItemService.getCartItemById(this.state.ciId).then( (res) =>{
            let cartItem = res.data;
            this.setState({iName: cartItem.iName,
                iPrice : cartItem.iPrice,
                iUrl : cartItem.iUrl,
                qty: cartItem.qty
            });
        });
        ProcessedCartItemService.searchciIdItemsByQuery(this.state.ciId).then( (res) =>{
            let processedCartItem = res.data;
            this.setState({pciId: processedCartItem.pciId,
                sId : processedCartItem.sId,
                pId : processedCartItem.pId,
                piName: processedCartItem.piName,
                piUrl: processedCartItem.piUrl,
                piPrice: processedCartItem.piPrice,
                pQty: processedCartItem.pQty,
                oId: processedCartItem.oId
                
            });
        });
    }

    updateCartItemHandler = (e) => {
        e.preventDefault();

         let processedCartItem = {pciId: this.state.pciId, cId: this.state.cId, ciId: this.state.ciId, pId: this.state.id, piName: this.state.iName, piPrice: this.state.iPrice, piUrl: this.state.iUrl, pQty: this.state.qty, sId: this.state.sId, oId: this.state.oId}
         console.log('ProcartItem => ' +JSON.stringify(processedCartItem));
         ProcessedCartItemService.updatePCartItem(processedCartItem, this.state.pciId);

        let cartItem = {ciId: this.state.ciId, cId: this.state.cId, iName: this.state.iName, iPrice: this.state.iPrice, iUrl: this.state.iUrl, qty: this.state.qty}
        // console.log('product => ' +JSON.stringify(product));

        CartItemService.updateCartItem(cartItem, this.state.ciId).then(res =>{
            this.props.history.push(`/my-cart/${this.state.cId}/${this.state.oId}`);
        });

    }

   // changeProductNameHandler= (event) => {
   //      this.setState({pName: event.target.value});
   //  }

   //  changeDepartmentHandler= (event) => {
   //      this.setState({department: event.target.value});
   //  }

   //  changePriceHandler= (event) => {
   //      this.setState({price: event.target.value});
   //  }

   //  changeImageHandler= (event) => {
   //      this.setState({imageUrl: event.target.value});
   //  }

    changeQuantityHandler= (event) => {
        this.setState({qty: event.target.value});
    }

    cancel(){
        this.props.history.push(`/my-cart/${this.state.cId}/${this.state.oId}`)
    }
  
    
    onValueChange= (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }


   render() {
        return (
            <div>
            <MarketHeaderComponent/>
                  <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                                <h3 className="text-center">Update Cart Item</h3>
                                

                                  <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Your Id </label>
                                            <input name="cId" className="form-control" 
                                                value={this.state.cId}/>
                                        </div>
                                        <div className = "form-group">
                                            <img src= {this.state.iUrl}  width="200" height="200" />
                                            
                                        </div>
                                         <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Enter Product Name Here" name="pName" className="form-control" 
                                                value={this.state.iName} onChange={this.changeProductNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Your asking price" name="price" className="form-control" 
                                                value={this.state.iPrice} onChange={this.changePriceHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Enter Quantity" name="quantity" className="form-control" 
                                                value={this.state.qty} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        <div className = "centerButton">
                                            <button className="btn btn-success" onClick={this.updateCartItemHandler}>Update</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default UpdateCartItemComponent