const controller = require('../controller')
const {} = controller
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('user/', function (req, res, next) {
  res.json({ statusCode: 200, status: true, ...controller.getUser() })
})

module.exports = router
