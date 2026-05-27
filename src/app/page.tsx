"use client";

import { useEffect, useState } from "react";
import { detectIntent } from "@/lib/intent";
import { track } from "@/lib/events";
import { productBrainV2 } from "@/lib/product-brain";

export default function Home() {
  const [brain, setBrain] = useState<any>(null);

  useEffect(() => {
    const intent = detectIntent();

    const score = Math.random() * 10; // simulated learning signal

    const result = productBrainV2(intent, score);

    setBrain(result);

    track("page_view", { intent, score });
  }, []);

  if (!brain) return <div>Loading system...</div>;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">

      <div className="max-w-3xl space-y-6 text-center">

        <h1 className="text-5xl font-bold">
          PDRP-88
        </h1>

        <p className="text-gray-700 text-lg">
          Primary Feature: {brain.primaryFeature.title}
        </p>

        <div className="text-left bg-gray-100 p-4 rounded-xl">
          <h2 className="font-bold mb-2">Generated Features</h2>
          <ul className="space-y-1">
            {brain.features.map((f: any) => (
              <li key={f.id}>• {f.title}</li>
            ))}
          </ul>
        </div>

        <div className="text-left bg-black text-white p-4 rounded-xl">
          <h2 className="font-bold mb-2">Auto Experiments</h2>
          <ul className="space-y-1">
            {brain.experiments.map((e: any) => (
              <li key={e.id}>
                {e.variantA} ↔ {e.variantB}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-gray-400 pt-6">
          LEVEL 27 · SELF-GENERATING PRODUCT SYSTEM ACTIVE
        </div>

      </div>

    </main>
  );
}
