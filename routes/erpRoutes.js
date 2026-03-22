import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("ERP/login");
});

router.get("/student", (req, res) => {
  res.render("ERP/student");
});

router.get("/principal", (req, res) => {
  res.render("ERP/principal");
});

router.get("/faculty", (req, res) => {
  res.render("ERP/faculty");
});

router.get("/admin", (req, res) => {
  res.render("ERP/admin");
});

export default router;