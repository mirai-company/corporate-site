"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-heading text-[#0B3D91] mb-4">Error</h1>
        <h2 className="text-xl font-heading text-[#1A1A1A] mb-4">
          エラーが発生しました
        </h2>
        <p className="text-gray-500 font-gothic mb-8">
          申し訳ございません。問題が発生しました。
          <br />
          もう一度お試しください。
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 bg-[#0B3D91] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#061E4A] transition-all duration-300 font-gothic cursor-pointer"
        >
          再試行する
        </button>
      </div>
    </div>
  );
}
