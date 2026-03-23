import ProductRepository from "../repository/product.repository.js";

class ProductService {
  static async getAllProducts(){
    const products = await ProductRepository.getAllProducts()

    if(!products || products.length === 0){
      const error = new Error("There is no product yet")
      error.statusCode = 404
      throw error
    }

    return products
  }

  static async createProduct(data){
    return ProductRepository.createProduct(data)
  }
}

export default ProductService