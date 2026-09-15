
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonPreview from "@/components/preview/Button.preview";

interface ComponentData {
    _id: string;
    name: string;
    tag: string;
    preview:string;
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


            {/* Main Content */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-medium">
                    UI Components
                </h1>

                <p className="mt-2 text-gray-500">
                    Select a component from the sidebar.
                </p>


                {/* Components Card */}

             

                {components.map((component, index) => (
                    <div key={component._id}>
                        {/* <h2>{component.name}</h2> */}
                        {/* <p>{component.preview}</p> */}

                        {/* Preview */}
                        <div className="">
                              {component.preview === "button" && (
                                <ButtonPreview />
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

