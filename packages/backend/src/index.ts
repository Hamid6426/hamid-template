import * as dotenv from 'dotenv';
import * as path from 'path';
import express from "express";
import indexRoutes from './routes/routes.index';

dotenv.config({ path: '../../.env' });

const app = express();
const PORT = process.env.PORT || 3000;  // Fallback to 3000 if PORT is not set
app.use(express.json());

// Serve static files from frontend build
const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

// API routes
app.use("/api", indexRoutes);

// Catch-all to serve frontend for unknown routes
app.get("*", (req, res) => {
  try {
    console.log(`Request received for: ${req.originalUrl}`);
    res.sendFile(path.join(publicDir, "index.html"), (err) => {
      if (err) {
        res.status(500).send("Error loading the frontend");
      }
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
