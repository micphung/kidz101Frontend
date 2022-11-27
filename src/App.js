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


function App() {
  return (
    <div>
            <Router forceRefresh={true}>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route exact path = "/" component = {CreateConsumerComponent}></Route>
                          <Route path = "/sellers" component = {CreateSellerComponent}></Route>
                          <Route exact path = "/products/:sId" component = {ListAllProductComponent}></Route>
                          <Route exact path = "/market/:cId" component = {MarketAllProductComponent}></Route>
                          <Route exact path = "/my-product/:sId" component = {ListSellerProductComponent}></Route>
                          <Route exact path = "/search-my-product/:sId/:query" component = {ListSellerProductFilterComponent}></Route>
                          <Route exact path = "/add-product/:sId" component = {CreateProductComponent}></Route>
                          <Route exact path = "/update-product/:id" component = {UpdateProductComponent}></Route>
                          <Route exact path = "/search-products/:sId/:query" component = {SearchProductComponent}></Route>
                          <Route exact path = "/search-market-products/:cId/:query" component = {SearchMarketProductComponent}></Route>
                         
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
      
  );
}

export default App;

