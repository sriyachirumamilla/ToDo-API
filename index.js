const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const noteRouter = require('./routes/notes');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json()); // Ensure this is before your routes

// Define routes
app.use('/api/notes', noteRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection failed:", error.message));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

// Start the server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
