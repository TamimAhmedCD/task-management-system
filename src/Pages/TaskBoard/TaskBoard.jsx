import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ModeToggle } from "@/components/mode-toggle";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddTaskButton from "@/components/Tasks/AddTask";
import TaskColumn from "@/components/Tasks/TaskColumn";
import useAxiosSecure from "@/context/useAxiosSecure";
import useAuth from "@/hooks/useAuth";

// Define WebSocket connection (replace with your backend URL)
const socket = io("http://localhost:3000"); // Change to your deployed backend URL

const columns = [
  { title: "To-Do", id: "to-do" },
  { title: "In Progress", id: "in-progress" },
  { title: "Needs Review", id: "needs-review" },
  { title: "Done", id: "done" },
];

export default function TaskBoard() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [tasks, setTasks] = useState({
    "to-do": [],
    "in-progress": [],
    "needs-review": [],
    "done": [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();

    // Listen for real-time updates
    socket.on("task_created", (newTask) => {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [newTask.category]: [...(prevTasks[newTask.category] || []), newTask],
      }));
    });

    socket.on("task_updated", ({ id, updatedTask }) => {
      setTasks((prevTasks) => {
        const updatedCategory = updatedTask.category || "to-do";
        return {
          ...prevTasks,
          [updatedCategory]: (prevTasks[updatedCategory] || []).map((task) =>
            task._id === id ? updatedTask : task
          ),
        };
      });
    });

    socket.on("task_deleted", ({ id }) => {
      setTasks((prevTasks) => {
        const newTasks = {};
        Object.keys(prevTasks).forEach((category) => {
          newTasks[category] = (prevTasks[category] || []).filter(
            (task) => task._id !== id
          );
        });
        return newTasks;
      });
    });

    return () => {
      socket.off("task_created");
      socket.off("task_updated");
      socket.off("task_deleted");
    };
  }, [axiosSecure, user.email]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get(`/tasks/${user.email}`);
      setTasks(res.data || {
        "to-do": [],
        "in-progress": [],
        "needs-review": [],
        "done": [],
      });
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks({
        "to-do": [],
        "in-progress": [],
        "needs-review": [],
        "done": [],
      });
    } finally {
      setLoading(false);
    }
  };

  const onAddTask = async (newTask) => {
    await axiosSecure.post("/tasks", newTask);
  };

  const handleEditTask = async (taskId, editedTask) => {
    await axiosSecure.put(`/tasks/${taskId}`, editedTask);
  };

  const handleDeleteTask = async (taskId) => {
    await axiosSecure.delete(`/tasks/${taskId}`);
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
              tasks={tasks[column.id] || []} // Ensure tasks[column.id] is an array
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </main>

      <Sidebar />
    </div>
  );
}