const express = require("express");
const Posts = require("../models/postsModel");

const postsController = require("../controllers/postsController");

const router = express.Router();

router.post("/", postsController.postNewPost);
router.get("/", postsController.getAllPosts);
router.put("/", postsController.postLike);
router.put("/", postsController.deleteLike);
router.put("/", postsController.postComment);

router.get("/getPost/:id", async (req, res) => {
  try {
    const post = await Posts.find({ userId: req.params.id });

    return res.status(201).json({
      message: `Successfully get posts from id: ${req.params.id}`,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
