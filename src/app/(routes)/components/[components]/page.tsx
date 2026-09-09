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
   <div className=""></div>
  );
}