import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/db'; // This triggers the DB connection test

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
    res.json({ message: "SSEM API is running smoothly!" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
});