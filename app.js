const express = require('express')
const morgan = require('morgan')
const app = express()

const PORT = 3000
const index = require('./routes/index')
const api = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))

app.use('/', index)
app.use('/api', api)

app.listen(PORT,function(req,res){
  console.log(`App listen on ${PORT}`)
})