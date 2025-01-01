import Link from "next/link"
import { LayoutDashboard, Newspaper, DollarSign } from 'lucide-react'
import { useState } from 'react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant={activeButton === "overview" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleButtonClick("overview")}
            >
              <Link href="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button
              asChild
              variant={activeButton === "news" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleButtonClick("news")}
            >
              <Link href="/dashboard/news">
                <Newspaper className="mr-2 h-4 w-4" />
                News
              </Link>
            </Button>
            <Button
              asChild
              variant={activeButton === "payouts" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleButtonClick("payouts")}
            >
              <Link href="/dashboard/payouts">
                <DollarSign className="mr-2 h-4 w-4" />
                Payouts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

