import  { useRef, useState } from 'react';
import styles from './Carousel.module.scss';
import { FullscreenImage } from './FullScreenImage';
import { ArrowsNav } from '../atoms/ArrowsNav';

type CarouselProps = {
  images: string[]; 
};

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePreviousImage = () => {
    updateCurrentIndex(currentIndex - 1);
  };

  const handleNextImage = () => {
    updateCurrentIndex(currentIndex + 1);
  };

  const updateCurrentIndex = (newIndex: number) => {
    const validIndex = ((newIndex % images.length) + images.length) % images.length;
    setCurrentIndex(validIndex);
  };

  const imagesToShow = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__items}  ref={sliderRef}>
        {imagesToShow.map((img, i) => (
          <div key={i} className={styles.carousel__item} onClick={() => setIsFullscreen(true)}>
            <img src={img} alt={''} />
          </div>
        ))}
      </div>
      <ArrowsNav color='cream' onLeft={handlePreviousImage} onRight={handleNextImage}/>
      {
        isFullscreen && 
        <FullscreenImage src={images[currentIndex]} onLeft={handlePreviousImage} onRight={handleNextImage} onClose={() => setIsFullscreen(false)}/>
      }
    </div>
  );
};
