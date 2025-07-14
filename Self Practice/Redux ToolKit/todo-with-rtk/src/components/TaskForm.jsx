import { useState } from "react";
import { toast } from "sonner";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast.error("Please enter a task", {
        description: "You cannot add an empty task.",
        duration: 6000,
        position: "top-right",
        // style: {
        //   backgroundColor: "#f87171", // Tailwind red-400
        //   color: "#fff",
        // },
      });
      return;
    }

    dispatch(
      addTask({
        id: nanoid(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      })
    );

    setInputValue(""); // clears the input field
    // send successful submit notification
    toast.success("Task added successfully!", {
      description: "Your task has been added successfully!",
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-1 items-center">
      {/* add task form */}
      <input
        type="text"
        placeholder="Enter task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 py-1 px-2 rounded border-1 border-blue-600 focus:outline focus:outline-blue-600"
      />
      <button
        type="submit"
        className="py-1 px-2 rounded bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-800 ring-offset-1 ring-offset-gray-800"
      >
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
