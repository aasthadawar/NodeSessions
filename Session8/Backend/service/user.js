const userModel = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userOperations = {
  create: async (userInfo) => {
    try {
      let encodedPwd = await bcrypt.hash(userInfo.password, saltRounds);
      let user = await userModel.create({
        name: userInfo.name,
        password: encodedPwd,
        age: userInfo.age,
        email: userInfo.email,
      });
      return user;
    } catch (error) {
      return error;
    }
  },
  read: async (emailId) => {
    try {
      let user = await userModel.find({ email: emailId });
      return user;
    } catch (error) {
      return 'cannot find user';
    }
  },
};

module.exports = userOperations;
