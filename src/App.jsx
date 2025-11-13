import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './index.css';

// Load tasks from localStorage
const getStoredTasks = () => {
  const stored = localStorage.getItem('tasks');
  return stored ? JSON.parse(stored) : [];
};

function App() {
  const [tasks, setTasks] = useState(getStoredTasks());
  const [count, setCount] = useState(tasks.length);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setCount(tasks.length);
  }, [tasks]);

  // Toggle dark mode class on <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const editTask = (indexToEdit, updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToEdit ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Welcome to your React + Tailwind app!</p>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded"
          >
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
        <p className="mt-4">You’ve added {count} task{count !== 1 ? 's' : ''}.</p>

        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;