const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Enable CORS
app.use(cors({ origin: '*' })); // Allow all origins
app.use(express.json()); // Parse JSON requests

// Import Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the MERN Authentication API');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
