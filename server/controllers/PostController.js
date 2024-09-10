import PostModel from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags,
      viewsCount: req.body.viewsCount,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось создать пост" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("user").exec();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось получить все статьи" });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { viewsCount: 1 } },
      { returnDocument: "After" }
    )
      .then((doc) => res.json(doc))
      .catch((err) => res.status(500).json({ message: "Статья не найдена" }));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось получить статьи" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await PostModel.findOneAndDelete({ _id: postId });
    if (doc) {
      res.json({ success: true });
    } else {
      res.status(404).json({ message: "Статья не найдена" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось удалить статью" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags,
        viewsCount: req.body.viewsCount,
        imageUrl: req.body.imageUrl,
        user: req.userId,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось обновить статью" });
  }
};
