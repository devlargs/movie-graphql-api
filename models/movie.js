const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    directorId: String,
    genre: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
