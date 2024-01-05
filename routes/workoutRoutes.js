const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController.js");

//POST to add a new workout
router.post("/workout", workoutController.addWorkout);

//PUT to update an existing workout
router.put("/workout/:id", workoutController.updateWorkout);

// DELETE to delete an existing workout
router.delete("/workout/:id", workoutController.deleteWorkout);

module.exports = router;
