import React from 'react';
import './Profile.css'; // Asegúrate de crear este archivo
import profileImage from '../assets/Perfil.jpg'; // Ruta de la imagen

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__photo">
          {/* Foto de perfil como un círculo */}
          <img src={profileImage} alt="Foto de perfil" className="profile__photo-circle" />

        </div>
        <div className="profile__info">
          <h1 className="profile__name">Luciano Massa</h1>
          <h2 className="profile__title">Product Manager IT Jr / Software Developer Ssr</h2>
          <p className="profile__description">
          Ayudo a las organizaciones a gestionar y liderar proyectos tecnológicos con el objetivo de maximizar el valor del producto, alineando equipos de desarrollo y producción.
         </p>

         
        </div>
      </div>
    </div>
  );
};

export default Profile;
