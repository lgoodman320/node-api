import Product from '../models/productModel.js';

//get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// get a single product from id
const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// create a product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

// update a product
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find product in database
        if(!product) {
            return res.status(404).json({message: `Cannot find product with ID ${id}`});
        }
        // we found product in database
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

// delete a product
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: `Cannot find product with ID: ${id}`});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
};


// export getProducts
export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };