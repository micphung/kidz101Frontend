import React, { Component } from 'react'
import SellerService from '../services/SellerService'
const SELLER_API_BASE_URL = "http://localhost:8080/api/v1/sellers";

class LoginSellerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // sellers: [],
            sellerId: this.props.match.params.sellerId,
            email: '',
            password: ''

        }
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changePasswordHandler = this.changePasswordHandler.bind(this);

        // this.enterProducts = this.enterProducts.bind(this);
        // this.onValueChange = this.onValueChange.bind(this);

    }

    componentDidMount() {
        SellerService.getSellerById(this.state.sellerId).then((res) => {
            let seller = res.data;
            this.setState({
                sellerId: seller.sellerId, email: seller.email,
                password: seller.password

            });
            console.log('seller => ' + JSON.stringify(seller));

        });
    }

    // componentDidMount(){
    //     SellerService.getSellertById(sellerId).then((res) => {
    //         this.setState({ sellers: res.data});
    //     });
    //  }



    enterProductsPage = (e) => {
        e.preventDefault();
        let seller = { email: this.state.email, password: this.state.password }
        console.log('seller => ' + JSON.stringify(seller));

        this.props.history.push('/products');
    }



    //     fetch(`${SELLER_API_BASE_URL}/seller`,
    //       { 
    //         method: 'POST', 
    //         headers: { 'Content-Type': 'application/json'}, 
    //         body: JSON.stringify(seller)
    //       })
    //     .then(res => {
    //         if (res.ok) {


    //         } else {

    //           console.error('Post http status =' + res.status);
    //         }})
    //     .catch(err => {

    //         console.error(err);
    //     })
    //   } 





    changeFirstNameHandler = (event) => {
        this.setState({ sFirstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ sLastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }



    render() {
        return (

            <div>
                <div className="row">
                    <div className="card col-md-10 ">
                        <br></br><br></br><br></br><br></br>
                        <h1 className="text-center">Seller Login</h1>
                        <div className="row">
                            <div className="card col-md-10 offset-md-1">
                                <form>

                                    <h3> Login</h3>



                                    <div className="form-group">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label> Password:</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>


                                    <div className="centerButton">


                                        <button className="btn btn-success" onClick={this.enterProductsPage}>Enter</button>
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

export default LoginSellerComponent