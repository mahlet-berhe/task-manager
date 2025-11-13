import TaskCard from './TaskCard';

export default function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <div className="mt-6">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            onDelete={() => onDeleteTask(index)}
            onEdit={(updatedTask) => onEditTask(index, updatedTask)}
          />
        ))
      )}
    </div>
  );
}