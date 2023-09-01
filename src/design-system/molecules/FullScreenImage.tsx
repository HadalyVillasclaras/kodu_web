import { IconButton } from '../atoms';
import { ArrowsNav } from '../atoms/ArrowsNav';
import styles from "./FullScreenImage.module.scss";

type FullScreenImageProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onLeft: () => void;
  onRight: () => void;
};

export const FullScreenImage = ({ images, currentIndex, onLeft, onRight, onClose }: FullScreenImageProps) => {
  return (
    <section className={styles.fullscreen}>
    <span className={styles.fullscreen__btn}>
      <IconButton
        size='m'
        icon='x'
        color='cream'
        ariaLabel="Close"
        onClick={onClose}
      />
    </span>
    <img className={styles.fullscreen__img} src={images[currentIndex]} alt=""/>
    <ArrowsNav color='brown' onLeft={onLeft} onRight={onRight} />
    <div className={styles.fullscreen__pagination}>
        {currentIndex + 1}/{images.length}
    </div>
  </section>
  );
};