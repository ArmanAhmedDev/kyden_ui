"use client";

import ThemeToggle from "../components/layout/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white p-10 min-h-screen">
      <ThemeToggle />
      <p className="mt-4">Hello</p>
    </div>
  );
}