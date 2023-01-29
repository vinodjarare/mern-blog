const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// GET all blog posts
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blog post
router.post("/blogs", async (req, res) => {
  console.log(req.body);
  try {
    const blog = await Blog.create({
      title: req.body.title,
      body: req.body.blog,
      summary: req.body.summary,
    });
    res.status(201).json({
      success: true,
      blog,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a specific blog post
router.get("/blogs/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const blog = await Blog.findById(_id);
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
