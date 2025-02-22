import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import TaskCard from "./TaskCard"

export default function TaskColumn({ title, tasks, handleEditTask,handleDeleteTask }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{title}</h2>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
      ))}
    </div>
  )
}

