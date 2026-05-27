"use client";

import { useEffect, useState } from "react";
import { runAutopilot } from "@/lib/autopilot";

export default function Home() {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    const result = runAutopilot();
    setState(result);
  }, []);

  if (!state) return <div>Booting autonomous system...</div>;

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="max-w-3xl space-y-6 text-center">

        <h1 className="text-5xl font-bold">
          AUTONOMOUS DEPLOYMENT SYSTEM
        </h1>

        <p className="text-gray-600">
          STATUS: {state.status}
        </p>

        <div className="bg-black text-white p-4 rounded-xl text-left">
          <p>Commit: {String(state.commit)}</p>
          <p>Deploy: {state.deployment}</p>
        </div>

        <div className="text-sm text-gray-400 pt-6">
          LEVEL 30 · SELF-DEPLOYMENT ACTIVE
        </div>

      </div>

    </main>
  );
}
