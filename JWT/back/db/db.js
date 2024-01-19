const mongoose = require('mongoose')

const connectDb = async (url) => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useunifiedTopology: true
    })
}

module.exports.connectDb = connectDb