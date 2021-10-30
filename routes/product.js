const express = require('express');
const router = express.Router();

const products = require('../controller/product');



//post   create product
//get   get ALL  products
//get   get single  products
//delete   delete single  products
//update   update single  products


router.post('/', products.createProduct)
router.get('/', products.getAllProduct)
router.get('/:id', products.getSingleProduct)
router.delete('/:id', products.deleteProduct)
router.put('/:id', products.updateProduct)


module.exports = router