const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../errors/errorHandler')

module.exports.login = async function (req, res) {
  console.log(req.body.email);
    const candidate = await User.findOne({ email: req.body.email })
  
    if (candidate) {
      const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
      if (passwordResult) {
        const token = jwt.sign({
          email: candidate.email.email,
          userId: candidate._id
        }, keys.jwt, { expiresIn: 60 * 60 })
        res.status(200).json({
          token: `Bearer ${token}`
        })
      } else {
        res.status(401).json({
          message: 'Pssword not correct. Write again'
        })
      }
    } else {
      res.status(404).json({
        message: 'User with this email not find'
      })
    }
  }
  
  module.exports.register = async function (req, res) {
    // email password
    const candidate = await User.findOne({ email: req.body.email })
  
    if (candidate) {
      res.status(409).json({
        Message: 'User by this email already exists'
      })
    } else {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      })
  
      try {
        await user.save()
        res.status(201).json(user)
      } catch (e) {
        errorHandler(res, e)
      }
    }
  
  }
  
  
  