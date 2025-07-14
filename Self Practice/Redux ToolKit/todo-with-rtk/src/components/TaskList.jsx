import { useState } from "react";
import { toast } from "sonner";
import { FaSave } from "react-icons/fa";
import { FaPenFancy, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  editTask,
  setSearchFilter,
  setStatusFilter,
  toggleComplete,
} from "../features/tasks/taskSlice";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const dispatch = useDispatch();

  // filter task by filter status, and by search term or return all tasks
  /* const filteredTasks = tasks.filter((task) => {
    if (filter.status === "completed") return task.completed;
    if (filter.status === "pending") return !task.completed;
    if (filter.search) {
      return task.text.toLowerCase().includes(filter.search.toLowerCase());
    }
    return true;
  }); 
  */
  // Alternativelly:
  const filteredTasks = tasks
    .filter((task) => {
      if (filter.status === "completed") return task.completed;
      if (filter.status === "pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(filter.search.toLowerCase())
    );

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditSave = (id) => {
    if (editText.trim()) {
      dispatch(editTask({ id, nextText: editText.trim() }));
      setEditId(null);
      setEditText("");
      toast.success("Task edited successfully!", {
        description: "Your changes has been saved successfully!",
      });
    }
  };

  // setSearchFilter

  if (tasks.length < 1) {
    return (
      <article className="mt-3">
        <h2 className="text-lg text-center">No task added yet!</h2>
      </article>
    );
  }

  return (
    <article className="mt-3 h-full">
      {/* search task */}
      <input
        type="text"
        placeholder="Search tasks here"
        value={filter.search}
        onChange={(e) => dispatch(setSearchFilter(e.target.value))}
        className="w-full flex-1 py-1 px-2 rounded border-1 border-blue-600 focus:outline focus:outline-blue-600"
      />

      {/* filter task */}
      <div className="filter-container flex flex-wrap-reverse gap-2 my-3 justify-between">
        <p className="text-[1.1rem] capitalize">
          {filter.status} tasks: {filteredTasks.length}
        </p>
        {/* <button
          type="button"
          onClick={() => dispatch(setStatusFilter("all"))}
          className={`py-0.5 px-2 rounded border border-blue-600 ${
            filter.status === "all" && "bg-blue-600"
          } hover:bg-blue-800 focus:ring-1 focus:ring-blue-800 ring-offset-1 ring-offset-gray-800`}
        >
          All
        </button> */}
        {/* <button
          type="button"
          onClick={() => dispatch(setStatusFilter("completed"))}
          className={`py-0.5 px-2 rounded border border-blue-600 ${
            filter.status === "completed" && "bg-blue-600"
          } hover:bg-blue-800 focus:ring-1 focus:ring-blue-800 ring-offset-1 ring-offset-gray-800`}
        >
          Completed
        </button>
        <button
          type="button"
          onClick={() => dispatch(setStatusFilter("pending"))}
          className={`py-0.5 px-2 rounded border border-blue-600 ${
            filter.status === "pending" && "bg-blue-600"
          } hover:bg-blue-800 focus:ring-1 focus:ring-blue-800 ring-offset-1 ring-offset-gray-800`}
        >
          Pending
        </button> */}
        {/* Alernatively */}
        <div className="flex gap-2">
          {["all", "completed", "pending"].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => dispatch(setStatusFilter(status))}
              className={`py-0.5 px-2 rounded border border-blue-600 ${
                filter.status === status && "bg-blue-600"
              } hover:bg-blue-800 focus:ring-1 focus:ring-blue-800 ring-offset-1 ring-offset-gray-800 capitalize`}
            >
              {status}
              {/* {status.charAt(0).toUpperCase() + status.slice(1)} */}
            </button>
          ))}
        </div>
      </div>

      {/* display tasks */}
      <ul className="h-[65vh] overflow-auto">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li key={task.id} className="my-2">
              <div className="flex gap-1 items-center border rounded py-1 px-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    dispatch(toggleComplete(task.id));
                    toast.success("Task marked as completed!");
                  }}
                  className="cursor-pointer"
                />
                {editId == task.id ? (
                  <input
                    type="text"
                    value={editText}
                    placeholder="Type in the new text"
                    autoFocus
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 py-1 px-2 rounded border-1 border-blue-600 focus:outline focus:outline-blue-600"
                  />
                ) : (
                  <div
                    onClick={() => {
                      dispatch(toggleComplete(task.id));
                      toast.success("Task marked as completed!");
                    }}
                    className={`flex-1 cursor-pointer ${
                      task.completed && "line-through text-gray-500"
                    }`}
                  >
                    {task.text}
                  </div>
                )}

                <div className="btn-container flex gap-1 items-center">
                  {editId == task.id ? (
                    <button
                      type="button"
                      className="p-1 rounded-sm bg-green-400 hover:bg-green-600"
                      onClick={() => {
                        handleEditSave(task.id);
                      }}
                    >
                      <FaSave />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="p-1 rounded-sm bg-green-400 hover:bg-green-600"
                      onClick={() => {
                        handleEdit(task.id, task.text);
                      }}
                    >
                      <FaPenFancy />
                    </button>
                  )}
                  <button
                    type="button"
                    className="p-1 rounded-sm bg-red-400 hover:bg-red-600"
                    onClick={() => {
                      dispatch(deleteTask(task.id));
                      toast.success("Task deleted successfully!");
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <article className="mt-3">
            <h2 className="text-lg text-center">No task matches your filter</h2>
          </article>
        )}
      </ul>
    </article>
  );
};

export default TaskList;
