import styles from "./Logo.module.scss";
import { Colors } from '../types';

type LogoProps = {
  color?: Colors;
  size: number;
  clickable?: boolean;
  height?: string;
};

export const Logo = ({ color = "brown", size, clickable = true }: LogoProps) => {
  
  return (
    <a href='/kodu_web/' style={{ pointerEvents: clickable ? 'auto' : 'none' }} tabIndex={clickable ? 0 : -1}>
      <svg
        viewBox="0 0 256 101"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles["logo"]} ${styles[`logo__${color}`]}`}
        width={`${size}rem`}
      >
        <path d="M0.625 99V1.8125H21.875V50.5625C28.5625 45.8125 33.4375 41 36.5 36.1875C39.5625 31.375 41.0625 25.875 41.0625 19.75C41.0625 14.5 40 8.5 37.875 1.75H60.625L37.625 37.0625L66.9375 99H44.5L21.875 50.75V99H0.625Z" />
        <path d="M96.8125 100.438L96.9375 100.562C90.375 100.562 84.625 98.3125 79.625 93.75C74.625 89.1875 70.875 83.125 68.3125 75.625C65.75 68.125 64.4375 59.75 64.4375 50.5625C64.4375 35.625 67.4375 23.5625 73.4375 14.4375C79.4375 5.3125 87.25 0.75 96.875 0.75C103.312 0.75 109 2.875 113.938 7.125C118.875 11.375 122.688 17.25 125.375 24.8125C128.062 32.375 129.375 40.9375 129.375 50.5C129.375 59.6875 128.062 68.0625 125.438 75.625C122.812 83.1875 119 89.1875 114 93.6875C109 98.1875 103.25 100.438 96.8125 100.438ZM96.9375 98.875L96.875 98.9375C100.062 98.9375 102.625 94.6875 104.5 86.25C106.375 77.8125 107.312 65.9375 107.312 50.6875C107.312 35.375 106.375 23.5 104.5 15.0625C102.625 6.625 100.125 2.4375 96.9375 2.4375C93.75 2.4375 91.25 6.625 89.375 15C87.5 23.375 86.5625 35.25 86.5625 50.625C86.5625 65.8125 87.5 77.625 89.375 86.125C91.25 94.625 93.75 98.875 96.9375 98.875Z" />
        <path d="M136.5 99L136.625 1.5625H158.75C162.188 1.5625 165.625 2.0625 169.062 3.125C172.5 4.1875 175.938 5.9375 179.375 8.375C182.812 10.8125 185.875 13.8125 188.5 17.375C191.125 20.9375 193.25 25.4375 194.875 30.9375C196.5 36.4375 197.312 42.5 197.312 49.125C197.312 65.375 193.75 77.75 186.625 86.25C179.5 94.75 169.812 99 157.5 99H136.5ZM157.875 97.125H159.5C165.062 97.125 169.062 93.4375 171.5 86.0625C173.938 78.6875 175.188 66.5625 175.188 49.75C175.188 42.9375 174.938 36.8125 174.375 31.4375C173.812 26.0625 173.062 21.625 172.125 18.125C171.188 14.625 170.062 11.6875 168.688 9.375C167.312 7.0625 165.875 5.4375 164.375 4.5C162.875 3.5625 161.25 3.0625 159.5 3.0625H157.875V97.125Z" />
        <path d="M230.875 100.438H230.562C226.875 100.438 223.562 100.062 220.625 99.25C217.688 98.4375 215.312 97.5 213.438 96.375C211.562 95.25 210 93.6875 208.688 91.75C207.375 89.8125 206.375 88.0625 205.75 86.5625C205.125 85.0625 204.625 83.0625 204.312 80.625C204 78.1875 203.812 76.3125 203.75 75.0625C203.688 73.8125 203.688 72.0625 203.688 69.875V1.6875H224.938V72.25C224.938 73.125 225 74.4375 225.125 76.1875C225.25 77.9375 225.375 79.3125 225.562 80.3125C225.75 81.3125 226 82.5625 226.312 84.125C226.625 85.6875 227.062 86.9375 227.562 87.875C228.062 88.8125 228.688 89.8125 229.438 90.9375C230.188 92.0625 231.062 92.875 232 93.4375C232.938 94 234.125 94.5 235.5 94.9375C236.875 95.375 238.375 95.5625 240 95.5625C249.375 95.5625 254.062 88.3125 254.062 73.8125V55.625C254.062 42.3125 253.188 31.3125 251.438 22.625C249.688 13.9375 246.75 7 242.562 1.75H255.5V73.9375C255.5 75.3125 255.5 76.375 255.5 77.1875C255.5 78 255.438 79.1875 255.312 80.8125C255.188 82.4375 255 83.75 254.75 84.8125C254.5 85.875 254.062 87.125 253.5 88.625C252.938 90.125 252.25 91.375 251.438 92.375C250.625 93.375 249.625 94.4375 248.375 95.5625C247.125 96.6875 245.688 97.5625 244.062 98.1875C242.438 98.8125 240.5 99.375 238.25 99.8125C236 100.25 233.562 100.438 230.875 100.438Z" />
      </svg>
    </a>
  );
};