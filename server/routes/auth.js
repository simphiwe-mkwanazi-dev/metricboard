const express = require('express'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const User = require('../models/User'); 
 
const router = express.Router(); 
 
router.post('/register', async (req, res) => { 
  const { name, email, password } = req.body; 
  const passwordHash = await bcrypt.hash(password, 10); 
  const user = await User.create({ name, email, passwordHash }); 
  res.json({ message: 'User created', userId: user._id }); 
}); 
 
router.post('/login', async (req, res) => { 
  const { email, password } = req.body; 
  const user = await User.findOne({ email }); 
  if (!user) return res.status(400).json({ message: 'User not found' }); 
 
  const isMatch = await bcrypt.compare(password, user.passwordHash); 
  if (!isMatch) return res.status(400).json({ message: 'Wrong password' }); 
 
  const token = jwt.sign({ id: user._id, role: user.role }, 'temporary_secret_key'); 
  res.json({ token }); 
}); 
 
module.exports = router; 