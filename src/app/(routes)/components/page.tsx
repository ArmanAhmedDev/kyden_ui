"use client";

import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Page() {

  return (
    <>
    
     <div className="w-full h-screen bg-background dark:bg-foreground">
          <h1 className="text-foreground dark:text-background">Hello</h1>
    
          <ThemeToggle/>
        </div>
    </>
  );
}