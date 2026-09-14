"use client";

import { useState } from "react";

interface ComponentData {
  _id: string;
  name: string;
  tag: string;
  tsxCode: string;
}

export default function ComponentCard({
  component,
}: {
  component: ComponentData;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div>
          <h2 className="font-medium">{component.name}</h2>
          <p className="text-sm text-muted-foreground">
            {component.tag}
          </p>
        </div>

        <button
          onClick={() => setShowCode(!showCode)}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>

      {/* Preview */}
      {!showCode && (
        <div className="flex min-h-[250px] items-center justify-center p-8">
          <button className="rounded-md bg-black px-4 py-2 text-sm text-white">
            Click me
          </button>
        </div>
      )}

      {/* Code */}
      {showCode && (
        <pre className="min-h-[250px] overflow-x-auto bg-zinc-950 p-6 text-sm text-zinc-100">
          <code>{component.tsxCode}</code>
        </pre>
      )}
    </div>
  );
}