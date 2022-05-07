const Fonts = require("../models/Fonts")
const errorHandler = require('../errors/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        // user: req.user.id
        const fonts = await Fonts.find()
        res.status(200).json(fonts)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = async function (req, res) {
    // console.log(req.body.value);
    const fonts = new Fonts({
        name: req.body.name,
        value: req.body.value,
        user: req.user.id,
    })

    try {
        await fonts.save()
        res.status(201).json(fonts)
    } catch (error) {
        errorHandler(res, error)
    }
}