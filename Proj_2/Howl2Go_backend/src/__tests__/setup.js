/**
 * @fileoverview Jest global setup
 * @description Global setup for Jest tests - runs once before all test suites
 * @author Howl2Go Dev Team
 * @date 2025
 */

export default async function globalSetup() {
  // Set test environment variables if needed
  process.env.NODE_ENV = 'test';

  console.log('Global test setup complete');
}
