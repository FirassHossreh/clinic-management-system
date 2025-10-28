const mongoose = require('mongoose');

const allergySchema = new mongoose.Schema(
  {
    drugAllergy: {
      type: [String], // Birden fazla ilaç alerjisi olabilir
      default: [],
      trim: true,
    },
    foodAllergy: {
      type: [String], // Birden fazla gıda alerjisi olabilir
      default: [],
      trim: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
  },
  {
    timestamps: true, // createdAt ve updatedAt alanlarını otomatik ekler
  }
);

module.exports = mongoose.model('Allergy', allergySchema);
