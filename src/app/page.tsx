"use client";

import { useEffect, useState } from "react";
import { detectIntent } from "@/lib/intent";
import { track } from "@/lib/events";
import { pushMemory } from "@/lib/memory";
import { computeScore } from "@/lib/score-engine";
import { productBrain } from "@/lib/product-brain";

export default function Home() {
  const [state, setState] = useState({
    message: "",
    funnel: "awareness",
    cta: "Start",
  });

  useEffect(() => {
    const intent = detectIntent();

    pushMemory("intent", intent);

    const score = computeScore();
    const brain = productBrain(intent, score);

    setState(brain);

    track("page_view", { intent, score });
  }, []);

  const handleClick = () => {
    track("cta_click", { type: state.funnel });
    pushMemory("ctr", 10);
  };

  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6 bg-white">

      <div className="max-w-2xl space-y-6">

        <h1 className="text-4xl font-bold">
          PDRP-88
        </h1>

        <p className="text-lg text-gray-700">
          {state.message}
        </p>

        <button
          onClick={handleClick}
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          {state.cta}
        </button>

        <div className="text-sm text-gray-400 pt-10">
          LEVEL 26 · AUTONOMOUS PRODUCT BRAIN ACTIVE
        </div>

      </div>

    </main>
  );
}
