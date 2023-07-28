import styles from './BgImageXL.module.scss';
type BgImageXLProps = {
  src: string;
  alt?: string;
};

export const BgImageXL = ({ src, alt }: BgImageXLProps) => {
  return (
    <img className={styles.bgImageXl} src={src} alt={alt} />
  );
};