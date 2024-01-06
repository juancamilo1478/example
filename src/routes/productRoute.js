const {postProduct} =require('../controller/products/index');

const productRoute=require('express').Router();
productRoute
    .post('/',postProduct)

 module.exports=productRoute;   