import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";
import "./styles/todo.css";

export default function App() {
  const { todos, add, remove, toggle, update } = useTodos();

  const completed = todos.filter(t => t.completed).length;

  return (
    <div className="container">
      <h1 className="title">📝 Bạn thì kinh zồi</h1>

      <TodoForm onAdd={add} />

      <TodoList
        todos={todos}
        onDelete={remove}
        onToggle={toggle}
        onUpdate={update}
      />

      <div className="counter">
        Done: {completed} | Left: {todos.length - completed}
      </div>
    </div>
  );
}