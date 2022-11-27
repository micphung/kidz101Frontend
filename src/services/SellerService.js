import axios from 'axios';

const SELLER_API_BASE_URL = "http://localhost:8080/api/v1/sellers";

class SellerService{
	//create a method to get products 
	getSellers(){
		return axios.get(SELLER_API_BASE_URL);
	}

	createSeller(seller){
		return axios.post(SELLER_API_BASE_URL, seller);
	}

	getSellerById(sellerId){
        return axios.get(SELLER_API_BASE_URL + '/' + sellerId);
    }

    updateSeller(seller, sellerId){
        return axios.put(SELLER_API_BASE_URL + '/' + sellerId, seller);
    }

    deleteSeller(sellerId){
        return axios.delete(SELLER_API_BASE_URL + '/' + sellerId);
    }
    searchSellersId(sId){
        return axios.get(SELLER_API_BASE_URL + '/searchsId' + sId);
    }
}
export default new SellerService()