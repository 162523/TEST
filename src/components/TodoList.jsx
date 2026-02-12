import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onToggle, onUpdate }) {
  if (!todos.length) {
    return <p className="empty">Chưa cần làm gì 🎉</p>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}