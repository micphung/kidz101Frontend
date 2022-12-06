import axios from 'axios';

const CARTITEM_API_BASE_URL = "http://localhost:8080/api/v1/cartItems";

class CartItemService{
	//create a method to get products 
	getAllItems(){
		return axios.get(CARTITEM_API_BASE_URL);
	}

	createItem(cartItem){
		return axios.post(CARTITEM_API_BASE_URL, cartItem);
	}

	getCartItemById(ciId){
        return axios.get(CARTITEM_API_BASE_URL + '/' + ciId);
    }

    updateCartItem(cartItem, ciId){
        return axios.put(CARTITEM_API_BASE_URL + '/' + ciId, cartItem);
    }

    deleteCartItem(ciId){
        return axios.delete(CARTITEM_API_BASE_URL + '/' + ciId);
    }
    searchcIdItemsByQuery(cId){
    	return axios.get(CARTITEM_API_BASE_URL + '/searchcId?cId=' + cId);
    }
    totalBycIdQuery(cId){
    	return axios.get(CARTITEM_API_BASE_URL + '/cartTotal?cId=' + cId);
    }
    cIdExistsfromCartItems(cId){
        return axios.get(CARTITEM_API_BASE_URL + '/getOID?cId=' + cId);
    }
    deleteAllCartItembyCID(cId){
        return axios.delete(CARTITEM_API_BASE_URL + '/emptyCartbycId?cId=' + cId);
    }
    
}
export default new CartItemService()