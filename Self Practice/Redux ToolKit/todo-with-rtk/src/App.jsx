import { Toaster } from "sonner";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="max-w-lg mx-auto my-5 p-4 bg-gray-800 rounded-md">
      <article className="font-medium mb-3">
        <h1 className="text-xl font-medium mb-3">
          Task manager with Redux Toolkit
        </h1>
      </article>
      <TaskForm />
      <TaskList />

      {/* Sonner - For a toast notification */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          classNames: {
            toast: "flex items-start", // Aligns items to the top
            icon: "self-start", // Ensures the icon aligns to the top
          },
          // duration: 5000, // speed of the toast before it disappears
        }}
      />
    </main>
  );
}

export default App;
