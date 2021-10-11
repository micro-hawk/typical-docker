const router = require('express').Router()
const controller = require('../controllers/index')
const todo = require('../controllers/todo-controller')


router.get('/', controller.homepage)
router.post('/', todo.route)


module.exports = router

