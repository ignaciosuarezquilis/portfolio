import React from 'react';
import '../styles/CvModal.css';  // Estilos para el modal

const CvModal = ({ show, onClose, cvUrl }) => {
  if (!show) return null; // Si no se debe mostrar el modal, lo retorna vacío

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Mi CV</h2>
        {/* Puedes mostrar el CV en un iframe si es un PDF */}
        <iframe 
          src={cvUrl} 
          width="100%" 
          height="500px" 
          title="Mi CV"
        ></iframe>
      </div>
    </div>
  );
};

export default CvModal;
