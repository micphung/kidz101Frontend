import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import ConsumerService from '../services/ConsumerService'
import CartItemService from '../services/CartItemService'
import MarketHeaderComponent from './MarketHeaderComponent'
import ProcessedCartItemService from '../services/ProcessedCartItemService'


import { Image } from 'react';



class AddCartItemComponent extends Component {
  constructor(props) {
        super(props)

        this.state = {
          
            id: this.props.match.params.id,
            cId:this.props.match.params.cId,
            iName: '',
            iPrice: '',
            iUrl: '',
            qty: '',
            sId:'',
            oId:this.props.match.params.oId,
            ciId:'',
            message:'',
            message2:''

                 
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.createProcessedCartItemHandler = this.createProcessedCartItemHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.createCartItemHandler = this.createCartItemHandler.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({iName: product.pName,
                iPrice : product.price,
                iUrl : product.imageUrl,
                sId: product.sId
                
            });
        });
    }

    createCartItemHandler = (e) => {
        e.preventDefault();

        let cartItem = {cId: this.state.cId, iName: this.state.iName, iPrice: this.state.iPrice, iUrl: this.state.iUrl, qty: this.state.qty}
        console.log('cartItem => ' +JSON.stringify(cartItem));
       
        CartItemService.createItem(cartItem).then( (res) =>{
            // let item = res.data;
            // this.setState({ciId: item.ciId})
            this.setState({ ciId: res.data});
        });
        this.state.message = "Successfully Added to Cart!";
        this.state.message2 = "Go Back";
        // CartItemService.getCartItemById(ciId).then( (res) =>{
       
        
        // let processedCartItem = {cId: this.state.cId, ciId: this.state.ciId, pId: this.state.id, piName: this.state.iName, piPrice: this.state.iPrice, piUrl: this.state.iUrl, pQty: this.state.qty, sId: this.state.sId, oId: this.state.oId}
        // ProcessedCartItemService.createItem(processedCartItem);

        ///////this.props.history.push(`/market/${this.state.cId}`);

        // let cartItem = {cId: this.state.cId, iName: this.state.iName, iPrice: this.state.iPrice, iUrl: this.state.iUrl, qty: this.state.qty}
        // console.log('cartItem => ' +JSON.stringify(cartItem));

        // CartItemService.createItem(cartItem).then(res =>{
            //this.props.history.push(`/market/${this.state.cId}`);
        // });

        

    }
    createProcessedCartItemHandler= (event) => {
        event.preventDefault();
        let processedCartItem = {cId: this.state.cId, ciId: this.state.ciId, pId: this.state.id, piName: this.state.iName, piPrice: this.state.iPrice, piUrl: this.state.iUrl, pQty: this.state.qty, sId: this.state.sId, oId: this.state.oId}
         console.log('ProcartItem => ' +JSON.stringify(processedCartItem));

        ProcessedCartItemService.createItem(processedCartItem);
        this.props.history.push(`/market/${this.state.cId}`);
    }

    changeProductNameHandler= (event) => {
        this.setState({pName: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({imageUrl: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({qty: event.target.value});
    }

    cancel(){
        
        this.props.history.push(`/market/${this.state.cId}`)
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
                  <br></br><br></br><br></br><br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                                <h3 className="text-center">Add to Cart</h3>
                                

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
                                            <button className="btn btn-success" onClick={this.createCartItemHandler}>Add</button>

                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <span className= "text-success text-center font-weight-bold  offset-md-5"><h2>{this.state.message}</h2> 
                    
                        <h4> {this.state.message2}</h4></span>
                        
                        <div class="container">
                            <div class="row">
                                <div class="col text-center">
                                    <button className="btn btn-primary" id="btn"  onClick={this.createProcessedCartItemHandler}>Done/Back</button>    </div>
                                 </div>
                            </div>
                        
                         </div>
                </div>
        )
    }
}

export default AddCartItemComponent