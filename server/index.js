const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wanderlust';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    if (err.message.includes('querySrv ECONNREFUSED')) {
      console.log('💡 TIP: This DNS error often happens on some networks. Try checking your internet connection or using a VPN.');
    }
  });

// Routes
app.get('/', (req, res) => {
  res.send('Wanderlust Express API is running');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Express!', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
