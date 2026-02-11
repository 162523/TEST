export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <label className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "done" : ""}>
          {todo.text}
        </span>
      </label>

      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
      >
        ✕
      </button>
    </div>
  );
}