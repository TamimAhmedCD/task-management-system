import { ModeToggle } from "@/components/mode-toggle";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddTaskButton from "@/components/Tasks/AddTask";
import TaskColumn from "@/components/Tasks/TaskColumn";
import useAxiosSecure from "@/context/useAxiosSecure";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";

// Manually inserted column names
const columns = [
  { title: "To-Do", id: "to-do" },
  { title: "In Progress", id: "in-progress" },
  { title: "Needs Review", id: "needs-review" },
  { title: "Done", id: "done" },
];

export default function TaskBoard() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch tasks from the API on component mount
  useEffect(() => {
    setLoading(true);

    axiosSecure
      .get(`/tasks/${user.email}`)
      .then((res) => {
        setTasks(res.data); // Directly set tasks from API response
        console.log("Fetched tasks:", res.data);
      })
      .catch((error) => console.error("Error fetching tasks:", error))
      .finally(() => setLoading(false));
  }, [axiosSecure, user.email]);

  const onAddTask = (newTask) => {
    // Send the new task to the server using POST request
    axiosSecure
      .post("/tasks", newTask)
      .then((res) => {
        // Once the task is added, update the local state
        setTasks((prevTasks) => {
          const updatedTasks = { ...prevTasks };
          // Add the new task to the appropriate column
          updatedTasks[newTask.category].push(res.data);
          return updatedTasks;
        });
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-gray-900 dark:text-gray-100">
      <main className="flex-1 p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
            Homepage Design
          </h1>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <AddTaskButton onAddTask={onAddTask} />
            <ProfileMenu />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <TaskColumn
              key={column.id}
              title={column.title}
              tasks={tasks[column.id] || []} // Ensure it's an array
            />
          ))}
        </div>
      </main>

      <Sidebar />
    </div>
  );
}
