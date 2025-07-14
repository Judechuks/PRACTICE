import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocaStorage = () => {
  try {
    const data = localStorage.getItem("rtk-tasks");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("localStorage Error: ", error);
    return [];
  }
};

const initialState = {
  tasks: loadTasksFromLocaStorage(),
  filter: {
    status: "all",
    search: "",
  },
};

const saveTasksToLocaStorage = (tasks) => {
  localStorage.setItem("rtk-tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocaStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocaStorage(state.tasks);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
      saveTasksToLocaStorage(state.tasks);
    },
    editTask: (state, action) => {
      const { id, nextText } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.text = nextText;
        saveTasksToLocaStorage(state.tasks);
      }
    },
    setStatusFilter: (state, action) => {
      state.filter.status = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.filter.search = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleComplete,
  editTask,
  setStatusFilter,
  setSearchFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
