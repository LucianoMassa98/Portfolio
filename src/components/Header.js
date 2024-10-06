import React from 'react';
import './Header.css'; // Asegúrate de crear este archivo
import profileImage from '../assets/Perfil.jpg'; // Ruta de la imagen

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__photo">
          {/* Foto de perfil como un círculo */}
          <img src={profileImage} alt="Foto de perfil" className="header__photo-circle" />

        </div>
        <div className="header__info">
          <h1 className="header__name">Luciano Massa</h1>
          <h2 className="header__title">Product Manager IT Jr / Software Developer Ssr</h2>
          <p className="header__description">
          Ayudo a las organizaciones a gestionar y liderar proyectos tecnológicos con el objetivo de maximizar el valor del producto, alineando equipos de desarrollo y producción.
         </p>

         
        </div>
      </div>
    </header>
  );
};

export default Header;
