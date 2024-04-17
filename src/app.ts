import express from "express";
import { PrismaClient } from "@prisma/client";
import userController from "./controllers/userController";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use("/users", userController);

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

export default app;
