/**
 * @fileoverview Admin routes
 * @description API routes for administrative user management
 * @author Howl2Go Dev Team
 * @date 2025
 */

import express from "express";
import { authenticate, authorize } from "../middleware/auth.middleware.js";
import { listUsers, createStaff, updateUser, deleteUser } from "../controllers/admin.controller.js";

const router = express.Router();

// All admin routes require authentication and admin role
router.use(authenticate);
router.use(authorize("admin"));

// List users
router.get("/users", listUsers);

// Create staff user
router.post("/users/staff", createStaff);

// Update user
router.patch("/users/:id", updateUser);

// Delete (deactivate) user
router.delete("/users/:id", deleteUser);

export default router;
