import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { Edit } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { useState } from "react"
import { z } from "zod"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
// import useAxiosSecure from "@/context/useAxiosSecure"

const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(50, "Title must be 50 characters or less"),
  description: z.string().max(200, "Description must be 200 characters or less").optional(),
  category: z.enum(["To-Do", "In Progress", "Needs Review", "Done"], {
    required_error: "Please select a category",
  }),
})

export default function EditTaskButton({ task, handleEditTask }) {
  const [open, setOpen] = useState(false)
  // const axiosSecure = useAxiosSecure()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task.title,
      description: task.description || "",
      category: task.category,
    },
  })

  async function onSubmit(values) {
    try {
      console.log("Updated Task: ", values);
      const updatedTask = {
        ...values,
        timestamp: new Date().toISOString(), // Add timestamp field
      };
  
      // Check if handleEditTask is triggered with the correct task
      console.log("Passing updated task to parent:", updatedTask);
      
      handleEditTask(task._id, updatedTask); // Pass the updated task to parent handler
      setOpen(false); // Close dialog on successful update
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
  
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Task title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Task description (optional)" className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="To-Do">To-Do</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Needs Review">Needs Review</SelectItem>
                          <SelectItem value="Done">Done</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={form.handleSubmit(onSubmit)}>Save Changes</Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
