const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000 || process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/content', require('./routes/content.routes'))

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Successful DB connection')

        app.listen(PORT, () => {console.log(`App started on port ${PORT}`)})
    } catch (err) {
        console.log(`Server error ${err.message}`)
        process.exit(1) 
    }
}

start()

