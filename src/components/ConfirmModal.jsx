export default function ConfirmModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Vũ muốn trốn việc hả Vũ, không xong với anh đâu Vũ nhá?</p>

        <div className="modal-actions">
          <button onClick={onClose}>Keep</button>
          <button className="danger" onClick={onConfirm}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
