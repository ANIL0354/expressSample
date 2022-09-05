const { userModal: users } = require('../modal')
function addUser(user) {
  user = { ...user, age: parseInt(user.age) }
  users.push(user)
  return users
}

function deleteUser(userName) {
  let userNameIndex = findUser(userName)
  users.slice(userNameIndex, 1)
}

function updateUser(user, userNameIndex) {
  let newTempUser = {
    ...users[userNameIndex],
    ...user,
    age: parseInt(user.age),
  }
  users.slice(userNameIndex, 1)
  users[userNameIndex] = newTempUser
  return users
}

function allUsers() {
  return users
}

function findUser(userName) {
  let userNameIndex = -1
  users.forEach((item, index) => {
    if (item.name === userName) {
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
