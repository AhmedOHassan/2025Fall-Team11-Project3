/**
 * @fileoverview Health check controller
 * @description Provides API health status endpoint
 * @author Howl2Go Dev Team
 * @date 2025
 */

export const getHealthStatus = (req, res) => {
  res.json({
    status: 'ok',
    service: 'food-delivery-backend',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
};
