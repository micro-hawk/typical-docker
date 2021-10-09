const mongoose = require('mongoose')

const mongooseModel = new mongoose.model("Todo", TodoSchema)
const TodoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    }
})

module.exports = mongooseModel