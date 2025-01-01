 'use client'
import { redirect } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { Sidebar } from "@/components/sidebar";
// import { auth } from "@clerk/nextjs/server";
// import { useAuth } from "@clerk/clerk-react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = useAuth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="hidden md:block" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
          <MainNav className="hidden md:flex" />
          <Search />
          <div className="ml-auto flex items-center gap-4">
            <ModeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
