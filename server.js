import express from 'express'; // load express module

const server = express(); // create an instance of express
const PORT = process.env.PORT || 3000;
server.get('/', (req, res) => {
    res.send('Hello, world!');
});

server.listen(process.env.PORT || 3000, ()=> {
    console.log(`Sever running on port ${PORT}`);
})