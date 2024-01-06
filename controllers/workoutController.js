const Workout = require("../models/workoutModel");

//add a new workout
exports.addWorkout = async (req, res) => {
  try {
    console.log("Received POST request to add a workout"); //add console message to know when the POST begins
    const newWorkout = new Workout(req.body); //take the body of the request and store is as newWorkout
    const savedWorkout = await newWorkout.save();
    res
      .status(201)
      .json({ message: "Workout added successfully", workout: newWorkout }); //send 201 status when workout is saved
  } catch (error) {
    //handle errors
    console.error("Error adding workout:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update an existing workout
exports.updateWorkout = async (req, res) => {
  try {
    console.log(
      `Received PUT request to update workout with ID: ${req.params.id}`
    );
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedWorkout) {
      // Workout with the given ID not found
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json({
      message: "Workout updated successfully",
      workout: updatedWorkout,
    });
  } catch (error) {
    console.error("Error updating workout:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete an existing workout
exports.deleteWorkout = async (req, res) => {
  try {
    console.log(
      `Received DELETE request to delete workout with ID: ${req.params.id}`
    );
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);

    if (!deletedWorkout) {
      // Workout with the given ID not found
      return res.status(404).json({ error: "Workout not found" });
    }
    res.json({
      message: "Workout deleted successfully",
      workout: deletedWorkout,
    });
  } catch (error) {
    console.error("Error deleting workout:", error);
    res.status(500).json({ error: error.message });
  }
};
