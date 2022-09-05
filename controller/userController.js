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
  } else if (userService.findUser(user.name) > -1) {
    return false
  } else {
    return userService.addUser(user)
  }
}
function updateUser(name, user) {
  if (name) {
    let userIndex = userService.findUser(name)
    if (userIndex > -1) {
      return userService.updateUser(user, userIndex)
    } else {
      return false
    }
  } else return false
}

function deleteUser() {
  let userIndex=userService.
}
module.exports = {
  getUser,
  addUser,
  updateUser,
}
