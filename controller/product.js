const products = require("../model/product");

exports.createProduct = (req, response ) => {
    const product = new products({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        countInStock: req.body.countInStock,
        brand: req.body.brand,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        description: req.body.description,
    })

    product.save()
    return response.send(product)
        .then(data => {
            return      response.send(data)
        }).catch(err => {
            return   response.send(err)
        })
}


// exports.createProduct = async (req, response ) => {
//     const product = await products.create(req.body);
//     response .status(200).json({ product });
// };



exports.getAllProduct = async (req, response ) => {
    try {
        await products.find({})
            .then(data => {
                response .send(data)
            }).catch(err => {
                response .send(err)
            })
    } catch (error) {
        console.log(error);
    }

}

// exports.getSingleProduct = async (req, response ) => {
//     try {
//     const { id: productId } = req.params;
//     products.findOne({ _id: productId }).then(data => {
//        response .status(200).send(data)
//     }).catch(err => {
//        response .status(400).send(err)
//     })
//     } catch (error) {
//         console.log(error);
//     }
// };


// exports.getSingleProduct = async (req, response , next) => {
//     try {
//         products.findOne({ _id: req.params.id }, function (err, product) {
//             if (err) response .status(400).send(err);
//             response .status(200).send(product);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

exports.getSingleProduct = async (req, response ) => {
    const { id: productId } = req.params;
    const product = await products.findOne({ _id: productId });
    if (!product) {
        throw new CustomError.NotFoundError(`No product with id : ${productId}`);
    }
    response .status(200).json({ product });
};


// exports.deleteProduct = (req, response ) => {
//     products.remove({  _id: req.params.id }) .then(todo => {
//             response .send(todo)
//         })
// }


////////////////////////////////




exports.deleteProduct =  (req, response ) => {

         products.findOneAndDelete({ _id: req.params.id })
        .then(data => {
            response.success(req, response , data, 200)
        }).catch(err => {
            response.error(req, response , 'Internal error', 500, err)
        })
    response .send('Ok')
}


// exports.deleteProduct = async (req, response ) => {
//     const { id: productId } = req.params;
//     const product = await products.findOne({ _id: productId });
//     if (!product) {
//         throw (`No product with id : ${productId}`);
//     }
//     await product.remove();
//     response .status(401).json({ msg: 'Success! Product removed.' });
// };




