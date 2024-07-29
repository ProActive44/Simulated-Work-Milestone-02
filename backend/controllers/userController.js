const bcryptJs = require('bcryptjs');
const User = require('../models/User.js');

const userController = async (req, res) => {
  const { fullname, email, password, username } = req.body;
  
  try {
    const presentEmail = await User.findOne({ where: { email } });
    if (presentEmail) {
      return res.status(422).json({ error: 'User already exists with that email' });
    }

    const presentUserName = await User.findOne({ where: { username } });
    if (presentUserName) {
      return res.status(422).json({ error: 'User already exists with that username' });
    }

    const hashedPassword = await bcryptJs.hash(password, 10);
    const newUser = await User.create({
      username,
      fullname,
      email,
      password: hashedPassword
    });

    res.status(200).json({ user: newUser, message: 'Registered Successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { userController }