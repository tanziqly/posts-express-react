import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtKey = process.env.JWT_TOKEN_SECRET;

export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const decoding = jwt.verify(token, jwtKey);
      req.userId = decoding._id;
      next();
    } catch (err) {
      console.log(err);
      return res.status(403).json({
        message: "нет доступа",
      });
    }
  } else {
    return res.status(403).json({
      message: "нет доступа",
    });
  }
};
