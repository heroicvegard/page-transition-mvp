"use client";
import Link from "next/link";
import Transition from "../../components/Transition";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Transition className="flex flex-1">
      <div className="flex h-fit flex-col rounded border border-red-600 bg-gray-800 p-4">
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/profile">Profile</Link>
      </div>
      <main className="p-4">{children}</main>
    </Transition>
  );
}
