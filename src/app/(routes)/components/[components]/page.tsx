"use client";

import { useEffect, useState, use } from "react";
import axios from "axios";
import Link from "next/link";

interface ComponentItem {
  _id: string;
  name: string;
  tag: string;
  tsxCode: string;
}

export default function ComponentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params using React.use() or await inside async page
  const { id } = use(params);

  const [component, setComponent] = useState<ComponentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const response = await axios.get(`/api/components/${id}`);
        setComponent(response.data.data);
      } catch (err) {
        console.error("Error fetching component details:", err);
        setError("Failed to load component details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchComponent();
    }
  }, [id]);

  if (loading) return <div className="p-6 text-gray-500">Loading component...</div>;
  if (error || !component) return <div className="p-6 text-red-500">{error || "Component not found"}</div>;

  return (
    <div className="p-6 max-w-4xl">
      <Link href="/components" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
        ← Back to all components
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold">{component.name}</h1>
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded font-mono">
          &lt;{component.tag}&gt;
        </span>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Component Code
        </h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono shadow">
          <code>{component.tsxCode}</code>
        </pre>
      </div>
    </div>
  );
}