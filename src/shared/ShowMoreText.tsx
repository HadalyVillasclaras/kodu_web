import { useRef, useEffect, useState } from 'react';
import styles from './ShowMoreText.module.scss';

interface Props {
  visibleText: string;
  hiddenText?: string;
  showMoreText: boolean;
  onToggle: () => void;
}

export const ShowMoreText = ({ visibleText, hiddenText, showMoreText, onToggle }: Props) => {
  const [contentHeight, setContentHeight] = useState(0);  
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef?.current) {
      setContentHeight(contentRef?.current?.scrollHeight);
    }
  }, [showMoreText]);

  return (
    <div className={styles.showMoreTextContainer}>
      <div className={styles.textContainer}>
        <p>
          {visibleText}
        </p>
        {
          hiddenText 
          ? <p ref={contentRef} className={styles.hiddenText} style={{ height: showMoreText ? `${contentHeight}px` : '0px' }}>
              {hiddenText}
            </p>
          : null
        }
      </div>
    </div>
  );
}
