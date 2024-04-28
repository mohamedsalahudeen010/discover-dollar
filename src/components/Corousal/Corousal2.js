import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation,Pagination } from 'swiper/modules';

export default function Corousal2({corousalImage}) {
  return (
    <>
      <Swiper
      style={{
        '--swiper-navigation-color': 'rgb(51, 51, 180)',
        '--swiper-pagination-color': 'whitesmoke',
      }}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        modules={[Navigation,Pagination]}
        className="mySwiper"
        height="5rem"
      >


{corousalImage&&corousalImage.map((slide)=>(
            <SwiperSlide>
            <img src={slide.image} alt={slide.title} style={{zIndex:"1",width:"80%",hieght:"80%"}}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
