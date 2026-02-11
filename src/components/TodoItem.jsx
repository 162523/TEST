import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

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
      <div className="todo-item">
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
            <span className={todo.completed ? "done" : ""}>
              {todo.text}
            </span>
          )}
        </label>

        <div className="actions">
          {isEditing ? (
            <button onClick={saveEdit}>WOW, Amazing, đẹp này, 10 điểm, chốt luôn này</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Sửa luôn</button>
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
