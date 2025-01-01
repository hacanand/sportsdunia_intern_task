import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          activeLink === "/dashboard" && "text-primary"
        )}
        onClick={() => handleClick("/dashboard")}
      >
        Overview
      </Link>
      <Link
        href="/dashboard/news"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
          activeLink === "/dashboard/news" && "text-primary"
        )}
        onClick={() => handleClick("/dashboard/news")}
      >
        News
      </Link>
      <Link
        href="/dashboard/payouts"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
          activeLink === "/dashboard/payouts" && "text-primary"
        )}
        onClick={() => handleClick("/dashboard/payouts")}
      >
        Payouts
      </Link>
    </nav>
  )
}
