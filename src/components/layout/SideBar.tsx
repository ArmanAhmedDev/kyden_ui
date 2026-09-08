"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ComponentItem {
  _id: string;
  name: string;
  tag: string;
}

export default function Sidebar() {
  const [components, setComponents] = useState<ComponentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await axios.get("/api/components");
        setComponents(response.data.data);
      } catch (err) {
        console.error("Error fetching components for sidebar:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  return (
    <aside className="w-64 border-r bg-gray-50 h-screen p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-4 px-2">Components</h2>

      {loading ? (
        <div className="text-sm text-gray-500 px-2">Loading nav...</div>
      ) : (
        <nav className="flex flex-col gap-1">
          {components.map((item) => {
            const href = `/components/${item._id}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item._id}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}
    </aside>
  );
}