import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  text: any,
  textLength?: number
}

export const ShowMoreText = ({text, textLength}: Props) => {
  const [showMoreText, setShowMoreText] = useState(false)
  const toggleShowMore = () => {
    setShowMoreText(!showMoreText);
  };
  let length = textLength ? textLength : 300;
  let fullText = text?.toString();
  let slicedText = fullText?.length > 300 ? fullText?.slice(0, length) + ' ...' : fullText?.slice(0, length);
  return (
    <>
      {
        text !== null && text !== undefined
        ? <Box as='article' >
            <Text style={{display:'inline'}}>
              { 
                showMoreText 
                ? fullText
                : slicedText
              } 
            </Text>
            {
              fullText.length > 300
              ? <Button variant='link' onClick={toggleShowMore}>
                  <Text as='b'>&nbsp;{ showMoreText ? 'Ver menos' : 'Ver más'}</Text>
                </Button>
              : ''
            }
          </Box>
        : <></>
      }
    </>
  )
}
