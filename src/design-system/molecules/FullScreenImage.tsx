import { IconButton } from '../atoms';
import { ArrowsNav } from '../atoms/ArrowsNav';
import styles from "./FullScreenImage.module.scss";

type FullScreenImageProps = {
  src: string;
  onLeft: () => void;
  onRight: () => void;
  onClose: () => void;
};

export const FullScreenImage = ({ src, onLeft, onRight, onClose }: FullScreenImageProps) => {
  return (
    <section className={styles.fullscreen}>
      <span className={styles.fullscreen__btn}>
        <IconButton
          size='xl'
          icon='x'
          color='cream'
          ariaLabel="Close"
          onClick={onClose}
        />
      </span>
      <img className={styles.fullscreen__img} src={src} alt=""/>
      <ArrowsNav color='brown' onLeft={onLeft} onRight={onRight} />
    </section>
  );
};