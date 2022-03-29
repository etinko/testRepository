import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ImageSlider({slides}) {
  return (
    <>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => {
        return (
          
          
            
              <SwiperSlide>
              <img src={slide.image} alt='travel image' className='image' />
              </SwiperSlide>
            
         
        );
      })}
        
      </Swiper>
    </>
  );
}
