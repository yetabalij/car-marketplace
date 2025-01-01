import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

// Test Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Car Marketplace API!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
