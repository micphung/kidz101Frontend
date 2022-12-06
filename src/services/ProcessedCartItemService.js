import axios from 'axios';

const PROCESSEDCARTITEM_API_BASE_URL = "http://localhost:8080/api/v1/processedCartItems";

class ProcessedCartItemService{
	//create a method to get products 
	getAllPItems(){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL);
    }

    createItem(processedCartItem){
        return axios.post(PROCESSEDCARTITEM_API_BASE_URL, processedCartItem);
    }

    getCartItemById(pciId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/' + pciId);
    }

    updatePCartItem(processedCartItem, pciId){
        return axios.put(PROCESSEDCARTITEM_API_BASE_URL + '/' + pciId, processedCartItem);
    }

    deleteCartItem(pciId){
        return axios.delete(PROCESSEDCARTITEM_API_BASE_URL + '/' + pciId);
    }
    searchciIdItemsByQuery(ciId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/searchCiId?ciId=' + ciId);
    }
    searchcIdItemsByQuery(cId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/searchcId?cId=' + cId);
    }
    searchoIdItemsByQuery(oId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/searchoId?oId=' + oId);
    }
    totalByoIdQuery(oId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/Total?oId=' + oId);
    }
    listItemsByoId(oId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/listByoId?oId=' + oId);
    }
    listItemsBysId(sId){
        return axios.get(PROCESSEDCARTITEM_API_BASE_URL + '/listBysId?sId=' + sId);
    }
    deleteCartItemByCiId(ciId){
        return axios.delete(PROCESSEDCARTITEM_API_BASE_URL + '/deleteCiId?ciId=' + ciId);
    }
}
export default new ProcessedCartItemService()