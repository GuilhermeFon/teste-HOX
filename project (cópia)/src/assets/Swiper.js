import React from "react";
import Arrow from './Arrow_pag'

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import Carouselone from './images/Carousel01.png'
import Carouseltwo from './images/Carousel02.png'
import Carouselthree from './images/Carousel03.png'
import Arrowpng from './images/Arrow.png'



export default () => {

  const images = [Carouselone, Carouseltwo, Carouselthree]

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
      <SwiperSlide className="SwiperSlide" id="Slide01">
        <div className="Carousel_Itens">
          <div className="Carousel_txt">
            <h2>HOW TO ORGANIZE YOUR KITCHEN.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <img src={images[0]} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide" id="Slide02">
        <div className="Carousel_Itens">
          <div className="Carousel_txt">
            <h2>TOP 10 INTERIORS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <img src={images[1]} />
        </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide" id="Slide03">
        <div className="Carousel_Itens">
          <div className="Carousel_txt">
            <h2>HOW TO USE GREY COLOR IN WALLS:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src={images[2]} />
        </div>
      </SwiperSlide>
      <Arrow />
    </Swiper>
  );
};