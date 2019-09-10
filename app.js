const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000; 

const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

//Load Routes
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

//DB
mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(()=> {console.log('DB connected')})
    .catch((err)=> {console.log(err)});
//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator());
app.use(cors());

//routers middlewares//
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.listen(port, ()=> {
    console.log(`server's listening on ${port}`);
});

