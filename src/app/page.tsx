"use client";

import { useEffect, useState } from "react";
import { runCompany } from "@/agents/company";

export default function Home() {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    const result = runCompany("optimize product and increase retention");
    setState(result);
  }, []);

  if (!state) return <div>Launching AI company...</div>;

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="max-w-3xl space-y-6 text-center">

        <h1 className="text-5xl font-bold">
          AI COMPANY CORE
        </h1>

        <p className="text-gray-600">
          Multi-Agent Organization Simulation
        </p>

        <div className="text-left bg-black text-white p-4 rounded-xl">
          {state.decisions.map((d: any, i: number) => (
            <div key={i}>
              • {d.from}: {d.content}
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-400 pt-6">
          LEVEL 31 · ORGANIZATION ENGINE ACTIVE
        </div>

      </div>

    </main>
  );
}
