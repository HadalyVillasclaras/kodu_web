/*Implements Swiper library*/
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
import SwiperCore  from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { useState } from 'react';

type ElementData = Record<string, string | number> ;

type PaginationData = {
  currentIndex: number;
  totalSlides: number;
};

interface SwipeProps{
  elementsData: ElementData[];
  renderElement: (data:ElementData, paginationData?: PaginationData) => JSX.Element;
}

export const Swipe = ({elementsData, renderElement}: SwipeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      // pagination={{ type: 'fraction'}}
      // modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={handleSlideChange}
      // navigation={true}
    >
      { elementsData?.map((elementData, index) => (
        <section key={index}>
          <SwiperSlide key={index}>
          {renderElement(elementData, { currentIndex: currentIndex + 1, totalSlides: elementsData.length })}
          </SwiperSlide>
        </section>
      ))}
    </Swiper>
  );
};