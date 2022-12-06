import React, { Component } from 'react'
import ProductService from '../services/ProductService'

import ConsumerService from '../services/ConsumerService'
import OrderService from '../services/OrderService'

import CartItemService from '../services/CartItemService'
import MarketHeaderComponent from './MarketHeaderComponent'


import { Image } from 'react';

class ConsumerOrdersComponent extends Component {
     constructor(props) {
        super(props)

        
        //we initialize an array products - need to make a call to restAPI and store list in products array 
        this.state = {
                orders: [],
                cId:this.props.match.params.cId,
                total:'',
                oId:''
        }
       
        this.marketHandler= this.marketHandler.bind(this);
        this.getOrderHandler=this.getOrderHandler.bind(this);
        
    }

   
  

    componentDidMount(){

        OrderService.searchcIdOrdersByQuery(this.state.cId).then((res) => {
            this.setState({ orders: res.data});
        });

     }


 

   marketHandler(){
            this.props.history.push(`/market/${this.state.cId}`);
        }
  

     getOrderHandler(oId){
            //console.log("query" + this.state.query);
            
            this.props.history.push(`/view-order-details/${oId}/${this.state.cId}`);

        }



    render() {
        return (
           
            <div className= "scrollbar-ripe-malinka">
            <MarketHeaderComponent/>
                 <br></br><br></br><br></br><br></br>
                 <h2 className="text-center">Your Orders</h2>
                 <div>
                    <button className="btn btn-primary" onClick={this.marketHandler.bind(this)}>Back to Market</button>
    
                </div>
                
                    <div className = "form-group">
                    <label> Your ID </label>
                    <br></br>
                    <input name="cId"
                        value={this.state.cId}/>
                    </div>
                   
                
              
                 
                 <div className = "row">
                      


                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> Order Number</th>
                                    <th> Details</th>
                                    <th> Total</th>
            
                                 
                                </tr>
                            </thead>
                            <tbody>
                         
                                {
                                    // we are doing to iterate array products
                                    this.state.orders.map( 
                                        order => 
                                        
                                        <tr key = {order.oId}>

                                             
                                             <td> {order.oId} </td>   
                                             
                                             <td className = "centerButton">
                                                <button onClick={()=> this.getOrderHandler(order.oId)} className="btn btn-info">View</button>
                                             </td>
                                             <td> {order.total}</td>
                                             
                                            
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
export default ConsumerOrdersComponent