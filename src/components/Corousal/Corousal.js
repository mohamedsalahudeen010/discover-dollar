import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function Corousal({corousalImage}) {
  return (
    <>
      <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': 'black',
      }}
      loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        {corousalImage&&corousalImage.map((slide)=>(
            <SwiperSlide style={{zIndex:"1"}}>
            <img src={slide.image} alt={slide.title} style={{zIndex:"1"}}/>
          </SwiperSlide>
        ))}
        
       
      </Swiper>
    </>
  );
}
