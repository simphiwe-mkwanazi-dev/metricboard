const mongoose = require('mongoose'); 
 
const metricsSchema = new mongoose.Schema({ 
  month: String, 
  revenue: Number, 
  users: Number, 
  churn: Number 
}); 
 
module.exports = mongoose.model('Metrics', metricsSchema); 