var express = require('express')
var router = express.Router()
const controller = require('../controller')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('working fine')
  res.status(200).json({ msg: 'message', ...controller.getUser() })
})

module.exports = router
