import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Slide.css';

import platzi from '../assets/certificados/platzi.jpg';

import c1 from '../assets/certificados/1.pdf';
import c2 from '../assets/certificados/2.pdf';
import c3 from '../assets/certificados/3.pdf';
import c4 from '../assets/certificados/4.pdf';
import c5 from '../assets/certificados/5.pdf';
import c6 from '../assets/certificados/6.pdf';
import c7 from '../assets/certificados/7.pdf';
import c8 from '../assets/certificados/8.pdf';
import c9 from '../assets/certificados/9.pdf';
import c10 from '../assets/certificados/10.pdf';
import c11 from '../assets/certificados/11.pdf';
import c12 from '../assets/certificados/12.pdf';
import c13 from '../assets/certificados/13.pdf';




const Carousel = () => {
    

    return (

<section className='slider-container'>
<h3>Certificaciones</h3>

      <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
              rotate: 0,
              stretch: -60,
              depth: 250,
              modifier: 3.5,
              slideShadows: false,
          }}
          navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
      >
          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c1} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>

          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c2} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>

          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c3} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>

          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c4} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>
        

          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c5} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>

          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c6} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>

          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c7} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>


          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c8} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>


          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c9} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>


          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c10} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>


          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c11} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>


          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c12} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>


          <SwiperSlide>
              <img src={platzi} alt="certificado" />
              <a href={c13} target="_blank" rel="noopener noreferrer" className="view-pdf">
                            Ver PDF
                        </a>
          </SwiperSlide>

          <div className='slider-controler'>
              <div className='swiper-button-prev'>
                  <ArrowLeft size={20} />
              </div>
              <div className='swiper-button-next'>
                  <ArrowRight size={20} />
              </div>
          </div>
      </Swiper>
  </section>        


    );
};

export default Carousel;
