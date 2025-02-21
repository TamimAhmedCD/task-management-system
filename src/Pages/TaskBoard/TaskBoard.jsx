import { ModeToggle } from "@/components/mode-toggle";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import Sidebar from "@/components/Sidebar/Sidebar";
// import AddTaskButton from "@/components/Tasks/AddTask";
import TaskColumn from "@/components/Tasks/TaskColumn";
import useAxiosSecure from "@/context/useAxiosSecure";
import { useEffect, useState } from "react";

const initialColumns = [
  { title: "To-Do", id: "to-do" },
  { title: "In Progress", id: "in-progress" },
  { title: "Needs Review", id: "needs-review" },
  { title: "Done", id: "done" },
];

const initialTasks = {
  "to-do": [
    {
      id: 1,
      title: "Konsep hero title yang menarik",
      description: "Create an engaging hero title concept",
      category: "To-Do",
      timestamp: "2023-06-01T09:00:00Z",
    },
  ],
  "in-progress": [
    {
      id: 2,
      title: "Check the company we copied doesn't think we copied them.",
      description: "Ensure our design is original",
      category: "In Progress",
      timestamp: "2023-06-02T10:30:00Z",
    },
  ],
  "needs-review": [
    {
      id: 3,
      title: "Replace lorem ipsum text in the final designs",
      description: "Update placeholder text with actual content",
      category: "Needs Review",
      timestamp: "2023-06-03T14:15:00Z",
    },
  ],
  done: [
    {
      id: 4,
      title: "Send Advert illustrations over to production company.",
      description: "Finalize and deliver illustrations",
      category: "Done",
      timestamp: "2023-06-04T16:45:00Z",
    },
  ],
};

export default function TaskBoard() {
  const axiosSecure = useAxiosSecure();

  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data

    // Fetch categories
    axiosSecure.get("/categories-with-keys").then((res) => {
      setColumns(res.data);
    });

    // Fetch tasks
    axiosSecure
      .get("/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .finally(() => {
        setLoading(false); // Set loading to false once data is fetched
      });
  }, [axiosSecure]);

  console.log(tasks);

  // const handleAddTask = (newTask) => {
  //   const columnId = newTask.category.toLowerCase().replace(" ", "-");
  //   setTasks((prevTasks) => ({
  //     ...prevTasks,
  //     [columnId]: [...prevTasks[columnId], { ...newTask, id: Date.now() }],
  //   }));
  // };

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
            {/* <AddTaskButton onAddTask={handleAddTask} /> */}
            <ModeToggle />
            {/* Avatar group */}
            <ProfileMenu />
            {/* ... (Keep the Avatar components as they were) ... */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <TaskColumn
              key={column.key}
              title={column.title}
              tasks={tasks[column.key]}
              // onAddTask={handleAddTask}
            />
          ))}
        </div>
      </main>

      <Sidebar />
    </div>
  );
}
