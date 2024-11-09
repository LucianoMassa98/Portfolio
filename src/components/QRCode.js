import React from 'react';
import './QRCode.css'; // Importamos los estilos
import qrImage from '../assets/qr.png';

const QRCode = () => {
  return (
    <div className="qr-code-container">
      <div className="qr-code-wrapper">
        <img src={qrImage} alt="QrCode" className="qr-image" />
      </div>
    </div>
  );
};

export default QRCode;
