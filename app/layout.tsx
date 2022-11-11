"use client";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col p-4">
        <nav className="space-x-4 py-4">
          <Link className="rounded bg-red-600 p-2" href="/">
            Home
          </Link>
          <Link className="rounded bg-red-600 p-2" href="/dashboard">
            Dashboard
          </Link>
        </nav>
        <AnimatePresence initial={false} mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
