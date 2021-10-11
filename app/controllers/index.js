const Todo = require('../models/Todo')
const controller = {}

controller.homepage = async (req, res) => {
    const allTodo = await Todo.find()
    res.render("index", {todo : allTodo})

}

module.exports = controller
