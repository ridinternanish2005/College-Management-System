import express from "express";
import { createAdmission } from "../controllers/admissionController.js";

const router = express.Router();

// Test route
router.get("/", (req, res) => {
//   res.send("Admission API Working ✅");
   res.send("Admission/admission.ejs");
});

// Submit form
router.post("/submit", createAdmission);

export default router;