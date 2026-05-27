import "./TarotModal.scss";

export default function TarotModal({ card, isOpen, onClose }) {
  if (!isOpen || !card) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* BOTÓN CERRAR */}
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        {/* IMAGEN CARTA */}
        <div className="modal__image-container">
          <img
            src={card.goddessImage}
            alt={card.goddessName}
            className="modal__image"
          />
        </div>

        {/* CONTENIDO */}
        <div className="modal__content">
          <h2 className="modal__title">{card.goddessName}</h2>

          <p className="modal__description">
            {card.goddessDescription}
          </p>
        </div>
      </div>
    </div>
  );
}