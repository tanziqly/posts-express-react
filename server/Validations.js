import { body, validationResult } from "express-validator";

export const logValid = [
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
];

export const regValid = [
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
  body("username")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 4 characters long"),
  body("avatarUrl")
    .optional()
    .isURL()
    .withMessage("Please provide a valid URL for the avatar"),
];

export const postCreateValid = [
  body("title")
    .isLength({ min: 3 })
    .isString()
    .withMessage("Title must be at least 3 characters long"),
  body("text")
    .isLength({ min: 3 })
    .isString()
    .withMessage("Text must be at least 3 characters long"),
  body("tags").isArray().optional().withMessage("Tags have incorrect format"),
  body("imageUrl").optional().isString().withMessage("incorrect URL of image"),
];
