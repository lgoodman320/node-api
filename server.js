import 'dotenv/config'
import express from 'express';              // 1 - load express module
import mongoose from 'mongoose';            // 6 - load mongoose module
import productRoute from './routes/productRoute.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import cors from 'cors' // load cors module

const MONGODB_URL = process.env.MONGODB_URL

console.log(MONGODB_URL);

const server = express();                   // 2 - create an instance of express
server.use(express.json());                 // 8 - tell express middleware to use json
server.use(cors()); // use cors middleware for cross-site-origin-sharing
const PORT = process.env.PORT || 3000;      // 3 - server port number

// Routes
server.use('/products', productRoute);


// 5 - create root route
server.get('/', (req, res) => {
    res.send('Hello, world!');
});

server.get('/blog', (req, res) => {
    res.send('Hello, Blog! My name is Mr. Motivation!');
});

server.use(errorMiddleware)

// 7 - Connect to MongoDB
mongoose.connect(MONGODB_URL).then(() => {
    console.log('Connected to DB');

    // 6 - activate server on port
    server.listen(PORT, ()=> {
        console.log(`Sever running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
