import { validationResult } from "express-validator";
export default (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json(result.array());
  }

  next();
};
