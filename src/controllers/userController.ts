import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import type { Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

// GET /users
router.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

export default router;
