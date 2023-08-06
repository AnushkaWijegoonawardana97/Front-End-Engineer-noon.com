const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");

const Post = require("../../models/Post");

/**
    GET
    api/posts
    Get all the posts
    Public
 */
router.get("/", async (request, response) => {
  try {
    const posts = await Post.find();
    response.json(posts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error: Something Went Wrong...");
  }
});

/**
    POST
    api/posts
    Create Post
    Public
 */
router.post(
  "/",
  [
    check("title", "Post title is required").not().isEmpty(),
    check("description", "Post description is required").not().isEmpty(),
    check("authorEmail", "Please include a valid email address").isEmail(),
  ],
  async (request, response) => {
    console.log(request.body);
    const error = validationResult(request);

    if (!error.isEmpty()) {
      return response.status(400).json({
        error: error.array(),
      });
    }

    const { title, description, authorEmail } = request.body;

    try {
      const avatar = gravatar.url(authorEmail, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      const author = authorEmail.split("@")[0];

      post = new Post({
        title,
        description,
        author,
        authorEmail,
        avatar,
      });

      await post.save();

      response.json({
        errors: [{ msg: "New post has been created successfully..." }],
      });
    } catch (error) {
      console.error(error.message);
      response.status(500).send("Server error...");
    }
  }
);

module.exports = router;
