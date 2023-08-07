import { useState, useRef, useEffect } from 'react';
import { Button } from '../design-system/atoms';
import styles from './ShowMoreText.module.scss';

interface Props {
  text: string;
  textLength?: number;
}

export const ShowMoreText = ({ text, textLength = 300 }: Props) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [contentHeight, setContentHeight] = useState(null);
  const contentRef = useRef(null);

  const ending = text.length > textLength ? "..." : "";
  const slicedText = text.slice(0, textLength) + ending;
  const displayedText = showMoreText ? text : slicedText;

  console.log(contentHeight);

  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };

  useEffect(() => {
    if (contentRef?.current) {
      setContentHeight(contentRef?.current?.scrollHeight);
    }
  }, [displayedText]);


  return (
    <div>
      <div 
        className={styles.textContainer} 
        style={{ height: contentHeight}}
      >
        <p ref={contentRef} className={showMoreText ? styles.expandedText : styles.collapsedText}>
          {displayedText}
        </p>
      </div>
      {text.length > textLength &&
        <Button 
          variant='underline' 
          color='cream' 
          text={showMoreText ? 'Collapse ^' : 'Know more about it'} 
          onClick={toggleShowMore}
        />
      }
    </div>
  );
}
