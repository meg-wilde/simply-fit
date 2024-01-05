const mongoose = require("mongoose");

//create schema for workouts
const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time_to_complete: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  score_unit: {
    type: String,
    required: true,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

//export the module as Car
module.exports = Workout;
