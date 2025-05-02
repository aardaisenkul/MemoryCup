import { Request, Response } from "express";
import prisma from "../prisma/client";

// Temporary: hardcoded user ID for testing
const testUserId = "test-user-id-123";

export const getAllMemories = async (req: Request, res: Response) => {
  try {
    const memories = await prisma.memory.findMany({
      where: {
        userId: testUserId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(memories);
  } catch (error) {
    console.error("Error fetching memories:", error);
    res.status(500).json({ error: "Something went wrong while fetching memories" });
  }
};

export const createMemory = async (req: Request, res: Response) => {
    const { title, content } = req.body;
  
    if (!title || !content) {
      res.status(400).json({ error: "Title and content are required" });
      return;
    }
  
    try {
      const memory = await prisma.memory.create({
        data: {
          title,
          content,
          userId: testUserId,
        },
      });
  
      res.status(201).json(memory);
    } catch (error) {
      console.error("Error creating memory:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };

export const deleteMemory = (req: Request, res: Response) => {
  const { id } = req.params;
  // later: delete from DB
  res.send(`Memory with id ${id} deleted`);
};