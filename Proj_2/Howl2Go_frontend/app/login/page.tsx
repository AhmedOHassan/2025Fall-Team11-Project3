/**
 * @fileoverview Login page
 * @description User authentication page
 * @author Howl2Go Dev Team
 * @date 2025
 */

"use client";

import { Suspense } from "react";
import LoginPageClient from "./LoginPageClient";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <LoginPageClient />
    </Suspense>
  );
}
