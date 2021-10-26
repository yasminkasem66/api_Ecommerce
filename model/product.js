// import mongoose from 'mongoose';

const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' }, //linking
        image: { type: String, required: true },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        reviews: [reviewSchema],
    },
    // {
    //     timestamps: true,
    // }
);

module.exports = mongoose.model('Product', productSchema) // create collection fe db --> 2 params 1- name of collection

// product+ category + reviews 