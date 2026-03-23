import prisma from "../config/database.js"

class ProductRepository {

  static async getAllProducts(){
    return prisma.product.findMany()
  }

  static async createProduct(data){
    return prisma.product.create({
      data
    })
  }
}

export default ProductRepository