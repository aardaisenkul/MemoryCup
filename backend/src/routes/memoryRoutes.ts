import express from "express";
import { getAllMemories, createMemory, deleteMemory } from "../controllers/memoryController";

import { Router } from "express";
const router: Router = express.Router();

router.get("/", getAllMemories);
router.post("/", createMemory);
router.delete("/:id", deleteMemory);

export default router;