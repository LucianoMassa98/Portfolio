import React from 'react';
import './CTA.css';


const CTA = () => {

  return (
    <section className="cta">
  <h3>Hola, gracias por llegar hasta el final</h3>
  <p>¿Tienes un proyecto en mente o te interesa saber algo más de lo que hago? Te dejo mi contacto personal :D</p>

  <a 
    href="https://wa.me/5492643183732?text=Hola%20me%20interesa%20saber%20más%20sobre%20tus%20proyectos" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button>WhatsApp</button>
  </a>

</section>
  );
};

export default CTA;
