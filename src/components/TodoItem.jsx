import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { Reorder, motion } from "framer-motion";

export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [showModal, setShowModal] = useState(false);

  const saveEdit = () => {
    if (!text.trim()) return;
    onUpdate(todo.id, text);
    setIsEditing(false);
  };

  return (
    <>
      <div className="todo-item fade-in">
        <label className="todo-left">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />

          {isEditing ? (
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
              className="edit-input"
              autoFocus
            />
          ) : (
            <div className="text-block">
              <span className={todo.completed ? "done" : ""}>
                {todo.text}
              </span>

              <small className="time">
                {new Date(todo.createdAt).toLocaleTimeString()}
              </small>
            </div>
          )}
        </label>

        <div className="actions">
          {isEditing ? (
            <button onClick={saveEdit}>✔</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}

          <button
            className="delete-btn"
            onClick={() => setShowModal(true)}
          >
            ✕
          </button>
        </div>
      </div>

      <ConfirmModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          onDelete(todo.id);
          setShowModal(false);
        }}
      />
    </>
  );
}
