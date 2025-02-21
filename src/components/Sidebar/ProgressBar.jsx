import { Progress } from "../ui/progress"

export default function ProgressBar({ category, completed, total }) {
  const percentage = (completed / total) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{category}</span>
        <span className="text-gray-500 dark:text-gray-400">
          {completed}/{total}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}

