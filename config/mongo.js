const mongoose = require("mongoose");
const config = require("./index.js");

const CONNECTION_URL = 'mongodb+srv://canice:canice@cluster0.kexugat.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongo has connected successfully')
})

mongoose.connection.on('reconnected', () => {
    console.log('Mongo has reconnected')
})

mongoose.connection.on('error', error => {
    console.log('Mongo connection has an error', error)
    mongoose.disconnect()
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongo connection is disconnected')
})