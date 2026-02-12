import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  // load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  // save
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const add = (text) => {
    const now = new Date();
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false, createdAt: now.toISOString() },
    ]);
    toast.success(" New task added successfully!");
  };

  const remove = (id) => {
    setTodos(todos.filter(t => t.id !== id));
    toast.error("🗑️ Task removed successfully!");
  };
 
  const toggle = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  //edit
  const update = (id, newText) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
    toast.info("✏️ Task updated successfully!");
  };
  /*reorder
  const reorder = (newOrder) => {
    setTodos(newOrder);
  }*/

  return { todos, add, remove, toggle, update };
}