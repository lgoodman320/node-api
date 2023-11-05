import mongoose from "mongoose";


// Create product schema
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

// Create Product model
const Product = mongoose.model('Product', productSchema);

export default Product;