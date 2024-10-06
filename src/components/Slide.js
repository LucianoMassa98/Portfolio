import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import B01 from '../assets/hamburger-01.png'
import B02 from '../assets/hamburger-02.png'
import B03 from '../assets/hamburger-03.png'
import B04 from '../assets/hamburger-04.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Slide.css';

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
                    stretch: -75,
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
                    <img src={B01} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B02} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B03} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B04} alt="burger" />
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