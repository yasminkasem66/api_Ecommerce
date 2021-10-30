const products = require("../model/product");




//////////////////////////////// createProduct
exports.createProduct = async (req, res) => {
    try {
        const product = await products.create(req.body);
        res.status(200).json({ product })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

};

//////////////////////////////// getAllProduct

exports.getAllProduct = async (req, res ) => {
    try {
        const productsAll = await products.find({})
        res.status(201).json({ products: productsAll })
        
    } catch (err) {
        res.status(500).json({ msg: err })
    }

}



//////////////////////////////// getSingleProduct 
exports.getSingleProduct = async (req, res) => {
    try {
        const { id: productID } = req.params
        const product = await products.findOne({ _id: productID })
        if (!product) {
            return res.status(404).json({ msg: ` no product with id ${productID}` })
        }
        res.status(200).json({product })
        // res.status(200).send( )
        // res.status(200).json({ product: null, status: 'success' })

    } catch (err) {
        res.status(500).json({ msg: err })
    }

}

//////////////////////////////// Update
    exports.updateProduct = async (req, res) => {
        try {
            const { id: productID } = req.params

            //there is an options that we pass for the update function
            const product = await products.findOneAndUpdate({ _id: productID }, req.body, {
                new: true,
                runValidators: true
            })
            if (!product) {
                return res.status(404).json({ msg: ` no product with id ${productID}` })
            }
            res.status(200).json({ product })
            // res.status(200).send( )
            // res.status(200).json({ id: productID, data: req.body})

        } catch (err) {
            res.status(500).json({ msg: err })
        }

    }

//////////////////////////////// Delete
exports.deleteProduct = async (req, res) => {
    try {
        const { id: productID } = req.params
        const product = await products.findOneAndDelete({ _id: productID })
        if (!product) {
            return res.status(404).json({ msg: ` noproduct with id ${productID}` })
        }
        res.status(200).json({product })
        // res.status(200).send( )
        // res.status(200).json({ product: null, status: 'success' })

    } catch (err) {
        res.status(500).json({ msg: err })
    }

}


