
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

interface ComponentData {
    _id: string;
    name: string;
    tag: string;
    tsxCode: string;
    createdAt?: string;
    updatedAt?: string;
}

export default function ComponentsPage() {
    const [components, setComponents] = useState<ComponentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchComponents = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await axios.get("/api/components");

                if (response.data.success) {
                    setComponents(response.data.data);
                } else {
                    setError(
                        response.data.message || "Failed to fetch components"
                    );
                }
            } catch (error) {
                console.error("Failed to fetch components:", error);

                setError("Something went wrong while fetching components.");
            } finally {
                setLoading(false);
            }
        };

        fetchComponents();
    }, []);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 border-r p-5">
                <h2 className="mb-4 font-semibold">
                    Components
                </h2>

                {loading && <p>Loading...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && (
                    <nav>
                        <ul className="space-y-2">
                            {components.map((component) => (
                                <li key={component._id}>
                                    <Link
                                        href={`/components/${component._id}`}
                                        className="block rounded-md px-3 py-2 hover:bg-gray-100"
                                    >
                                        {component.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold">
                    Components
                </h1>

                <p className="mt-2 text-gray-500">
                    Select a component from the sidebar.
                </p>
            </main>
        </div>
    );
}

