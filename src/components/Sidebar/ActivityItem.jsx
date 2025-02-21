import { Avatar, AvatarFallback } from "../ui/avatar";

export default function ActivityItem({ user, action, date, avatarColor }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className={`h-8 w-8 ${avatarColor}`}>
        <AvatarFallback>{user[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm">
          <span className="font-medium">{user}</span> {action}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </div>
  );
}
