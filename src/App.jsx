import { useState, useMemo, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";
import "./styles/todo.css";

export default function App() {
  const { todos, add, remove, toggle, update, reorder } = useTodos();

  //filter
  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter(t => !t.completed);
    if (filter === "done") return todos.filter(t => t.completed);
    return todos;
  }, [todos, filter]);

  //dark mode
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const completed = todos.filter(t => t.completed).length;

  return (
    <div className="container">
      {/* header */}
      <div className="top-bar">
        <h1 className="title">📝 Bạn thì kinh zồi</h1>

        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      <TodoForm onAdd={add} />

      {/* filters */}
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          In process
        </button>

        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        onDelete={remove}
        onToggle={toggle}
        onUpdate={update}
        onReorder={reorder}
      />

      <div className="counter">
        Done: {completed} | Left: {todos.length - completed}
      </div>
    </div>
  );
}
