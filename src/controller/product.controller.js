import ProductService from "../service/product.service.js";
import { createProductSchema } from "../validator/product.validator.js";

class ProductController {
    static async getAllProducts(req, res){
        try {
            const products = await ProductService.getAllProducts()

            res.status(200).json({
                message: "Success get all products",
                data: products
            })
        } catch (error) {
            res.status(error.statusCode || 500).json({
                message: error.message
            })
        }
    }

    static async createProduct(req, res){
        try {
            const {error, value} = createProductSchema.validate(req.body)

            if(error){
                return res.status(400).json({
                    message: error.details[0].message
                })
            }

            const product = await ProductService.createProduct(value)

            res.status(201).json({
                message: "Product created",
                data: product
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export default ProductController