import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

const mongodbKey = process.env.MONGODB;
import checkAuth from "./middlewares/CheckAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

import HandleValidErrors from "./middlewares/HandleValidErrors.js";

import { regValid, logValid, postCreateValid } from "./Validations.js";

const app = express();
app.use(express.json());
app.use("/upload", express.static("uploads"));
const port = 4444;

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

mongoose
  .connect(mongodbKey)
  .then(() => {
    console.log("db is working");
  })
  .catch((err) => {
    console.log("connecting to db is failed!", err);
  });

app.post("/sign-in", logValid, HandleValidErrors, UserController.SignIn);
app.post("/sign-up", regValid, HandleValidErrors, UserController.SignUp);
app.get("/profile", checkAuth, UserController.getUserData);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/posts", PostController.getAllPosts);
app.get("/posts/:id", PostController.getOnePost);
app.post(
  "/posts",
  checkAuth,
  postCreateValid,
  HandleValidErrors,
  PostController.createPost
);
app.delete("/posts/:id", checkAuth, PostController.deletePost);
app.patch("/posts/:id", HandleValidErrors, PostController.updatePost);

const listenFunc = (err) => {
  err ? console.log(err) : console.log("Server is started! PORT: " + port);
};

app.listen(port, listenFunc);
