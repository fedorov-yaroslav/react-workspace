import type { Task } from '../App';

interface TaskItemProps {
  task: Task;
  toggleDone: (id: string) => void;
}

export const TaskItem = ({ task, toggleDone }: TaskItemProps) => {
  return (
    <li
      key={task.id}
      onClick={() => toggleDone(task.id)}
      className={`${task.isDone ? 'isDone' : ''}`}
    >
      {task.text}
    </li>
  );
};
