import styles from './Image.module.scss';
type ImageProps = {
  src: string;
  alt?: string;
};

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <img className={styles.Image} src={src} alt={alt} />
  );
};