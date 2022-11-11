"use client";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Transition from "../components/Transition";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
          <Transition key={pathname}>{children}</Transition>
        </AnimatePresence>
      </body>
    </html>
  );
}
