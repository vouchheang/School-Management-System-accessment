// Authorization middleware
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Middleware to protect routes and check roles
const protectRoute = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access denied, no token provided or invalid format",
      });
    }

    const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      // Check if the user's role matches any of the allowed roles
      if (roles.length && !req.user.role.some((role) => roles.includes(role))) {
        return res
          .status(403)
          .json({ message: "Forbidden: You do not have the right role" });
      }

      next(); // Move to the next middleware or the route handler
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
      console.log("error: ", err)
    }
  };
};

export default protectRoute;
