import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Swipe = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  return (
    <>
    <Swiper
     slidesPerView={1}
     spaceBetween={30}
     loop={true}
    >
      <SwiperSlide><img src={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`} style={{width: '300px'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-2.png`} style={{width: '300px'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-3.png`} style={{width: '300px'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-4.png`} style={{width: '300px'}} alt="" /></SwiperSlide>
    </Swiper>
    </>
  );
};