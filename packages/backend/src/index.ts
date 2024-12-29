import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv'
import path from "path";

const app = express();
dotenv.config()
// const prisma = new PrismaClient();

app.use(express.json());

// app.use(express.static(path.join(__dirname, "./public")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
