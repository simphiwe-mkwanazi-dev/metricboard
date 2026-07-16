const express = require('express');
const Metrics = require('../models/Metrics');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Metrics.find();
  res.json(data);
});

module.exports = router; 