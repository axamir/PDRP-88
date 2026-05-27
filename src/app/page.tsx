"use client";

import { useEffect, useState } from "react";
import { runStartupLoop } from "@/lib/startup-loop";

export default function Home() {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    const result = runStartupLoop();
    setState(result);
  }, []);

  if (!state) return <div>Loading startup engine...</div>;

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="max-w-3xl space-y-6 text-center">

        <h1 className="text-5xl font-bold">
          AUTONOMOUS STARTUP
        </h1>

        <p className="text-gray-600">
          STATUS: {state.status}
        </p>

        <div className="text-left bg-gray-100 p-4 rounded-xl">
          <h2 className="font-bold mb-2">KPIs</h2>
          {state.kpis.map((k: any, i: number) => (
            <div key={i}>
              {k.name}: {k.value.toFixed(2)} / {k.target}
            </div>
          ))}
        </div>

        <div className="text-left bg-black text-white p-4 rounded-xl">
          <h2 className="font-bold mb-2">AUTONOMOUS ACTIONS</h2>
          {state.actions.map((a: any, i: number) => (
            <div key={i}>
              • {a.problem} → {a.fix}
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-400 pt-6">
          LEVEL 28 · AUTONOMOUS STARTUP LOOP ACTIVE
        </div>

      </div>

    </main>
  );
}
