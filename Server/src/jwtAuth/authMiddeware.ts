import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./jwtUtil";
import { HTTP_STATUS } from "../constants/httpContants";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    console.log("No token provided");
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ error: "Access denied" });
  }
  try {
    const userAuthData = verifyToken(token);
    if (!userAuthData || typeof userAuthData !== "object" || !userAuthData.id) {
      return res.status(403).json({ error: "Invalid token" });
    }

    (req as any).userAuthData = userAuthData; 

    next();
  } catch (error) {
    res.status(403).json({ error: "Token verification failed" });
  }
};
