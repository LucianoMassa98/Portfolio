import React from 'react';
import './CTA.css';

const CTA = () => {
  

  return (
    <div > {/* Referencia al contenedor de todo el portafolio */}
      <section className="cta">
        <h3>¡Hola! Gracias por acompañarme hasta el final.</h3>
        <p>¿Tienes algún proyecto en mente o te gustaría saber más sobre lo que hago? No dudes en contactarme. 😊</p>

        <a
          href="https://wa.me/5492643183732?text=Hola%20me%20interesa%20saber%20más%20sobre%20tus%20proyectos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>WhatsApp</button>
        </a>

        
      </section>

      {/* Aquí va el resto de tu portafolio (otros componentes o secciones) */}
      <div className="otherContent">
        {/* El resto de tu contenido del portafolio */}
      </div>
    </div>
  );
};

export default CTA;
