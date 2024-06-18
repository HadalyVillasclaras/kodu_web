import { useRef, useEffect, useState } from 'react';
import styles from './ShowMoreText.module.scss';
import { Button } from '../atoms';
import { type Colors } from '../../tokens';
import { splitTextToShowMore } from '../../../koduc/core/utils/splitTextToShowMore';

interface ShowMoreTextProps {
  text: string
  limit: number
  buttonShowMoreText: string
  buttonShowLessText: string
  buttonColor: Colors
}

export const ShowMoreText = ({
  text,
  limit,
  buttonShowMoreText,
  buttonShowLessText,
  buttonColor
}: ShowMoreTextProps) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  const [visibleText, hiddenText] = splitTextToShowMore(text, limit);

  const toggleShowMore = () => {
    setShowMoreText(prevState => !prevState);
  };

  useEffect(() => {
    if (contentRef?.current) {
      setContentHeight(contentRef?.current?.scrollHeight);
    }
  }, [showMoreText]);

  return (
    <>
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
      <span>
        <Button
          variant='underline'
          color={buttonColor}
          text={showMoreText ? buttonShowLessText : buttonShowMoreText}
          onClick={toggleShowMore}
        />

      </span>
    </>
  );
};
