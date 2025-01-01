import express from 'express';

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Car Marketplace API!' });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
