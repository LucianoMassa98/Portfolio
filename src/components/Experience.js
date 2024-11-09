import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h3>Experiencia</h3>
      <p>
        Cuento con experiencia liderando equipos multidisciplinarios para desarrollar
        soluciones tecnológicas que impulsan el crecimiento empresarial. Con una sólida
        trayectoria en la gestión de productos de software, he trabajado en proyectos
        innovadores, especializándome en optimizar procesos, coordinar equipos y entregar productos digitales. 
      </p>

      <div className="job-section">
        <h4>Destored</h4>
        <p className="position">Product Manager / Owner IT (01/2024 - Actualidad)</p>
        <p>Lidero la estrategia y el ciclo de vida de productos tecnológicos, desde la idea hasta su lanzamiento. Gestiono equipos de desarrollo y marketing de productos como AConex, ATodoMotorApp, YemasApp y Ofix.</p>

        <ul>
          <h5>Principales Logros</h5>
          <li>Base de networking activo, con una base de datosd de más de 70 profesionales It con los que coloboro.</li>
          <li>Priorización de Funcionalidades</li>
          <li>Interacción con Stakeholders</li>
          <li>Definición de Requisitos</li>
          <li>Validación y Testing de Productos</li>
          <li>Mejora Continua</li>
          <li>Ágile Scrum y Kanban</li>

       
        </ul>

        <ul>
          <h5>Proyectos</h5>
          <li><a href="https://aconex.up.railway.app/login" className="enlaces">App Web Escritorio - AConex</a></li>
          <li><a href="https://atodomotor.up.railway.app/login" className="enlaces">App Web Móvil - ATodoMotorApp</a></li>
          <li><a href="https://ofix.up.railway.app/" className="enlaces">App Web Móvil - OFIX</a></li>
          <li><a href="https://frondend-yemas-del-sol-development.up.railway.app/" className="enlaces">Plataforma Web - YemasApp</a></li>
          <li><a href="https://destored.up.railway.app/" className="enlaces">Página Web - Destored</a></li>
          <li><a href="https://destored.up.railway.app/" className="enlaces">Google Drive - Destored Pasantías</a></li>

        </ul>
      </div>

      <div className="job-section">
        <h4>Suinfi</h4>
        <p className="position">Software Developer Ssr (03/2024 - Actualidad)</p>
        <p>Actualmente estoy contratado para brindar mis conocimientos y servicios en el diseño, desarrollo y mantenimiento web de un Ecommerce digital y un Saas Gastronómico desde cero junto a un excelente equipo multidisciplinario</p>

        <ul>
          <h5>Principales Logros</h5>
          <li>Diseño e implementación de base de datos en posgresql y mysql.</li>
          <li>Diseño Y desarrollo de API's y microservicios con Node Js</li>
          <li>implementación de servicios en la nube como Hostinger y Railway.</li>
          <li>Colaboración en la captura de requisitos y diseño</li>
          <li>Diseño y desarrollo de Aplicaciones de escritorio con .NET</li>
        </ul>

        <ul>
          <h5>Proyectos y Referencias</h5>
          <li><a href="https://g.co/kgs/rCKZGuk" className="enlaces">Google Info - Suinfi</a></li>
          <li><a href="https://www.suinfi.com/" className="enlaces">Ecommerce - Suinfi</a></li>
          <li><a href="https://app.suinfi.com/" className="enlaces">Software Gastronómico - Suinfi</a></li>

        </ul>
      </div>

      <div className="job-section">
        <h4>Destored</h4>
        <p className="position">Cofundador y Software Developer (05/2022 - 12/2023)</p>
        <p>En esta etapa, empecé a tener más referidos y mi decisión fue la de crear un emprendimiento propio, en el cual comenzaría trabajando al principio como desarrollador backend, mientras diseñaba e implementaba un modelo de negocio propio que me permitiera escalar mis servicios para diversos proyectos tecnológicos de organizaciones como: A Todo Motor, Vendeporinsta, Yemas del Sol, El Once y El Lote.</p>

        <ul>
        <h5>Principales Logros</h5>
        <li>Diseño e implementación de bases de datos robustas en PostgreSQL y MySQL, optimizando el rendimiento y escalabilidad del sistema.</li>
        <li>Desarrollo de APIs y microservicios escalables con Node.js, mejorando la eficiencia y capacidad de integración del sistema.</li>
        <li>Implementación de soluciones en la nube con Hostinger y Railway para optimizar la disponibilidad y flexibilidad del producto.</li>
        <li>Colaboración activa en la captura de requisitos y diseño funcional, alineando el desarrollo a las necesidades del cliente y mejorando la experiencia del usuario.</li>
        <li>Diseño y desarrollo de aplicaciones de escritorio utilizando .NET, ampliando el alcance de la solución a diferentes plataformas de usuario.</li>
    </ul>

        <ul>
          <h5>Referencias</h5>
          <li><a href="https://g.co/kgs/8tfuBVF" className="enlaces">Google Info - Yemas Del Sol</a></li>
          <li><a href="https://www.instagram.com/vendeporinsta/" className="enlaces">Instagram - Vendeporinsta</a></li>
          <li><a href="https://www.facebook.com/p/A-Todo-Motor-Valle-Fertil-100083063242423/?_rdr" className="enlaces">Facebook - A Todo Motor</a></li>
          <li><a href="https://www.instagram.com/destored_/" className="enlaces">Instagram - Destored</a></li>

        </ul>
      </div>

      <div className="job-section">
        <h4>Freelancer</h4>
        <p className="position">Software Developer (05/2019 - 04/2022)</p>

        <p>Mi primera experiencia desarrollando software fue para un negocio familiar, creando un sistema de ventas, inventarios y stock para una distribuidora de bienes de consumo.</p>
        <p>Tambien desarrollando un software de gestión para Yemas Del Sol, una empresa sanjuanina de producción de huevos frescos.</p>
        <ul>
          <li>Primera experiencia en la integración con un equipo de producción.</li>
          <li>Primeras experiencias en servicios en la nube y desarrollo web.</li>
          <li>Propuestas de mejoras tecnológicas con informes de ventas e inventarios.</li>
          <h5>Referencias</h5>
          <li><a href="https://drive.google.com/drive/folders/1FgsgWqSMh5gR7lpfMCTkEqD1Ce8C2VMZ?usp=sharing" className="enlaces">Google Drive</a></li>
          <li><a href="https://g.co/kgs/8tfuBVF" className="enlaces">Google Info - Yemas Del Sol</a></li>

        </ul>
      </div>
    </section>
  );
};

export default Experience;
