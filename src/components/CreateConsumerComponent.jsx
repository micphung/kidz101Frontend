import React, { Component } from 'react'
import ConsumerService from '../services/ConsumerService'
import MainHeaderComponent from './MainHeaderComponent'


class CreateConsumerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cId: '',
            password: ''

        }
        this.changecIdHandler = this.changecIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveProduct = this.saveProduct.bind(this);
        // this.onValueChange = this.onValueChange.bind(this);

    }


    saveProduct = (e) => {
        e.preventDefault();
        let consumer = { cId: this.state.cId, password: this.state.password }
        console.log('consumer => ' + JSON.stringify(consumer));

        ConsumerService.createConsumer(consumer).then(res => {
            // this.props.history.push('/loginsellers');
            this.props.history.push(`/market/${this.state.cId}`);
        });

    }

    changecIdHandler = (event) => {
        this.setState({ cId: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    alreadyMember = (e) => {
        // e.preventDefault();
        // let seller = {sFirstName: this.state.sFirstName, sLastName: this.state.sLastName, email: this.state.email, password: this.state.password}
        // console.log('seller => ' +JSON.stringify(seller));

        this.props.history.push(`/market/${this.state.cId}`);

    }

    render() {
        return (

            <div class="justify-content-center" id="loginContainer3">
                <h1 className="text-center">Welcome to Kidz101</h1>
                <MainHeaderComponent />
                <div id="loginContainer" className="row">
                    <div id="test2" className="card col-md-10 ">

                        <div className="row">

                            <div className="card col-md-10 offset-md-1">
                                <form>
                                    <h3> Member Login</h3>
                                    <div className="form-group">
                                        <label> Personal ID Number: </label>
                                        <input placeholder="Choose your personal id number" name="cId" className="form-control"
                                            value={this.state.cId} onChange={this.changecIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password:</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <button className="btn btn-primary  offset-md" onClick={this.alreadyMember}> Login</button>
                                    <button id="forgotPass" className="btn ml-auto" onClick={this.alreadyMember}> Forgot Password?</button>
                                </form>

                            </div>
                            <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
                            <div className="card col-md-10 offset-md-1">
                                <form>

                                    <h3> Create Account</h3>


                                    <div className="form-group">
                                        <label> Personal ID Number: </label>
                                        <input placeholder="Choose your personal id number" name="cId" className="form-control"
                                            value={this.state.cId} onChange={this.changecIdHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label> Password:</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>


                                    <div className="">


                                        <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
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

export default CreateConsumerComponent