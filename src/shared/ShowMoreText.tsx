import { useState } from 'react';
import { Button } from '../design-system/atoms';

interface Props {
  text: any,
  textLength?: number
}

export const ShowMoreText = ({ text, textLength }: Props) => {
  const [showMoreText, setShowMoreText] = useState(false)
  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };
  let length = textLength ? textLength : 300;
  let fullText = text?.toString();
  let slicedText = fullText?.length > 300 ? fullText?.slice(0, length) : fullText?.slice(0, length);
  return (
    <>
      {
        text !== null && text !== undefined
          ? <article>
            <p style={{ display: 'block' }}>
              {
                showMoreText
                  ? fullText
                  : slicedText
              }
            </p>
            {
              fullText.length > 300
                ?
                <Button onClick={toggleShowMore} variant='underline' color='cream' text={showMoreText ? 'Colapse ^' : 'Know more about it'} />
                : ''
            }
          </article>
          : <></>
      }
    </>
  )
}
