import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("partials/Navbar");
});

router.get("/contact", (req, res) => {
  res.render("Contact");
});
///////////////////////////////////////////////////////admission//////
router.get("/admission", (req, res) => {
  res.render("Admission/admission.ejs");
});
//////////////////////////////////////////////////
router.get("/allcourecs", (req, res) => {
  res.render("Admission/allcourecs.ejs");
});

export default router;