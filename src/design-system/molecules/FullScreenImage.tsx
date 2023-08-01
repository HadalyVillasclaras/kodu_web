import { Icon } from '../atoms/index';
import { ArrowsNav } from './ArrowsNav';
import styles from "./FullScreenImage.module.scss";

type FullscreenImageProps = {
  src: string;
  onLeft: () => void;
  onRight: () => void;
  onClose: () => void;
};

export const FullscreenImage = ({ src, onLeft, onRight, onClose}: FullscreenImageProps) => {
  return (
    <section className={styles.fullscreen}>
      <button className={styles.fullscreen__btn} onClick={onClose}><Icon icon='x' size='xl' width='2' color='brown'/></button>
      <img className={styles.fullscreen__img} src={src} alt="" style={{ }} />
      <ArrowsNav color='brown' width='2' onLeft={onLeft} onRight={onRight} />
    </section>
  );
};
