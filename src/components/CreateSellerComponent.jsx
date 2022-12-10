import React, { Component } from 'react'
import SellerService from '../services/SellerService'
import SellerHeaderComponent from './SellerHeaderComponent'


class CreateSellerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sId: '',
            password: ''

        }
        this.changesIdHandler = this.changesIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveProduct = this.saveProduct.bind(this);
        // this.onValueChange = this.onValueChange.bind(this);
        
        

    }


    saveProduct = (e) => {
        e.preventDefault();
        let seller = { sId: this.state.sId, password: this.state.password }
        console.log('seller => ' + JSON.stringify(seller));

        SellerService.createSeller(seller).then(res => {
            // this.props.history.push('/loginsellers');
            this.props.history.push(`/products/${this.state.sId}`);
        });

    }

    changesIdHandler = (event) => {
        this.setState({ sId: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    alreadyMember = (e) => {
        // e.preventDefault();
        // let seller = {sFirstName: this.state.sFirstName, sLastName: this.state.sLastName, email: this.state.email, password: this.state.password}
        // console.log('seller => ' +JSON.stringify(seller));

        this.props.history.push(`/products/${this.state.sId}`);

    }

    render() {
        return (

            <div class="justify-content-center" id="loginContainer2">
                <SellerHeaderComponent />
                <div id="loginContainer" className="row">
                    <div id="test2" className="card col-md-10">
                        <h1 className="text-center">SELLER PORTAL</h1>
                        <div className="row">
                            <div className="card col-md-10 offset-md-1">
                                <form>
                                    <h3> Member Login</h3>
                                    <div className="form-group">
                                        <label> Personal Seller ID Number: </label>
                                        <input placeholder="Choose your personal seller id number" name="sId" className="form-control"
                                            value={this.state.sId} onChange={this.changesIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password:</label><img id="logo" width="5%" className="offset-md-9" src="/nosee.png" />
                                        <input type="password" id="myInput" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                        
                                    </div>
                                    <div class="loginButton">
                                        <button id="loginButtons" className="btn btn-primary" onClick={this.alreadyMember}> Login</button>
                                        <button id="forgotPass" className="btn ml-auto"> Forgot Password?</button>
                                    </div>
                                </form>
                            </div>
                            <div id="createAccount" className="card col-md-10 offset-md-1">
                                <form>
                                    <h3> Create Account</h3>
                                    <div className="form-group">
                                        <label> Personal Seller ID Number: </label>
                                        <input placeholder="Choose your personal seller id number" name="sId" className="form-control"
                                            value={this.state.sId} onChange={this.changesIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password:</label><img id="logo" width="5%" className="offset-md-9" src="/nosee.png" />
                                        <input type="password" id="myInput" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div class="signupButton">
                                        <button id="loginButtons" className="btn btn-success" onClick={this.saveProduct}>Create Account</button>
                                        {/*<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>*/}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="circle1"></div>
                <div class="circle2"></div>
            </div>

        )
    }
}

export default CreateSellerComponent