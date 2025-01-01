import Link from "next/link"
import { LayoutDashboard, Newspaper, DollarSign } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button asChild variant="secondary" className="w-full justify-start">
              <Link href="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard/news">
                <Newspaper className="mr-2 h-4 w-4" />
                News
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
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

