import { useState } from 'react';
import './App.css';
import { TaskItem } from './components/TaskItem';

export interface Task {
  text: string;
  id: string;
  isDone: boolean;
}

export const App = () => {
  const [inputText, setInputText] = useState('');

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (inputText.trim()) {
      setTasks((prev) => [
        ...prev,
        { text: inputText, id: crypto.randomUUID(), isDone: false },
      ]);
      setInputText('');
    }
  };

  const toggleDone = (id: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)),
    );
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTask}>Добавить задачу</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem task={task} toggleDone={toggleDone} />
        ))}
      </ul>
    </div>
  );
};
