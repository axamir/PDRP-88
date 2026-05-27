"use client";

import { useEffect, useState } from "react";
import { detectIntent } from "@/lib/intent";
import { track } from "@/lib/events";
import { getVariant } from "@/lib/experiment";

export default function Home() {
  const [intent, setIntent] = useState("loading");
  const [variant, setVariant] = useState("A");

  useEffect(() => {
    const detected = detectIntent();
    setIntent(detected);

    track("page_view", { detected });

    const v = getVariant("landing_cta");
    setVariant(v);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6">

      <div className="max-w-2xl space-y-6">

        <h1 className="text-6xl font-bold">PDRP-88</h1>

        <p className="text-gray-600">
          Post-Disconnection Recovery Protocol
        </p>

        {/* Adaptive message */}
        {intent === "fa_user" && (
          <p>شما وارد محیط بازیابی شدید</p>
        )}

        {intent === "en_user" && (
          <p>You are inside a recovery system</p>
        )}

        {intent === "global_user" && (
          <p>System initializing...</p>
        )}

        {/* EXPERIMENTAL CTA */}
        <div className="flex gap-4 justify-center pt-6">

          {variant === "A" ? (
            <>
              <a
                href="/en"
                onClick={() => track("cta_click", { type: "A_enter_en" })}
                className="px-6 py-3 bg-black text-white rounded-xl"
              >
                Start Recovery
              </a>

              <a
                href="/fa"
                onClick={() => track("cta_click", { type: "A_enter_fa" })}
                className="px-6 py-3 border rounded-xl"
              >
                ورود
              </a>
            </>
          ) : (
            <>
              <a
                href="/en"
                onClick={() => track("cta_click", { type: "B_enter_en" })}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl"
              >
                Enter System
              </a>

              <a
                href="/fa"
                onClick={() => track("cta_click", { type: "B_enter_fa" })}
                className="px-6 py-3 border border-blue-600 rounded-xl"
              >
                شروع
              </a>
            </>
          )}

        </div>

        <div className="text-sm text-gray-400 pt-10">
          LEVEL 23 · EXPERIMENT ENGINE ACTIVE
        </div>

      </div>

    </main>
  );
}
