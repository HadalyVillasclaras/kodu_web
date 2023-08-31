/*Implements Swiper library*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

type ElementData = Record<string, string | number> ;

interface SwipeProps{
  elementsData: ElementData[];
  renderElement: (data:ElementData) => JSX.Element;
}

export const Swipe = ({elementsData, renderElement}: SwipeProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ type: 'fraction'}}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      // navigation={true}
    >
      { elementsData?.map((elementData, index) => (
        <section key={index}>
          <SwiperSlide key={index}>
            {renderElement(elementData)}
          </SwiperSlide>
        </section>
      ))}
    </Swiper>
  );
};