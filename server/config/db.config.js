// import mongoose package
const mongoose = require('mongoose')

// declare a Database string URI
const DB_URI = 'mongodb://localhost:27017/urlshortener'
 // const DB_URI = 'mongodb+srv://ajit:12345@cluster0.ihmtj.mongodb.net/url?retryWrites=true&w=majority'

// establishing a database connection
const connection=()=>{
    return  mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

// export the connection object
module.exports = connection