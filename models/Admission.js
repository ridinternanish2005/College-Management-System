import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },

  fatherName: {
    type: String,
    required: true
  },

  mobile: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  dob: {
    type: Date,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  course: {
    type: String,
    required: true
  },

  percentage: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Admission = mongoose.model("Admission", admissionSchema);

export default Admission;