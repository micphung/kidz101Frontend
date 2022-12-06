import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import ListProductComponent from './components/ListProductComponent';
import ListAllProductComponent from './components/ListAllProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateSellerComponent from './components/CreateSellerComponent';
import LoginSellerComponent from './components/LoginSellerComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ListSellerProductComponent from './components/ListSellerProductComponent';
import SearchProductComponent from './components/SearchProductComponent';
import ListSellerProductFilterComponent from './components/ListSellerProductFilterComponent';
import CreateConsumerComponent from './components/CreateConsumerComponent';
import MarketAllProductComponent from './components/MarketAllProductComponent';
import SearchMarketProductComponent from './components/SearchMarketProductComponent';
import AddCartItemComponent from './components/AddCartItemComponent';
import MyCartComponent from './components/MyCartComponent';
import UpdateCartItemComponent from './components/UpdateCartItemComponent';
import ConfirmOrderComponent from './components/ConfirmOrderComponent';
import CreateProcessingCartItem from './components/CreateProcessingCartItem';
import WelcomePageComponent from './components/WelcomePageComponent';
import ConsumerOrdersComponent from './components/ConsumerOrdersComponent';
import ConsumerOrdersDetailsComponent from './components/ConsumerOrdersDetailsComponent';
import SellerOrdersComponent from './components/SellerOrdersComponent';




function App() {
  return (
    <div>
            <Router forceRefresh={true}>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route exact path = "/" component = {WelcomePageComponent}></Route>
                          <Route exact path = "/consumerLogin" component = {CreateConsumerComponent}></Route>
                          <Route path = "/sellers" component = {CreateSellerComponent}></Route>
                          <Route exact path = "/products/:sId" component = {ListAllProductComponent}></Route>
                          <Route exact path = "/market/:cId" component = {MarketAllProductComponent}></Route>
                          <Route exact path = "/my-product/:sId" component = {ListSellerProductComponent}></Route>
                          <Route exact path = "/add-cart-item/:id/:cId/:oId" component = {AddCartItemComponent}></Route>
                          <Route exact path = "/search-my-product/:sId/:query" component = {ListSellerProductFilterComponent}></Route>
                          <Route exact path = "/add-product/:sId" component = {CreateProductComponent}></Route>
                          <Route exact path = "/update-product/:id" component = {UpdateProductComponent}></Route>
                          <Route exact path = "/search-products/:sId/:query" component = {SearchProductComponent}></Route>
                          <Route exact path = "/search-market-products/:cId/:query/:oId" component = {SearchMarketProductComponent}></Route>
                          <Route exact path = "/my-cart/:cId/:oId" component = {MyCartComponent}></Route>
                          <Route exact path = "/update-cart-item/:ciId/:cId" component = {UpdateCartItemComponent}></Route>
                          <Route exact path = "/checkout/:cId/:oId" component = {ConfirmOrderComponent}></Route>
                          <Route exact path = "/processing/:cId/:ciId/:id" component = {CreateProcessingCartItem}></Route>
                          <Route exact path = "/my-orders/:cId" component = {ConsumerOrdersComponent}></Route>
                          <Route exact path = "/view-order-details/:oId/:cId" component = {ConsumerOrdersDetailsComponent}></Route> 
                         <Route exact path = "/seller-orders/:sId" component = {SellerOrdersComponent}></Route>


                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
      
  );
}

export default App;

