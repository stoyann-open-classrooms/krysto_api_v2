const express = require('express')
const dotenv = require('dotenv')
const morgan = require ('morgan');
// Route files
const community = require('./routes/communityRoutes')

// LOAD environment variables
dotenv.config({
    path: './config/config.env'
})

const app = express()

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Mount router
app.use('/api/v2/communities', community)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))