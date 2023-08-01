import { IconButton } from '../atoms/IconButton';
import { ArrowsNav } from './ArrowsNav';
import styles from "./FullScreenImage.module.scss";

type FullscreenImageProps = {
  src: string;
  onLeft: () => void;
  onRight: () => void;
  onClose: () => void;
};

export const FullscreenImage = ({ src, onLeft, onRight, onClose }: FullscreenImageProps) => {
  return (
    <section className={styles.fullscreen}>
      <IconButton
        icon='x'
        color='brown'
        ariaLabel="Close"
        onClick={onClose}
      />
      <img className={styles.fullscreen__img} src={src} alt="" style={{}} />
      <ArrowsNav color='brown' width='2' onLeft={onLeft} onRight={onRight} />
    </section>
  );
};