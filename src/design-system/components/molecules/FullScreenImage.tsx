import { useEffect, useLayoutEffect, useRef } from 'react';
import { IconButton, Pagination } from '../atoms';
import { DinamicControlButtons } from './DinamicControlButtons';
import styles from "./FullScreenImage.module.scss";
import { gsap } from 'gsap';

type FullScreenImageProps = {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onLeft: () => void;
  onRight: () => void;
  onClose: () => void;

};

export const FullScreenImage = ({ images, currentIndex, isOpen, onClose, onLeft, onRight }: FullScreenImageProps) => {
  const fullScreenRef = useRef(null);
  const fsTween = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!fsTween.current) {
      fsTween.current = gsap.fromTo(fullScreenRef.current,
        {
          top: '100%', 
          borderTopRightRadius: '5rem',
          borderTopLeftRadius: '5rem',
        },
        {
          top: '0%',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px',
          ease: 'ease',
          duration: .5,
          paused: true
        }
      );
    }

    return () => {
      fsTween.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      fsTween.current?.play();
    } else {
      fsTween.current?.reverse();
    }
  }, [isOpen]);

  return (
    <section ref={fullScreenRef} className={styles.fullscreen}>
      <span className={styles.fullscreen__btn}>
        <IconButton
          size='m'
          icon='x'
          color='cream'
          ariaLabel="Close"
          onClick={onClose}
        />
      </span>
      <div className={styles['fullscreen__img-wrapper']}>
        <DinamicControlButtons
          onLeftClick={onLeft}
          onRightClick={onRight}
          btnsWidth="30%"
        >
          <section>
            <img src={images[currentIndex]} alt="" />
          </section>
        </DinamicControlButtons>
      </div>
      <Pagination current={currentIndex + 1} total={images.length} color='cream'/>
      {/* <div className={styles.fullscreen__pagination}>
        {currentIndex + 1}/{images.length}
      </div> */}
    </section>
  );
};