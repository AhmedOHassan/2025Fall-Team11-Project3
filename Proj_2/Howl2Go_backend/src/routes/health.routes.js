/**
 * @fileoverview Health routes
 * @description API routes for health check endpoints
 * @author Howl2Go Dev Team
 * @date 2025
 */

import { Router } from 'express';
import { getHealthStatus } from '../controllers/health.controller.js';

const router = Router();

router.get('/', getHealthStatus);

export default router;
