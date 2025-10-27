const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta girin.'],
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Doctor', DoctorSchema);
