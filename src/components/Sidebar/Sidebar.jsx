import ActivityItem from "./ActivityItem";
import ProgressBar from "./ProgressBar";
const progressData = [
  { category: "Copywriting", completed: 3, total: 8 },
  { category: "Illustration", completed: 6, total: 10 },
  { category: "UI Design", completed: 2, total: 7 },
];

const activityData = [
  {
    user: "Andrea",
    action: "uploaded 3 documents",
    date: "Aug 10",
    avatarColor: "bg-orange-500 dark:bg-orange-700",
  },
  {
    user: "Karen",
    action: "left a comment",
    date: "Aug 10",
    avatarColor: "bg-green-500 dark:bg-green-700",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 lg:border-l  p-4 lg:p-6">
      <div className="space-y-6">
        <h2 className="font-semibold text-lg">Task Progress</h2>

        <div className="space-y-4">
          {progressData.map((item, index) => (
            <ProgressBar key={index} {...item} />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Recent Activity</h2>

          <div className="space-y-4">
            {activityData.map((item, index) => (
              <ActivityItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
