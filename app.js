

const express = require("express");
const mongoose = require("mongoose");
const blogController = require("./controller/blogController");
const landingController = require("./controller/landingController");
const { connectToDataBase } = require("./database/database");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json()); // da prima json
connectToDataBase();

app.get("/api/v1/blogs", blogController.getAllBlogs);
app.get("/api/v1/blogs/:id", blogController.getBlog);

app.post("/api/v1/blogs", blogController.createBlog);

app.patch("/api/v1/blogs/:id", blogController.updateBlog);
app.delete("/api/v1/blogs/:id", blogController.deleteBlog);

app.get("/api/v1/landing", landingController.getLanding);
app.get("/singleBlog/:id", landingController.getBlog);
app.get("/allblogs", landingController.getAllBlogs);

app.post("/delete/:id", landingController.deleteBlog);

app.post("/addBlog", landingController.createBlog);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Sucesfully started the backend");
});

//? Kreiraj api sto kje ima GET i POST metoda
//? Zemjodelie

//! Da se kreira view i da se prikazat site blogovi
//! Prikazete gi site blogovi so pomosh na ejs
