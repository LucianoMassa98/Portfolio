import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './CTA.css';

const CTA = ({portfolioRef}) => {
  

  const downloadPDF = () => {
    const input = portfolioRef.current;
    
    // Captura todo el contenido del portfolio como imagen
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // Ancho de la página A4 en mm
      const pageHeight = 295; // Alto de la página A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Altura proporcional
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Si la imagen es más alta que una página, agregamos más páginas
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Descarga el PDF generado
      pdf.save('portfolio.pdf');
    });
  };

  return (
    <div ref={portfolioRef}> {/* Referencia al contenedor de todo el portafolio */}
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
