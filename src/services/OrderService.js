import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";

class OrderService{
	//create a method to get products 
	getAllOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL, order);
    }

    getCartItemById(oId){
        return axios.get(ORDER_API_BASE_URL + '/' + oId);
    }

    updateOrder(order, oId){
        return axios.put(ORDER_API_BASE_URL + '/' + oId, order);
    }

    deleteOrder(oId){
        return axios.delete(ORDER_API_BASE_URL + '/' + oId);
    }
    searchcIdOrdersByQuery(cId){
        return axios.get(ORDER_API_BASE_URL + '/searchcId?cId=' + cId);
    }
    searchOrderByOID(oId){
        return axios.get(ORDER_API_BASE_URL + '/searchoId?oId=' + oId);
    }
   
}
export default new OrderService()