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

// POST /users
router.post("/", async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  res.json({ user });
});

// GET /users/:id
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json({ user });
});

// PUT /users/:id
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, name } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      email,
      name,
    },
  });
  res.json({ user });
});

// DELETE /users/:id
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json({ user });
});

export default router;
