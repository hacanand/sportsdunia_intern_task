import { NewsDataTable } from "@/components/news-data-table"

export default function NewsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">News</h2>
      <NewsDataTable />
    </div>
  )
}

