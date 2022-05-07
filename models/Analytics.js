const mongoose = require('mongoose');
const schema = mongoose.Schema;

const analyticSchema = new schema({
    name:{
        type: String,
        required:  true
    },
    cons:{
        type: Number,
        required: true
    },
    category:{
        ref: 'catrgores',
        type: schema.Types.ObjectId
    },
    imageSrc:{
        type: String,
        default: ''
    },
    user:{
        ref: 'user',
        type: schema.Types.ObjectId
    }
})

module.exports = mongoose.model('analytic', analyticSchema)