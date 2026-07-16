require('dotenv').config(); 
const mongoose = require('mongoose'); 
const Metrics = require('./models/Metrics'); 
 
mongoose.connect(process.env.MONGO_URI).then(async () => { 
  await Metrics.deleteMany({}); 
  await Metrics.insertMany([ 
    { month: 'Jan', revenue: 1200, users: 80, churn: 4 }, 
    { month: 'Feb', revenue: 1500, users: 95, churn: 3.5 }, 
    { month: 'Mar', revenue: 1800, users: 110, churn: 3 }, 
    { month: 'Apr', revenue: 2100, users: 130, churn: 2.8 } 
  ]); 
  console.log('Seed data inserted!'); 
  mongoose.disconnect(); 
}); 