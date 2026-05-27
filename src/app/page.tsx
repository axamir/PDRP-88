export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">

      <div className="max-w-2xl space-y-6">

        <h1 className="text-6xl font-bold tracking-tight">
          PDRP-88
        </h1>

        <p className="text-xl text-gray-600">
          Post-Disconnection Recovery Protocol
        </p>

        <p className="text-gray-700 leading-relaxed">
          This is not just a landing page. It is a recovery interface —
          designed to help humans re-enter digital systems after overload,
          absence, or cognitive reset.
        </p>

        <div className="flex gap-4 justify-center pt-6">
          <a
            href="/en"
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            Enter English
          </a>

          <a
            href="/fa"
            className="px-6 py-3 border border-black rounded-xl"
          >
            ورود فارسی
          </a>
        </div>

        <div className="pt-10 text-sm text-gray-400">
          LEVEL 20 · PRODUCT-AWARE UI ACTIVE
        </div>

      </div>

    </main>
  );
}
