const Products = require("../models/Products")
const errorHandler = require('../errors/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        console.log('*****Get ALL ', req.params, req.body);
        // user: req.user.id
        const products = await Products.find({ email: req.body.email })
        res.status(200).json(products)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = async function (req, res) {
    console.log(req.file);
    const product = new Products({
        name: req.body.name,
        user: req.user.id,
        type: req.file ? req.file.path : ''
    })

    try {
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        errorHandler(res, error)
    }
}


// const Products = require("../models/Products")
// const errorHandler = require('../errors/errorHandler');

// module.exports.getAll = async function (req, res) {
//     try {
//         // user: req.user.id
//         const products = await Products.find({ email: req.body.email })
//         res.status(200).json(products)
//     } catch (error) {
//         errorHandler(res, error)
//     }
// }

// module.exports.create = async function (req, res) {
//     console.log(req.file);
//     const product = new Products({
//         name: req.body.name,
//         category: req.body.category,
//         user: req.user.id,
//     })

//     try {
//         await product.save()
//         res.status(201).json(category)
//     } catch (error) {
//         errorHandler(res, error)
//     }
// }