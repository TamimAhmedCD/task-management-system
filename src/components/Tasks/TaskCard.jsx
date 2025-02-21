import { MoreHorizontal, MessageSquare, Link2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

const categoryColors = {
  "To-Do": "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "Needs Review": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  Done: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
}

export default function TaskCard({ task }) {
  return (
    <Card className="p-4 space-y-3 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className={categoryColors[task.category]}>
          {task.category}
        </Badge>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm font-medium">{task.title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{task.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span>{new Date(task.timestamp).toLocaleDateString()}</span>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <Link2 className="h-4 w-4" />
            <span>0</span>
          </div>
        </div>
        <Avatar className="h-6 w-6">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </Card>
  )
}

