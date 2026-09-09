"use client";

import ThemeToggle from "@/components/layout/ThemeToggle";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-screen bg-background dark:bg-foreground">
      <h1 className="text-foreground dark:text-background">Hello</h1>

      <ThemeToggle/>
    </div>
  );
}