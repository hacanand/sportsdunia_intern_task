import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const articles = [
  {
    id: "1",
    title: "The Future of AI",
    author: "John Doe",
    date: "2023-04-01",
    type: "Technology",
  },
  {
    id: "2",
    title: "Climate Change: A Global Crisis",
    author: "Jane Smith",
    date: "2023-04-02",
    type: "Environment",
  },
  {
    id: "3",
    title: "The Rise of Cryptocurrencies",
    author: "Bob Johnson",
    date: "2023-04-03",
    type: "Finance",
  },
  {
    id: "4",
    title: "Space Exploration in 2023",
    author: "Alice Brown",
    date: "2023-04-04",
    type: "Science",
  },
  {
    id: "5",
    title: "The Impact of Social Media",
    author: "Charlie Green",
    date: "2023-04-05",
    type: "Society",
  },
]

export function RecentArticles() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id}>
            <TableCell>{article.title}</TableCell>
            <TableCell>{article.author}</TableCell>
            <TableCell>{article.type}</TableCell>
            <TableCell>{article.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

