import { Swiper, SwiperSlide } from 'swiper/react';
import destinations from "../../../config/data/Destinations.json";

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';
import { DestinationCard } from '../DestinationCard';

export const Swipe = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {destinations.map((destination, index) => (
          <section key={index}>
            <SwiperSlide key={index}><DestinationCard id={Number(destination.id)} homeName={destination.homeName} src={destination.img} /></SwiperSlide>
          </section>
        ))}
        {/* <SwiperSlide><img src={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-3.png`} style={{ height: "500px" }} alt="" /></SwiperSlide> */}
      </Swiper>
    </>
  );
};