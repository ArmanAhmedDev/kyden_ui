"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";

interface ComponentItem {
  _id: string;
  name: string;
  tag: string;
  tsxCode: string;
}

export default function Page() {
  const [components, setComponents] = useState<ComponentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await axios.get("/api/components");
        setComponents(response.data.data);
      } catch (err) {
        console.error("Error fetching components:", err);
        setError("Failed to load components");
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  if (loading) return <div className="p-4">Loading components...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-6">

        <Sidebar/>
      <h1 className="text-2xl font-bold mb-4">Components</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((item) => (
          <div key={item._id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500 mb-2">Tag: {item.tag}</p>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              <code>{item.tsxCode}</code>
            </pre>

            <h1>{item._id}</h1>
            <Link href={`/components/{_id}`}>Clieck</Link>
          </div>
        ))}
      </div>
    </div>
  );
}