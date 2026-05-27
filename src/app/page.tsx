"use client";

import { useEffect, useState } from "react";
import { detectIntent } from "@/lib/intent";
import { getVariant } from "@/lib/experiment";
import { track } from "@/lib/events";
import { autoTrackDecision } from "@/lib/decision";

export default function Home() {
  const [intent, setIntent] = useState("global_user");
  const [variant, setVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    const detected = detectIntent();
    setIntent(detected);

    const v = getVariant("cta");
    setVariant(v);

    track("page_view", { intent: detected, variant: v });
  }, []);

  const handleCTA = (type: string) => {
    const action = autoTrackDecision("cta", type);

    console.log("DECISION:", action);
  };

  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6 bg-white">

      <div className="max-w-2xl space-y-6">

        <h1 className="text-6xl font-bold">PDRP-88</h1>

        <p className="text-gray-600">
          Self-Optimizing Recovery System
        </p>

        <p className="text-gray-700">
          {intent === "fa_user" && "سیستم در حال تنظیم خودکار برای فارسی‌زبان‌ها"}
          {intent === "en_user" && "System adapting for English users"}
          {intent === "global_user" && "Learning user behavior..."}
        </p>

        <div className="flex gap-4 justify-center pt-6">

          <a
            href="/en"
            onClick={() => handleCTA("enter_en")}
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            Enter
          </a>

          <a
            href="/fa"
            onClick={() => handleCTA("enter_fa")}
            className="px-6 py-3 border rounded-xl"
          >
            فارسی
          </a>

        </div>

        <div className="text-sm text-gray-400 pt-10">
          LEVEL 24 · SELF-OPTIMIZATION ACTIVE
        </div>

      </div>

    </main>
  );
}
