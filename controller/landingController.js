const Blog = require("../model/blogModel");

exports.getLanding = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render("landing", {
      blogs: blogs,
    });
  } catch (err) {
    console.log(err.message);

    res.status(500).send("Database error");
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render("allblogs", {
      blogs: blogs,
    });
  } catch (err) {
    console.log(err.message);

    res.status(500).send("Database error");
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogs = await Blog.findById(blogId);
    res.render("blog", {
      blog: blogs,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Database error");
  }
};
exports.createBlog = async (req, res) => {
  try {
    await Blog.create(req.body);
    res.redirect("/api/v1/landing");
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/api/v1/landing");
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};
