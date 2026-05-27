"use client";

import { useEffect, useState } from "react";
import { selfReflectSystem } from "@/lib/self-reflect";

export default function Home() {
  const [system, setSystem] = useState<any>(null);

  useEffect(() => {
    const result = selfReflectSystem();
    setSystem(result);
  }, []);

  if (!system) return <div>Analyzing system...</div>;

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="max-w-4xl space-y-6 text-center">

        <h1 className="text-5xl font-bold">
          SELF-REWRITING PRODUCT
        </h1>

        <p className="text-gray-600">
          SYSTEM HEALTH: {system.systemHealth}
        </p>

        <div className="text-left bg-gray-100 p-4 rounded-xl">
          <h2 className="font-bold mb-2">CODE INSIGHTS</h2>
          {system.insights.map((i: any, idx: number) => (
            <div key={idx}>
              • {i.file} → {i.suggestion}
            </div>
          ))}
        </div>

        <div className="text-left bg-black text-white p-4 rounded-xl">
          <h2 className="font-bold mb-2">REWRITE PLAN</h2>
          {system.plan.map((p: any, idx: number) => (
            <div key={idx}>
              • {p.file}: {p.patch}
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-400 pt-6">
          LEVEL 29 · SELF-REWRITING ENGINE ACTIVE
        </div>

      </div>

    </main>
  );
}
