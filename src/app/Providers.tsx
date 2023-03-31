"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="bg-pink-100 dark:bg-zinc-950 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
