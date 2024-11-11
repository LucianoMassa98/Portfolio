import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h3>Educación</h3>
      <p>
        Mi formación académica y profesional se centra en el desarrollo de soluciones tecnológicas
        y la gestión de proyectos. He completado diversos cursos y programas que me han brindado una
        base sólida en desarrollo de software, metodologías ágiles y liderazgo.
      </p>

      <div className="study-section">
        <h4>Facultad de Ciencias Exactas, Físicas y Naturales UNSJ</h4>
        <p className="degree">Licenciatura en ciencias de la computación (2016 - Actualidad)</p>
        <p>Durante mi carrera, adquirí conocimientos fundamentales en programación, diseño de sistemas y bases de datos, además de una sólida comprensión de los principios de ingeniería de software y gestión de proyectos.</p>

        <ul>
          <h5>Principales Logros</h5>
          <li>Asistencia a talleres avanzados de desarrollo de software y prácticas en laboratorios de computación.</li>
          <li>Miembro activo del club de programación competitiva de la universidad.</li>
        </ul>
      </div>

      <div className="study-section">
        <h4>Platzi</h4>
        <p className="degree">Cursos de Desarrollo Web, Node.js y React (2022 - 2023)</p>
        <p>Completé un conjunto de cursos enfocados en tecnologías modernas de desarrollo web, incluyendo frameworks de frontend y backend, metodologías ágiles y estrategias de optimización en la nube.</p>

        <ul>
          <h5>Principales Cursos Completados</h5>
          <li>Curso de JavaScript Avanzado</li>
          <li>Diseño Web: Figma y Fundamentos </li>
          <li>Desarrollo Backend: Node.js, Express js, Passaport JS y Postgresql </li>
          <li>Desarrollo Frontend: React Js, Vue Js y .Net C#</li>
          <li>Extras: Ventas en Internet, Negocios Online y Planificación de Proyectos </li>

        </ul>
      </div>

      
    </section>
  );
};

export default Education;
