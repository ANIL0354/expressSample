const services = require('../services')
const { userService } = services
console.log('asa', userService)
function getUser() {
  return userService.allUsers()
}

module.exports = {
  getUser,
}
