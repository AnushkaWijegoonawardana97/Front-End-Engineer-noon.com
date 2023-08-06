const express = require("express");
const { check } = require("express-validator");
const checkObjectId = require("../../middleware/checkObjectId");
const router = express.Router();

/**
    GET
    api/favourite
    Public
 */
router.get("/", async (request, response) => {
  try {
    const posts = await Post.find({ isFavourite: true });
    response.json(posts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error: Something Went Wrong...");
  }
});

/**
    GET
    api/favourite
    Public
 */
router.put("/:id", checkObjectId("id"), async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    let errorMessage = "This post has been added to the favourite list...";

    if (post.isFavourite) {
      errorMessage = "This post has been removed from the favourite list...";
    }

    post.isFavourite = !post.isFavourite;

    await post.save();

    response.json({
      errors: [{ msg: errorMessage }],
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server error...");
  }
});

/**
    GET
    api/favourite
    Public
 */
router.put("/like/:id", checkObjectId("id"), async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);

    post.likes = ++post.likes;

    await post.save();

    response.json({
      errors: [{ msg: "This post has been liked..." }],
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server error...");
  }
});

module.exports = router;
