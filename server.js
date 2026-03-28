import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import mainRoutes from "./routes/mainRoutes.js";

import erpRoutes from "./routes/erpRoutes.js";
// import admission2Routes from "./routes/admission2Routes.js"

import admissionRoutes from "./routes/admissionRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Static Folder
app.use(express.static(path.join(process.cwd(), "public")));

// Routes
app.use("/", mainRoutes);
app.use("/admission", admissionRoutes);
app.use("/erp", erpRoutes);
// app.use("/admission2", admission2Routes);


// ////////////////////////////////////////////////////////////
// app.get("/enquary",(req,res)=>{
//   res.render("Admission/enquiry.ejs")
// })
// app.get("/allcourses",(req,res)=>{
//   res.render("Admission/allcourses"); 
// })



/////////////////////////////////////////////////////

// app.use("/api", studentRoutes);
// Route mount
// app.use("/admission", admissionRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});