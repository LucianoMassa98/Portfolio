import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Slide.css';

import B01 from '../assets/Destored2.jpg';
import B02 from '../assets/YemasDelSol.jpg';
import B03 from '../assets/Vendeporinsta.jpg';
import B04 from '../assets/SuperOnce.jpg';
import B05 from '../assets/ATM2.jpg';



const Slide = () => {

    return (
        <section className='slider-container'>
      <h3>Partners</h3>

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
                    <img src={B01} alt="parner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B02} alt="parner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B03} alt="parner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B04} alt="parner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B05} alt="parner" />
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
    )
}

export default Slide