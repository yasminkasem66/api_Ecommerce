require('dotenv').config();
const express = require('express');
const app = express();//create our server
const port = 4000;
const connectDB = require("./db")

const productRouter = require("./routes/product");

app.use(express.json()); //read only json files

app.use("/product", productRouter)

//localhost:3000/users/1245358


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();