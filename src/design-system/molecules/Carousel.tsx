import  { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import { ArrowsNav } from './ArrowsNav';
import { DestinationCard } from './DestinationCard';
import { FullscreenImage } from './FullScreenImage';

type CarouselProps = {
  items: string[]; // Here assuming the items are strings (image URLs), adjust as per your requirements
};

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((oldIndex) => {
      return oldIndex > 0 ? oldIndex - 1 : items.length - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((oldIndex) => {
      return oldIndex < items.length - 1 ? oldIndex + 1 : 0;
    });
  };

  const handleFullscreenClose = () => {
    setIsFullscreen(false);
  };

  const itemsToShow = [
    items[currentIndex % items.length],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__items}>
        {itemsToShow.map((item, i) => (
          <div key={i} className={styles.carousel__item} onClick={() => setIsFullscreen(true)}>
            {/* <DestinationCard homeName={null} price={null} src={item} /> */}
            <img src={item} alt={''} />
          </div>
        ))}
      </div>
      <ArrowsNav color='cream' onLeft={handlePrevious} onRight={handleNext}/>
      {
        isFullscreen && 
        <FullscreenImage src={items[currentIndex]} onLeft={handlePrevious} onRight={handleNext} onClose={() => setIsFullscreen(false)}/>
      }
    </div>
  );
};
