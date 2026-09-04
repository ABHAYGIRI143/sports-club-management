const mongoose = require('mongoose');

const getHealth = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Sports Club Management API is healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
};

module.exports = { getHealth };
