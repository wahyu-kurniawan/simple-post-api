const express = require("express");
const Post = require("../model/Post");

const route = express.Router();

route.get("/", (req, res) => {
  Post.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
route.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

route.get("/:postId", (req, res) => {
  Post.findById(req.params.postId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

route.delete("/:postId", (req, res) => {
  Post.remove({ _id: req.params.postId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

route.patch("/:postId", (req, res) => {
  Post.updateOne(
    { _id: req.params.postId },
    {
      title: req.body.title,
      description: req.body.description,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = route;
