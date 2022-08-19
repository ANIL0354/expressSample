const services = require('../services')
const { userService } = services
function getUser() {
  return userService.allUsers()
}

function addUser(user) {
  if (!user.name) {
    return false
  } else if (!user.age) {
    return false
  } else {
    return userService.addUser(user)
  }
}
module.exports = {
  getUser,
  addUser,
}
