import { useState, useRef, useEffect } from 'react';
import { Button } from '../design-system/atoms';
import styles from './ShowMoreText.module.scss';

interface Props {
  visibleText: string;
  hiddenText?: string;
  textLength?: number;
}

export const ShowMoreText = ({ visibleText, hiddenText, textLength = 300 }: Props) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);  // initial value set to 0
  const contentRef = useRef(null);

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

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
        <br />
        {
          hiddenText 
          ? <p ref={contentRef} className={styles.hiddenText} style={{ height: showMoreText ? `${contentHeight}px` : '0px' }}>
              {hiddenText}
            </p>
          : null
        }
      </div>
      <Button 
        variant='underline' 
        color='cream' 
        text={showMoreText ? 'Show less -' : 'Know more about it +'} 
        onClick={toggleShowMore}
      />
    </div>
  );
}

