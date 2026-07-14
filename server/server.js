const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const authRoutes = require('./routes/auth'); 

const express = require('express'); 
const mongoose = require('mongoose'); 
 
const app = express(); 
app.use(express.json()); 
 
mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log('Connected to MongoDB')) 
  .catch((err) => console.log('MongoDB connection error:', err)); 
 
const PORT = 5000;
app.use('/api/auth', authRoutes); 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

