const Category = require('../models/Category');
const errorHandler = require('../errors/errorHandler');


module.exports.getByName = async function (req, res) {
    try {

        if (req.query.name === '') {
            const categories = await Category.find() // {name : 'imgg'}
            res.status(200).json(categories)
        } else {
            const categories = await Category.find({ name: req.query.name })
            res.status(200).json(categories)
        }

        console.log('Category getAll', req.query.name);
        // user: req.user.id
        // const categories = await Category.find()
        // res.status(200).json(categories)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.getAll = async function (req, res) {
    try {
        console.log('*****getById ', req.query.name);
        const categories = await Category.find({
            user: req.user.id
        })
        res.status(200).json(req.params);
        /*
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
        */
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Category.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Category has been delated'
        })
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = async function (req, res) {
    console.log(req.file);
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    })

    try {
        await category.save()
        res.status(201).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.update = async function (req, res) {
    const update = {
        name: req.body.name
    }

    if (req.file) {
        update.imageSrc = req.file.path
    }

    try {
        const category = await Category.findOneAndUpdate(
            { _id: req.params.id },
            { $set: update },
            { new: true }
        )
        res.status(200).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}