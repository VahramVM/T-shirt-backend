const errorHandler = require('../errors/errorHandler');
const Productscolor = require("../models/Productscolor");

module.exports.getAll = async function (req, res) {
    try {
        // user: req.user.id
        const productcolor = await Productscolor.find()
        res.status(200).json(productcolor)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = async function (req, res) {
    console.log(req.body);
    const product = new Products({
        name: req.body.name,
        hex: req.body.hex,
        user: req.user.id,
    })

    try {
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        errorHandler(res, error)
    }
}