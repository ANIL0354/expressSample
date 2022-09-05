const userRoute = require('./users')
var express = require('express')
var router = express.Router()
const controller = require('../controller')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('working fine')
  res.status(200).json({ msg: 'message' })
  next()
})

router.get('/user', function (req, res, next) {
  res.json({ statusCode: 200, status: true, ...controller.getUser() })
  next()
})

router.post('/users', function (req, res, next) {
  let response = controller.addUser(req.body)
  if (response) {
    res.json({ statusCode: 200, status: true, ...controller.getUser() })
    next()
  } else {
    res.json({ statusCode: 400, status: false })
  }
})

router.put('/users', function (req, res, next) {
  let response = controller.updateUser(req.query.name, req.body)
  if (response) {
    res.json({ statusCode: 200, status: true, ...controller.getUser() })
    next()
  } else {
    res.json({ statusCode: 400, status: false })
  }
})

router.delete('/users', function (req, res, next) {
  let response = controller.updateUser(req.query.name)
  if (response) {
    res.json({ statusCode: 200, status: true, ...controller.getUser() })
    next()
  } else {
    res.json({ statusCode: 400, status: false })
  }
})
module.exports = router
