import { Router } from "express";

const indexRoutes = Router();

// Example route
indexRoutes.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});

export default indexRoutes;
