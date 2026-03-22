import Admission from "../models/Admission.js";

export const createAdmission = async (req, res) => {
  try {

    const admission = new Admission(req.body);

    const savedData = await admission.save();

    res.status(201).json({
      success: true,
      message: "Admission submitted successfully",
      data: savedData
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};