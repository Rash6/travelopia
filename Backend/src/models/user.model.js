const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true  },
    Country: { type: String, required: true,enum: ["-", "India","Africa","Europe"],default: "-", },
    No_of_passenger:{ type: Number, required: true },
    Currency:{type: Number, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);