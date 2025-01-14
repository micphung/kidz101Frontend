import React, { Component } from 'react'
import ConsumerService from '../services/ConsumerService'
import MainHeaderComponent from './MainHeaderComponent'


class CreateConsumerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cId:'',
            password: '',
            account:''
                 
        }
        this.changecIdHandler = this.changecIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        
        this.saveProduct = this.saveProduct.bind(this);
        // this.onValueChange = this.onValueChange.bind(this);

    }


    saveProduct = (e) => {
        e.preventDefault();
        let consumer = {cId: this.state.cId, password: this.state.password}
        console.log('consumer => ' +JSON.stringify(consumer));

        ConsumerService.createConsumer(consumer).then(res =>{
            // this.props.history.push('/loginsellers');
            this.props.history.push(`/market/${this.state.cId}`);
        });

    }

    changecIdHandler= (event) => {
        this.setState({cId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    
    alreadyMember = (e) => {
        

        // let account = "";
        // ConsumerService.validateConsumersId(this.state.cId, this.state.password).then(res =>{
        //     let account =  res.data});
        //  this.setState({cId: account.cId, password: "******"});
                
            this.props.history.push(`/market/${this.state.cId}`);
        // let result;
        // ConsumerService.validateConsumersId(this.state.cId, this.state.password).then(res =>{
        //     result =  res.data});
        // if(result){
        //     console.log(result);
        //     return(this.props.history.push(`/market/${this.state.cId}`));
        // }

    }

    render() {
        return (
                    
                   <div>
                   <MainHeaderComponent />
                        <div className = "row">
                            <div className = "card col-md-10 ">
                            <br></br><br></br><br></br><br></br>
                                <h1 className="text-center">Welcome to Kidz101</h1>
                                <div className = "row">
                                 
                                  <div className="card col-md-10 offset-md-1">
                                    <form>
                                     <h3> Member Login</h3>
                                         <div className = "form-group">
                                            <label> Personal ID Number: </label>
                                            <input placeholder="Choose your personal id number" name="cId" className="form-control" 
                                                value={this.state.cId} onChange={this.changecIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password:</label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                   <button className="btn btn-primary  offset-md" onClick={this.alreadyMember}> Login</button>
                                    </form>
                                
                                 </div>
                                 <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
                                <div className="card col-md-10 offset-md-1">
                                    <form>
                                         
                                        <h3> Create Account</h3>


                                         <div className = "form-group">
                                            <label> Personal ID Number: </label>
                                            <input placeholder="Choose your personal id number" name="cId" className="form-control" 
                                                value={this.state.cId} onChange={this.changecIdHandler}/>
                                        </div>

                                       
                                         <div className = "form-group">
                                            <label> Password:</label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                       
                                        <div className = "centerButton">
                                           
                                            
                                            <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                            {/*<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>*/}
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

export default CreateConsumerComponent