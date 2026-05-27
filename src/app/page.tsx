"use client";

import { useEffect, useState } from "react";
import { detectIntent } from "@/lib/intent";

export default function Home() {
  const [intent, setIntent] = useState("loading");

  useEffect(() => {
    setIntent(detectIntent());
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6">

      <div className="max-w-2xl space-y-6">

        <h1 className="text-6xl font-bold">PDRP-88</h1>

        <p className="text-gray-600">
          Post-Disconnection Recovery Protocol
        </p>

        {intent === "fa_user" && (
          <p className="text-lg text-gray-700">
            شما وارد یک سیستم بازیابی دیجیتال شده‌اید.
          </p>
        )}

        {intent === "en_user" && (
          <p className="text-lg text-gray-700">
            You are entering a digital recovery environment.
          </p>
        )}

        {intent === "global_user" && (
          <p className="text-lg text-gray-700">
            Adaptive system initializing...
          </p>
        )}

        <div className="flex gap-4 justify-center pt-6">
          <a className="px-6 py-3 bg-black text-white rounded-xl" href="/en">
            Enter
          </a>
          <a className="px-6 py-3 border rounded-xl" href="/fa">
            تغییر زبان
          </a>
        </div>

        <div className="text-sm text-gray-400 pt-10">
          LEVEL 21 · ADAPTIVE MODE ACTIVE
        </div>

      </div>
    </main>
  );
}
