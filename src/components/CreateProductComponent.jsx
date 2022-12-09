import React, { Component } from 'react'
import ProductService from '../services/ProductService';

import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

class CreateProductComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sId: this.props.match.params.sId,
      pName: '',
      department: '',
      price: '',
      imageUrl: '',
      quantity: ''

    }
    this.changeSellerIdHandler = this.changeSellerIdHandler.bind(this);
    this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeImageHandler = this.changeImageHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.onValueChange = this.onValueChange.bind(this);

  }

  componentDidMount() {
    let sId = this.state.sId;
  }
  saveProduct = (e) => {
    e.preventDefault();
    let product = { sId: this.state.sId, pName: this.state.pName, department: this.state.department, price: this.state.price, imageUrl: this.state.imageUrl, quantity: this.state.quantity }
    console.log('product => ' + JSON.stringify(product));

    ProductService.createProduct(product).then(res => {
      this.props.history.push(`/my-product/${this.state.sId}`);
    });

  }

  changeSellerIdHandler = (event) => {
    this.setState({ sId: event.target.value });
  }
  changeProductNameHandler = (event) => {
    this.setState({ pName: event.target.value });
  }

  changeDepartmentHandler = (event) => {
    this.setState({ department: event.target.value });
  }

  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  }

  changeImageHandler = (event) => {
    this.setState({ imageUrl: event.target.value });
  }

  changeQuantityHandler = (event) => {
    this.setState({ quantity: event.target.value });
  }

  cancel() {
    this.props.history.push(`/my-product/${this.state.sId}`)
  }

  onValueChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }


  render() {
    return (
      <div id="loginContainer3">
        <div className="container">
          <div className="row" id="addtoCart">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br></br>
              <h3 className="text-center">Add Product</h3>
              <div className="card-body">
                <form>

                  {/*<div class="dropdown">
                                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.changeDepartmentHandler} >
                                    Dropdown button
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" value="toys">Toys</a>
                                    <a class="dropdown-item" value="electronics">Electronics</a>
                                    <a class="dropdown-item" value="baby">Baby</a>
                                    <a class="dropdown-item" value="outdoors">Outdoors</a>
                                    <a class="dropdown-item" value="apparel">Apparel</a>
                                  </div>
                                  
                                </div>*/}


                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="toys"
                        checked={this.state.department === "toys"}
                        onChange={this.changeDepartmentHandler}
                      />
                      Toys
                    </label>



                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        value="electronics"
                        checked={this.state.department === "electronics"}
                        onChange={this.changeDepartmentHandler}
                      />
                      Electronics
                    </label>



                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        value="baby"
                        checked={this.state.department === "baby"}
                        onChange={this.changeDepartmentHandler}
                      />
                      Baby
                    </label>

                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        value="outdoors"
                        checked={this.state.department === "outdoors"}
                        onChange={this.changeDepartmentHandler}
                      />
                      Outdoors
                    </label>

                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        value="apparel"
                        checked={this.state.department === "apparel"}
                        onChange={this.changeDepartmentHandler}
                      />
                      Apparel
                    </label>
                  </div>
                  <div>

                    {/* <DropdownButton
                                      align="end"
                                      title="Dropdown end"
                                      id="dropdown-menu-align-end" onClick={this.changeDepartmentHandler} >
                                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                </DropdownButton>*/}

                  </div>

                  <div>

                  </div>

                  <div className="form-group">
                    <label> Seller ID: </label>
                    <input placeholder="Enter our Seller ID Here" name="sId" className="form-control"
                      value={this.state.sId} />
                  </div>

                  <div className="form-group">
                    <label> Product Name: </label>
                    <input placeholder="Enter Product Name Here" name="pName" className="form-control"
                      value={this.state.pName} onChange={this.changeProductNameHandler} />
                  </div>

                  <div className="form-group">
                    <label> Price: </label>
                    <input placeholder="Your asking price" name="price" className="form-control"
                      value={this.state.price} onChange={this.changePriceHandler} />
                  </div>

                  <div className="form-group">
                    <label> Image: </label>
                    <input placeholder="Paste image url here" name="imageUrl" className="form-control"
                      value={this.state.imageUrl} onChange={this.changeImageHandler} />
                  </div>

                  <div className="form-group">
                    <label> Quantity: </label>
                    <input placeholder="Number of items you wish to sell" name="quantity" className="form-control"
                      value={this.state.quantity} onChange={this.changeQuantityHandler} />
                  </div>
                  <div className="centerButton">
                    <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
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

export default CreateProductComponent