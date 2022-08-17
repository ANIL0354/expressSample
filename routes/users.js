const controller = require('../controller')
const {} = controller
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('user/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  // res.json({    statusCode: 200,
  //               status: true,...})
})

module.exports = router
