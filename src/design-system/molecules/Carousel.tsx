import  { useState } from 'react';
import styles from './Carousel.module.scss';
import { ArrowsNav } from './ArrowsNav';
import { FullscreenImage } from './FullScreenImage';

type CarouselProps = {
  images: string[]; 
};

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((oldIndex) => {
      return oldIndex > 0 ? oldIndex - 1 : images.length - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((oldIndex) => {
      return oldIndex < images.length - 1 ? oldIndex + 1 : 0;
    });
  };

  const handleFullscreenClose = () => {
    setIsFullscreen(false);
  };

  const itemsToShow = [
    images[currentIndex % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
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
        <FullscreenImage src={images[currentIndex]} onLeft={handlePrevious} onRight={handleNext} onClose={() => setIsFullscreen(false)}/>
      }
    </div>
  );
};
