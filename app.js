const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const helmet = require("helmet"); // Import helmet for security
const users = require("./users.json");
const middleware = require("./routes/middleware");
const usersRoute = require("./routes/users");
const workoutRoutes = require("./routes/workoutRoutes");
const port = 5000;

const app = express();

// MongoDB connection URI
const uri =
  "mongodb+srv://megcwilde:CarsPass456@fitness.y05t243.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Enable JSON request body parsing
app.use(express.json());

app.use(helmet()); // Use helmet middleware to set HTTP headers for security
app.use(express.json()); // Parse JSON request using middleware
// Parsing URL-encoded request bodies with extended options using body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", usersRoute); // Using the user-related routes for requests starting with "/users"

// Import the Workout model
const Workout = require("./models/workoutModel");

// API endpoint to retrieve workout
app.get("/api/workout", async (req, res) => {
  try {
    // Retrieve workouts from the collection and send as JSON response
    const workout = await Workout.find();
    res.json(workout);
  } catch (err) {
    // Handle errors
    console.error("Error fetching cars:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Mount workoutRoutes for additional API routes under the "/api" prefix
app.use("/api", workoutRoutes);

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
