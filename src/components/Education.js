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
        <h4>Universidad Nacional de San Juan - Facultad de Ciencias Excactas</h4>
        <p className="degree">Ingeniería en Sistemas de Información (2016 - Actualidad)</p>
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
          <li>Desarrollo Backend con Node.js</li>
          <li>React: Componentes y Estados</li>
        </ul>
      </div>

      <div className="study-section">
        <h4>Scrum.org</h4>
        <p className="degree">Certificación Profesional Scrum Master (2023)</p>
        <p>Obtuve una certificación en Scrum Master, fortaleciendo mis habilidades en la implementación de metodologías ágiles, gestión de equipos y optimización de procesos en proyectos de desarrollo de software.</p>

        <ul>
          <h5>Principales Competencias</h5>
          <li>Facilitación de ceremonias Scrum: Daily Standup, Sprint Review, y Retrospective.</li>
          <li>Implementación de herramientas para el seguimiento de tareas y planificación de sprint.</li>
          <li>Capacidad para resolver conflictos de equipo y promover la colaboración efectiva.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
