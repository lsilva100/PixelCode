"use client";

import { useState } from "react";

export default function Toggle() {
  const [ativo, setAtivo] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAtivo(!ativo)}
      className="flex h-8 w-16 items-center rounded-full bg-gray-700 p-1 shadow-black/30 transition-all duration-300"
    >
      <span
        className={`h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
          ativo ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
}