const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/index')

const app = express()
const appPort = 3000

//Connections to Mongodb
mongoose.connect('mongodb://admin:password@localhost:27017/todo_db', {
    useNewUrlParser : true, 
    useUnifiedTopology : true
})

// mongoose.connect('mongodb://localhost:27017/todo_db', {
//     useNewUrlParser : true, 
//     useUnifiedTopology : true
// })

//Middlewares
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))

app.set('view engine', 'ejs')


app.use('/', router)
// app.use('/', router)

//listen to port
app.listen(appPort, ()=> {console.log(`Your app is running on server ${appPort}`)})
