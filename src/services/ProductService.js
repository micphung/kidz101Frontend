import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService{
	//create a method to get products 
	getProducts(){
		return axios.get(PRODUCT_API_BASE_URL);
	}

	createProduct(product){
		return axios.post(PRODUCT_API_BASE_URL, product);
	}

	getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
    }

    updateProduct(product, productId){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
    searchsIdProductsByQuery(sId){
    	return axios.get(PRODUCT_API_BASE_URL + '/searchsId?sId=' + sId);
    }
    searchProductsByQuery(query){
    	return axios.get(PRODUCT_API_BASE_URL + '/search?query=' + query);
    }
}
export default new ProductService()