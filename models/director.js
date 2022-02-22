const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Director", directorSchema);
