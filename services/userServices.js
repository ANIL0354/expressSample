const { userModal: users } = require('../modal')
function addUser(user) {
  return users.push(user)
}

function deleteUser(userName) {
  let userNameIndex = findUser(userName)
  users.slice(userNameIndex, 1)
}

function updateUser(userName, age) {
  let userNameIndex = findUser(userName)
  users.slice(userNameIndex, 1, { name: userName, age: age })
}

function allUsers() {
  return users
}

function findUser(userName) {
  let userNameIndex = -1
  users.forEach((item, index) => {
    if (item === userName) {
      return (userNameIndex = index)
    }
  })
  return userNameIndex
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  allUsers,
  findUser,
}
