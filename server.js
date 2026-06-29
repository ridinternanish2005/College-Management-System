import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import mainRoutes from "./routes/mainRoutes.js";

import schoolWebRoutes from "./school/server.js";         // Mount the school routes
import svicRoutes from "./svic_college/server.js";         // Mount the svic_college routes
import erpRoutes from "./routes/erpRoutes.js";
// import admission2Routes from "./routes/admission2Routes.js"

import admissionRoutes from "./routes/admissionRoutes.js";
import webRoutes from "./routes/webRoutes.js";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the views directory for EJS templates
// View Engine
app.set("view engine", "ejs");
app.set("views", [
  path.join(process.cwd(), "views"),
  path.join(process.cwd(), "school/views"),
  path.join(process.cwd(), "svic_college/views")
]);

// Static Folder
app.use(express.static(path.join(process.cwd(), "public")));
 // Serve static files for school and svic_college routes

app.use("/school", express.static(path.join(process.cwd(), "school/public")));
app.use("/svic_college", express.static(path.join(process.cwd(), "svic_college/public")));
// Routes
app.use("/", mainRoutes);
app.use("/admission", admissionRoutes);
app.use("/erp", erpRoutes);
// app.use("/admission2", admission2Routes);

//.......................... Mount the school and svic_college routes......................

app.use("/school", schoolWebRoutes);                           //main routes ye hai
app.use("/svic_college", svicRoutes);                        //main routes ye hai
app.use("/msd-school", webRoutes);

// app.get("/index",(req,res)=>{
//   res.render("index")
// })


// app.get("/hh",(req,res)=>{
//   res.render("index")

// })
/////////////////////////////////////////////////////

// app.use("/api", studentRoutes);
// Route mount
// app.use("/admission", admissionRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});