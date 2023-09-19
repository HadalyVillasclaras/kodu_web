import styles from './Input.module.scss';

interface Props {
  placeholder: string
  type?: 'text' | 'number' | 'date'
}

export const Input = ({ placeholder, type = 'text' }: Props) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};
