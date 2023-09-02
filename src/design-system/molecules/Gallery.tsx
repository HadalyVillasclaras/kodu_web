import { FullScreenImage } from "../../design-system/molecules";
import styles from "./Gallery.module.scss";
import  { useState } from 'react';

type GalleryProps = {
  imgs: string[];
};

export const Gallery = ({imgs}: GalleryProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  
  const handleNextImage = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  const handlePrevImage = () => {
    setCurrentImg((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
  };

  return (
    <>
      <section className={`${styles['gallery']}`}>
        <div 
          className={`${styles['gallery__elmt']} ${styles['gallery__left-side']}`}
          onClick={() => {setIsFullscreen(true); setCurrentImg(0)}}
        >
          <img src={imgs[0]} alt={''} />
        </div>
        <div 
          className={`${styles['gallery__elmt']} ${styles['gallery__right-side']} ${styles['gallery__right-side--top']}`}
          onClick={() => {setIsFullscreen(true); setCurrentImg(1)}}
        >
          <img src={imgs[1]} alt={''} />
        </div>
        <div 
          className={`${styles['gallery__elmt']} ${styles['gallery__right-side']} ${styles['gallery__right-side--bottom']}`}
          onClick={() => {setIsFullscreen(true); setCurrentImg(2)}}
        >
          <img src={imgs[3]} alt={''} />
        </div>
      </section>
      {
        isFullscreen &&
        <FullScreenImage
          images={imgs}
          currentIndex={currentImg}
          onLeft={handlePrevImage}
          onRight={handleNextImage}
          onClose={() => setIsFullscreen(false)}
        />
      }
    </>
  )
}