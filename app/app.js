const express = require('express')
const mongoose = require('mongoose')

const app = express()
const appPort = 3000

//Connections to Mongodb
mongoose.connect('mongodb:localhost/', {
    useNewUrlParser : true, 
    useUnifiedTopology : true
})

//Middlewares
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))

app.set('view engine', 'ejs')


//listen to port
app.listen(appPort, ()=> {console.log(`Your app is running on server ${appPort}`)})
