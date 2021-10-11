const Todo = require('../models/Todo')
const todo = {}

todo.route = (req, res) => {
    const {todo} = req.body
    const newTodo = new Todo({todo})

    //SAving todo items
    newTodo.save()
    .then(() => {
        console.log('Succefully added todo.')
        res.redirect('/')
    })
    .catch((err) => {console.log(err)} )
    
}

module.exports = todo