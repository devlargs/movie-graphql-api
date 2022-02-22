const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required"],
    },
    directorId: mongoose.Types.ObjectId,
    genre: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
