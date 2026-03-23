import express from "express";
import ProductController from "../controller/product.controller.js";

const router = express.Router()

router.get("/", ProductController.getAllProducts)
router.post("/", ProductController.createProduct)

export default router