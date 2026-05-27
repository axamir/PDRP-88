"use client";

import { useEffect, useState } from "react";
import { revenueEngine } from "@/revenue/engine";

export default function Home() {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    const events = ["page_view", "cta_click", "cta_click", "language_select"];

    const result = events.map(revenueEngine).pop();
    setState(result);
  }, []);

  if (!state) return <div>Calculating revenue model...</div>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="max-w-3xl text-center space-y-6">

        <h1 className="text-5xl font-bold">
          REVENUE ENGINE ACTIVE
        </h1>

        <p className="text-gray-600">
          USER TIER: {state.tier}
        </p>

        <p className="text-gray-700">
          SCORE: {state.score}
        </p>

        <div className="bg-black text-white p-4 rounded-xl">
          <p>PLAN: {state.pricing.plan}</p>
          <p>PRICE: ${state.pricing.price}</p>
        </div>

        <div className="text-sm text-gray-400 pt-6">
          LEVEL 32 · MONETIZATION SYSTEM ACTIVE
        </div>

      </div>

    </main>
  );
}
