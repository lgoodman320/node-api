import express from 'express';
import Product from '../models/productModel.js';
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';

const router = express.Router();


// get all products
router.get('/', getProducts);

// get product from id
router.get('/:id', getProduct);

// 9 - create a product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);

export default router;