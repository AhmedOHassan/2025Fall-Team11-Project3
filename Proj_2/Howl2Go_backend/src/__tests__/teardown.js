/**
 * @fileoverview Jest global teardown
 * @description Global teardown for Jest tests - runs once after all test suites complete
 * @author Howl2Go Dev Team
 * @date 2025
 */

import mongoose from 'mongoose';

export default async function globalTeardown() {
  // Close any remaining MongoDB connections
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  console.log('Global test teardown complete');
}
